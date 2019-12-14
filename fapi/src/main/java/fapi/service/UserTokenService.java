package fapi.service;

import fapi.security.SecurityJwtConstants;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.stream.Collectors;

@Service
public class UserTokenService implements IUserTokenService {
  @Override
  public String generateToken(Authentication authentication) {
    final String authorities = authentication.getAuthorities().stream()
      .map(GrantedAuthority::getAuthority)
      .collect(Collectors.joining(","));
    return Jwts.builder()
      .setSubject(authentication.getName())
      .claim(SecurityJwtConstants.AUTHORITIES_KEY, authorities)
      .signWith(SignatureAlgorithm.HS256, SecurityJwtConstants.SIGNING_KEY)
      .setExpiration(new Date(System.currentTimeMillis() + SecurityJwtConstants.ACCESS_TOKEN_VALIDITY_SECONDS * 1000))
      .compact();
  }
}
