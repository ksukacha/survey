package fapi.service.mock;


import fapi.models.UserModel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MockUsers {
  private static List<UserModel> mockUsers = new ArrayList<>(Arrays.asList(
    new UserModel(0, "John", "Reed", "john1994", "19.10.1994", "john1994@gmail.com", "123456", "USER",
      new ArrayList<>(Arrays.asList(MockSurveys.getMockUserSurveysList().get(0), MockSurveys.getMockUserSurveysList().get(1))), null, null),
    new UserModel(1, "Lisa", "Kudrow", "liss-kudrow", "15.11.1997", "lisakudrow@mail.ru", "abcdef", "USER", new ArrayList<>(Arrays.asList(MockSurveys.getMockUserSurveysList().get(2))), null, null),
    new UserModel(2, "David", "Schwimmer", "schwimmy", "31.10.1990", "d.schwimmer@gmail.com", "lalala", "USER", new ArrayList<>(Arrays.asList(MockSurveys.getMockUserSurveysList().get(3))), null, null)
  ));

  public static List<UserModel> getUsers() {
    return mockUsers;
  }
  public static void addUser(UserModel u) {
    mockUsers.add(u);
  }
  public static void deleteUser(Long id) {mockUsers.removeIf(s -> s.getId() == id);}
  public static UserModel getUser(String email) {
    UserModel res = mockUsers.stream().filter(s -> s.getEmail().equals(email)).findFirst().get();
    System.out.println(res);
    return res;
  }
}
