package fapi.controllers;

import fapi.models.LoginRequest;
import fapi.models.TokenResponse;
import fapi.service.UserTokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Collections;

@RestController
@RequestMapping("/api/login")
public class AutorizationController {
  @Autowired
  private AuthenticationManager authenticationManager;
  @Autowired
  private UserTokenService userTokenService;
  @PostMapping
  public ResponseEntity<TokenResponse> login(@RequestBody LoginRequest loginRequest) {
    Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
      loginRequest.getPassword(), Collections.emptyList()));
    String token = userTokenService.generateToken(authenticate);
    return ResponseEntity.ok(new TokenResponse(token));
  }
}
