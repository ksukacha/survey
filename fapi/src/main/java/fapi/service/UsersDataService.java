package fapi.service;

import fapi.models.SurveyModel;
import fapi.models.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class UsersDataService implements IUsersDataService, UserDetailsService {

  @Value("${backend.server.url}")
  private String backendServerUrl;
  @Autowired
  private RestTemplate restTemplate;
  @Autowired
  public BCryptPasswordEncoder encoder;


  @Override
  public List<UserModel> getAllUsers() {
    return Arrays.asList(restTemplate.getForEntity(backendServerUrl + "/api/users/", UserModel[].class).getBody());
  }

  @Override
  public UserModel getUserByEmail(String email) {
    UserModel userModel = restTemplate.getForEntity(backendServerUrl + "/api/users?email=" + email, UserModel.class).getBody();
    return userModel;
  }

  @Override
  public UserModel saveUser(UserModel user) {
    user.setPassword(encoder.encode(user.getPassword()));
    return restTemplate.postForEntity(backendServerUrl + "/api/users", user, UserModel.class).getBody();
  }

  @Override
  public void deleteUser(Long id) {

  }

  @Override
  public void updateUser(UserModel newUser, Long id) {

  }

  @Override
  public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
    UserModel userModel = getUserByEmail(email);
    return new User(userModel.getUserName(), userModel.getPassword(), Collections.emptyList());
  }
}
