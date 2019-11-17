package fapi.service;



import fapi.models.UserModel;

import java.util.List;

public interface IUsersDataService {
  List<UserModel> getAllUsers();
  UserModel getUser(String email);
  UserModel saveUser(UserModel user);
  void deleteUser(Long id);
}
