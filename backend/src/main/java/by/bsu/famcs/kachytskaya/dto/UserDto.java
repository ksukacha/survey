package by.bsu.famcs.kachytskaya.dto;

import by.bsu.famcs.kachytskaya.entity.UserRoleEnum;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

public class UserDto {
  private Long id;
  private String firstName;
  private String lastName;
  private String userName;
  private String email;
  private String password;
  private String role;
  private Set<SurveyDto> createdSurveys = new HashSet<>();
  private Set<SurveyDto> passedSurveys = new HashSet<>();

  public UserDto() {
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getUserName() {
    return userName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public Set<SurveyDto> getCreatedSurveys() {
    return createdSurveys;
  }

  public void setCreatedSurveys(Set<SurveyDto> createdSurveys) {
    this.createdSurveys = createdSurveys;
  }

  public Set<SurveyDto> getPassedSurveys() {
    return passedSurveys;
  }

  public void setPassedSurveys(Set<SurveyDto> passedSurveys) {
    this.passedSurveys = passedSurveys;
  }
}
