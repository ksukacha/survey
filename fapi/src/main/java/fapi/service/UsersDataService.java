package fapi.service;

import fapi.models.SurveyModel;
import fapi.models.UserModel;
import fapi.service.mock.MockSurveys;
import fapi.service.mock.MockUsers;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersDataService implements IUsersDataService{

  @Value("${backend.server.url}")
  private String backendServerUrl;

  @Override
  public List<UserModel> getAllUsers() {
    return MockUsers.getUsers();
  }

  @Override
  public UserModel getUser(String email) {
    return MockUsers.getUser(email);
  }

  @Override
  public UserModel saveUser(UserModel user) {
    MockUsers.addUser(user);
    return user;
  }

  @Override
  public void deleteUser(Long id) {
   MockUsers.deleteUser(id);
  }

}
