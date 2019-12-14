package fapi.models;

import java.util.List;

public class UserModel {
  private int id;
  private String firstName;
  private String lastName;
  private String userName;
  //private String birthDate;
  private String email;
  private String password;
  private String role;
  private List<SurveyModel> ownSurveys;
  private List<SurveyModel> takenSurveys;
  private List<SurveyModel> draftSurveys;

  public UserModel() {}
  public UserModel(int id, String firstName, String lastName, String userName, /*String birthDate,*/ String email, String password, String role, List<SurveyModel> ownSurveys, List<SurveyModel> takenSurveys, List<SurveyModel> draftSurveys) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    //this.birthDate = birthDate;
    this.email = email;
    this.password = password;
    this.role = role;
    this.ownSurveys = ownSurveys;
    this.takenSurveys = takenSurveys;
    this.draftSurveys = draftSurveys;
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

  public List<SurveyModel> getOwnSurveys() {
    return ownSurveys;
  }

  public List<SurveyModel> getTakenSurveys() {
    return takenSurveys;
  }

  public List<SurveyModel> getDraftSurveys() {
    return draftSurveys;
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

  public void setOwnSurveys(List<SurveyModel> ownSurveys) {
    this.ownSurveys = ownSurveys;
  }

  public void setTakenSurveys(List<SurveyModel> takenSurveys) {
    this.takenSurveys = takenSurveys;
  }

  public void setDraftSurveys(List<SurveyModel> draftSurveys) {
    this.draftSurveys = draftSurveys;
  }

  public void setRole(String role) {
    this.role = role;
  }
}
