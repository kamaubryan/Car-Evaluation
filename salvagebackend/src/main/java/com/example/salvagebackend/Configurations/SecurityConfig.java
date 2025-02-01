    package com.example.salvagebackend.Configurations;

    import org.springframework.context.annotation.Bean;
    import org.springframework.context.annotation.Configuration;
    import org.springframework.security.config.annotation.web.builders.HttpSecurity;
    import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
    import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
    import org.springframework.security.config.http.SessionCreationPolicy;
    import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
    import org.springframework.security.web.SecurityFilterChain;
    import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
    import org.springframework.web.cors.CorsConfiguration;

    @Configuration
    @EnableWebSecurity
    public class SecurityConfig {

        private final JWTAuthenticationFilter jwtAuthenticationFilter;

        public SecurityConfig(JWTAuthenticationFilter jwtAuthenticationFilter) {
            this.jwtAuthenticationFilter = jwtAuthenticationFilter;
        }

        @Bean
        public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
            http.cors(cors -> cors.configurationSource(request -> {
                        CorsConfiguration config = new CorsConfiguration();
                        config.setAllowCredentials(true);
                        config.addAllowedOriginPattern("*");
                        config.addAllowedHeader("*");
                        config.addAllowedMethod("*");
                        return config;
                    }));
                 http.csrf(AbstractHttpConfigurer::disable)
                    .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                         .authorizeHttpRequests((requests) -> requests
//                                 .requestMatchers("/api/v1/auth/**").permitAll()  // Keep this for auth endpoints
//                                 .requestMatchers("/api/v1/cars/**").authenticated()  // Cars should be authenticated
//                                 .requestMatchers("/api/v1/parts/**").authenticated()
//                                 .requestMatchers("/api/v1/users/**").authenticated()
//                                 .requestMatchers("/api/transactions/**").authenticated()
//                                 .anyRequest().authenticated()
                                         .anyRequest().permitAll()
                         )
                    .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

            return http.build();
        }

        @Bean
        public BCryptPasswordEncoder passwordEncoder() {
            return new BCryptPasswordEncoder();
        }
    }