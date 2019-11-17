package fapi.service.mock;


import fapi.models.UserModel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class MockUsers {
  private static List<UserModel> mockUsers = new ArrayList<>(Arrays.asList(
    new UserModel(0, "John", "Reed", "john1994", "19.10.1994", "john1994@gmail.com", "123456", "USER",
      new ArrayList<>(Arrays.asList(MockSurveys.getMockUserSurveysList().get(0), MockSurveys.getMockUserSurveysList().get(1))), Collections.emptyList(), Collections.emptyList()),
    new UserModel(1, "Lisa", "Kudrow", "liss-kudrow", "15.11.1997", "lisakudrow@mail.ru", "abcdef", "USER", new ArrayList<>(Arrays.asList(MockSurveys.getMockUserSurveysList().get(2))), Collections.emptyList(), Collections.emptyList()),
    new UserModel(2, "David", "Schwimmer", "schwimmy", "31.10.1990", "d.schwimmer@gmail.com", "lalala", "USER", new ArrayList<>(Arrays.asList(MockSurveys.getMockUserSurveysList().get(3))), Collections.emptyList(), Collections.emptyList())
  ));

  public static List<UserModel> getUsers() {
    return mockUsers;
  }
  public static void addUser(UserModel u) {
    mockUsers.add(u);
  }
  public static void deleteUser(Long id) {mockUsers.removeIf(s -> s.getId() == id);}
  public static UserModel getUser(String email) {
    return mockUsers.stream().filter(s -> s.getEmail().equals(email)).findFirst().get();
  }
  public static void updateUser(UserModel newUser, Long id) {
    UserModel oldVal = mockUsers
      .stream()
      .filter(u -> u.getId() == id)
      .findFirst()
      .get();
    oldVal.setOwnSurveys(newUser.getOwnSurveys());
    oldVal.setTakenSurveys(newUser.getTakenSurveys());
    oldVal.setDraftSurveys(newUser.getDraftSurveys());
  }
}
