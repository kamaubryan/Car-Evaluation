//package com.example.salvagebackend.Configurations;
//
//
//import com.example.salvagebackend.Services.UserService;
//import io.micrometer.common.util.StringUtils;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//import org.springframework.security.web.util.matcher.RequestMatcher;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//
//@Component
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);
//
//    private final JwtService jwtService;
//
//    private final UserService userService;
//
//    public JwtAuthenticationFilter(JwtService jwtService, UserService userService) {
//
//        this.jwtService = jwtService;
//
//        this.userService = userService;
//    }
//    private final RequestMatcher requestMatcher = new AntPathRequestMatcher("/api/v1/auth/**");
//
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//        if(this.requestMatcher.matches(request)){
//            filterChain.doFilter(request,response);
//            return;
//        }
//
//        String authHeader = request.getHeader("Authorization");
//        logger.info("Authorization Header: {}", authHeader);
//
//        if (StringUtils.isNotEmpty(authHeader) && authHeader.startsWith("Bearer ")) {
//            String jwt = authHeader.substring(7);
//            String userEmail = jwtService.extractUserName(jwt);
//
//            logger.info("JWT: {}", jwt);
//            logger.info("UserEmail: {}", userEmail);
//
//            if (StringUtils.isNotEmpty(userEmail) && SecurityContextHolder.getContext().getAuthentication() == null) {
//                UserDetails userDetails = userService.userDetailsService().loadUserByUsername(userEmail);
//                logger.info("UserDetails: {}", userDetails);
//
//                if (jwtService.isTokenValid(jwt, userDetails)) {
//                    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
//                            userDetails, null, userDetails.getAuthorities());
//                    authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                    logger.warn("Invalid JWT token for user: {}", userEmail);
//                    SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//                }
//            }
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}
