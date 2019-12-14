package fapi.models;

import java.util.List;

public class UserModel {
  private int id;
  private String firstName;
  private String lastName;
  private String login;
  private String birthDate;
  private String email;
  private String pass;
  private String role;
  private List<SurveyModel> ownSurveys;
  private List<SurveyModel> takenSurveys;
  private List<SurveyModel> draftSurveys;

  public UserModel() {}
  public UserModel(int id, String firstName, String lastName, String login, String birthDate, String email, String pass, String role, List<SurveyModel> ownSurveys, List<SurveyModel> takenSurveys, List<SurveyModel> draftSurveys) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.birthDate = birthDate;
    this.email = email;
    this.pass = pass;
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

  public String getLogin() {
    return login;
  }

  public String getBirthDate() {
    return birthDate;
  }

  public String getEmail() {
    return email;
  }

  public String getPass() {
    return pass;
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

  public void setLogin(String login) {
    this.login = login;
  }

  public void setBirthDate(String birthDate) {
    this.birthDate = birthDate;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setPass(String pass) {
    this.pass = pass;
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
