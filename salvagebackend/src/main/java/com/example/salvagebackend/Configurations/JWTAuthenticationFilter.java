package com.example.salvagebackend.Configurations;


import com.example.salvagebackend.Configurations.GlobalExceptionHandler;
import com.example.salvagebackend.Utilities.JWTUtility;
import io.jsonwebtoken.Claims;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import java.io.IOException;

@Component
@WebFilter(urlPatterns = "/api/*")
public class JWTAuthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private GlobalExceptionHandler globalExceptionHandler;
    private final JWTUtility jwtUtility;

    public JWTAuthenticationFilter(JWTUtility jwtUtility) {
        this.jwtUtility = jwtUtility;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try{
            String token = extractToken(request);
            if (token != null && !jwtUtility.isTokenExpired(token)) {
                Claims claims = jwtUtility.extractClaims(token);
                String username = claims.getSubject();
                if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                            username, null, null);
                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                } else {
                    System.out.println("Token invalid");
                }
            }
            filterChain.doFilter(request, response);
        } catch (AccessDeniedException e) {
            e.printStackTrace();
            globalExceptionHandler.handleAccessDeniedException(e);
        }
    }

    private String extractToken(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            return header.substring(7);  // Extract the token after "Bearer "
        }
        return null;
    }
}
