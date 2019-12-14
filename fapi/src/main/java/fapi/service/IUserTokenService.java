package fapi.service;

import org.springframework.security.core.Authentication;

public interface IUserTokenService {
  String generateToken(Authentication authentication);
}
