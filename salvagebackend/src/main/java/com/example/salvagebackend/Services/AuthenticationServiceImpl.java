//package com.example.salvagebackend.Services;
//
//
//
//import com.auth0.net.SignUpRequest;
//import com.example.salvagebackend.Repository.UserRepo;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.AuthenticationException;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.support.TransactionTemplate;
//
//import java.util.Optional;
//
//@Service
//public class AuthenticationServiceImpl implements AuthenticationService {
//    private final Logger log = LoggerFactory.getLogger(AuthenticationServiceImpl.class);
//    private final UserService userService;
//    private final JwtService jwtService;
//
//    private final PasswordEncoder passwordEncoder;
//    private final UserRepo userRepository;
//    private final TransactionTemplate transactionTemplate;
//    private final AuthenticationManager authenticationManager;
//
//    public AuthenticationServiceImpl(UserService userService, JwtService jwtService, PasswordEncoder passwordEncoder, UserRepo userRepository, TransactionTemplate transactionTemplate, AuthenticationManager authenticationManager) {
//        this.userService = userService;
//        this.jwtService = jwtService;
//        this.passwordEncoder = passwordEncoder;
//        this.userRepository = userRepository;
//        this.transactionTemplate = transactionTemplate;
//        this.authenticationManager = authenticationManager;
//    }
//
//    @Override
//    public String signup(SignUpRequest signUpRequest) {
//        if (signUpRequest == null) {
//            throw new IllegalArgumentException("SignUp request cannot be null");
//        }
//
//        if (signUpRequest.getPassword() == null || signUpRequest.getPassword().trim().isEmpty()) {
//            throw new IllegalArgumentException("Password cannot be null or empty");
//        }
//
//        if (userRepository.findByUsername(signUpRequest.getUsername()).isPresent()) {
//            throw new IllegalArgumentException("Username already exists");
//        }
//
//        try {
//            Users user = new Users();
//            user.setUsername(signUpRequest.getUsername());
//            user.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
//
//            userRepository.save(user);
//
//            return "User registered successfully";
//        } catch (Exception e) {
//            log.error("Error saving user: ", e);
//            throw new RuntimeException("Error during user registration");
//        }
//    }
//
//    @Override
//    public JwtResponse signin(SignInRequest signInRequest) {
//        try {
//            Authentication authentication = authenticationManager.authenticate(
//                    new UsernamePasswordAuthenticationToken(
//                            signInRequest.getUsername(),
//                            signInRequest.getPassword()
//                    )
//            );
//            Users user = (Users) authentication.getPrincipal();
//
//            String jwtToken = jwtService.generateToken(user);
//            JwtResponse jwtResponse = new JwtResponse();
//            jwtResponse.setToken(jwtToken);
//            return jwtResponse;
//        } catch (AuthenticationException e) {
//            throw new BadCredentialsException("Invalid username or password");
//        }
//    }
//
//    @Override
//    public Users updateUser(Long id, SignUpRequest signUpRequest) {
//        return transactionTemplate.execute(status -> {
//            Users existingUser = userRepository.findById(id)
//                    .orElseThrow(() -> new IllegalArgumentException("User not found"));
//
//            existingUser.setUsername(signUpRequest.getUsername());
//            existingUser.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
//            Users saved = userRepository.save(existingUser);
//
//            log.info("User {} updated successfully", signUpRequest.getUsername());
//            return saved;
//        });
//
//    }
//    @Override
//    public void deleteUser(Long id) {
//        transactionTemplate.execute(status -> {
//            userRepository.deleteById(id);
//            log.info("User with id {} deleted successfully", id);
//            return null;
//        });
//
//    }
//    @Override
//    public Optional<Users> getUserById(Long id) {
//        return userRepository.findById(id);
//    }
//    @Override
//    public Page<Users> getAllUsers(Pageable pageable) {
//        return userRepository.findAll(pageable);
//    }
//}