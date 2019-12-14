package fapi.service;



import fapi.models.UserModel;

import java.util.List;

public interface IUsersDataService {
  List<UserModel> getAllUsers();
  UserModel getUserByEmail(String email);
  UserModel saveUser(UserModel user);
  void deleteUser(Long id);
  void updateUser(UserModel user, Long id);
}
