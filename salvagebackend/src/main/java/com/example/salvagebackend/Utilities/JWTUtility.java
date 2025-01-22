package com.example.salvagebackend.Utilities;

import com.example.salvagebackend.Configurations.GlobalExceptionHandler;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import java.util.Date;

@Component
public class JWTUtility {

    @Autowired
    private GlobalExceptionHandler globalExceptionHandler;

    private static final SecretKey SECRET_KEY = Keys.secretKeyFor(SignatureAlgorithm.HS256);
    private static final String ISSUER = "salvageBackend";

    // Method to generate JWT token
    public String generateJWT(String username) {
        return Jwts.builder()
                .setIssuer(ISSUER)
                .setSubject(username)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 3600 * 1000))  // 1 hour expiration
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    // Extract claims from the token
    public Claims extractClaims(String token) {
        try {
            return Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody();
        } catch (Exception e) {
            // Log and rethrow to handle it properly elsewhere
            globalExceptionHandler.handleJwtExceptions(e);
            throw new RuntimeException("Invalid JWT Token", e);  // Throwing an exception to be handled by the caller
        }
    }

    // Extract username from the token
    public String extractUsername(String token) {
        Claims claims = extractClaims(token);
        if (claims != null) {
            return claims.getSubject();
        }
        throw new RuntimeException("Failed to extract username from JWT");
    }

    // Check if the token is expired
    public boolean isTokenExpired(String token) {
        try {
            Claims claims = extractClaims(token);
            if (claims != null) {
                return claims.getExpiration().before(new Date());
            }
        } catch (Exception e) {
            globalExceptionHandler.handleJwtExceptions(e);
            throw new RuntimeException("Error checking token expiration", e);
        }
        return true;  // Return true if there's any issue, treating it as expired
    }

    // Validate the token against the username
    public boolean validateToken(String token, String username) {
        try {
            return (username.equals(extractUsername(token)) && !isTokenExpired(token));
        } catch (RuntimeException e) {
            // Handle exception gracefully and log it if needed
            return false;
        }
    }
}
