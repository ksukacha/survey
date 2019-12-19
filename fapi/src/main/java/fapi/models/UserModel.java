package fapi.models;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class UserModel {
  private int id;
  private String firstName;
  private String lastName;
  private String userName;
  //private String birthDate;
  private String email;
  private String password;
  private String role;
  private Set<SurveyModel> createdSurveys = new HashSet<>();
  private Set<SurveyModel> passedSurveys = new HashSet<>();

  public UserModel() {}
  public UserModel(String firstName, String lastName, String userName, /*String birthDate,*/ String email, String password, String role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    //this.birthDate = birthDate;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public int getId() {
    return id;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getUserName() {
    return userName;
  }

//  public String getBirthDate() {
//    return birthDate;
//  }

  public String getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }

  public String getRole() {
    return role;
  }


  public void setId(int id) {
    this.id = id;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

//  public void setBirthDate(String birthDate) {
//    this.birthDate = birthDate;
//  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setPassword(String password) {
    this.password = password;
  }


  public void setRole(String role) {
    this.role = role;
  }

  public Set<SurveyModel> getCreatedSurveys() {
    return createdSurveys;
  }

  public void setCreatedSurveys(Set<SurveyModel> createdSurveys) {
    this.createdSurveys = createdSurveys;
  }

  public Set<SurveyModel> getPassedSurveys() {
    return passedSurveys;
  }

  public void setPassedSurveys(Set<SurveyModel> passedSurveys) {
    this.passedSurveys = passedSurveys;
  }
}
