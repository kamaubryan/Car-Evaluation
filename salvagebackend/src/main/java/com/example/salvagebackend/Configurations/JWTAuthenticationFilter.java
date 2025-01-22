package com.example.salvagebackend.Configurations;

import com.example.salvagebackend.Services.CustomUserDetailsService;
import com.example.salvagebackend.Utilities.JWTUtility;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.security.SignatureException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@Component
@WebFilter(urlPatterns = "/api/*")
public class JWTAuthenticationFilter extends OncePerRequestFilter {


    private final ObjectMapper objectMapper;
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService userDetailsService;
    private final JWTUtility jwtUtility;

    public JWTAuthenticationFilter(JWTUtility jwtUtility, ObjectMapper objectMapper, AuthenticationManager authenticationManager, CustomUserDetailsService userDetailsService) {
        this.jwtUtility = jwtUtility;
        this.objectMapper = objectMapper;
        this.authenticationManager = authenticationManager;
        this.userDetailsService = userDetailsService;
    }

//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        try {
//            String token = extractToken(request);
//
//            if (token != null) {
//                // Log the token to verify it
//                System.out.println("Extracted JWT token: " + token);
//
//                if (!jwtUtility.isTokenExpired(token)) {
//                    Claims claims = jwtUtility.extractClaims(token);
//                    String username = claims.getSubject();
//
//                    // Log the extracted username
//                    System.out.println("Extracted username from token: " + username);
//
//                    if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
//                                username,
//                                null,  // You can add authorities here if needed
//                                null
//                        );
//                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//                        // Authenticate the user with the AuthenticationManager
//                        Authentication auth = authenticationManager.authenticate(authentication);
//                        SecurityContextHolder.getContext().setAuthentication(auth);
//                    }
//                }
//            } else {
//                System.out.println("No JWT token found in request header.");
//            }
//
//            filterChain.doFilter(request, response);
//        } catch (ExpiredJwtException e) {
//            sendErrorResponse(response, HttpServletResponse.SC_UNAUTHORIZED, "JWT token has expired");
//        } catch (MalformedJwtException | SignatureException e) {
//            sendErrorResponse(response, HttpServletResponse.SC_UNAUTHORIZED, "Invalid JWT token");
//        } catch (Exception e) {
//            sendErrorResponse(response, HttpServletResponse.SC_INTERNAL_SERVER_ERROR, "Authentication failed");
//        }
//    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String authHeader = request.getHeader("Authorization");
            String token = null;
            String username = null;
            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                token = authHeader.substring(7);
                username = jwtUtility.extractUsername(token);
            }
//      If the accessToken is null. It will pass the request to next filter in the chain.
//      Any login and signup requests will not have jwt token in their header, therefore they will be passed to next filter chain.
            if (token == null) {
                filterChain.doFilter(request, response);
                return;
            }
//       If any accessToken is present, then it will validate the token and then authenticate the request in security context
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                if (jwtUtility.validateToken(token, userDetails)) {
                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
                }
            }

            filterChain.doFilter(request, response);
        } catch (AccessDeniedException e) {
            //      ApiErrorResponse errorResponse = new ApiErrorResponse(HttpServletResponse.SC_FORBIDDEN, e.getMessage());
            response.setStatus(HttpServletResponse.SC_FORBIDDEN);
            //    response.getWriter().write(toJson(errorResponse));
        }
    }


//    private void processToken(String token, HttpServletRequest request) {
//        if (!jwtUtility.isTokenExpired(token)) {
//            Claims claims = jwtUtility.extractClaims(token);
//            String username = claims.getSubject();
//
//            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
//                        username,
//                        null,
//                        null  // You can add authorities here if needed
//                );
//                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//
//                // Authenticate the user with the AuthenticationManager
//                Authentication auth = authenticationManager.authenticate(authentication);
//                SecurityContextHolder.getContext().setAuthentication(auth);
//            }
//        }
//    }


    private String extractToken(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            return header.substring(7);
        }
        return null;
    }

    private void sendErrorResponse(HttpServletResponse response, int status, String message) throws IOException {
        response.setStatus(status);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);

        Map<String, Object> errorDetails = new HashMap<>();
        errorDetails.put("timestamp", LocalDateTime.now().toString());
        errorDetails.put("status", status);
        errorDetails.put("error", message);
        errorDetails.put("path", "JWT Authentication");

        objectMapper.writeValue(response.getWriter(), errorDetails);
    }
}
