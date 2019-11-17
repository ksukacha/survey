package fapi.models;

import java.util.List;

public class SurveyModel {
  private int id;
  private String name;
  private String description;
  private String elapseDate;
  private String authorLogin;
  private List<QuestionModel> questions;

  public SurveyModel(int id, String name, String description, String elapseDate, String authorLogin, List<QuestionModel> questions) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.elapseDate = elapseDate;
    this.authorLogin = authorLogin;
    this.questions = questions;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public String getElapseDate() {
    return elapseDate;
  }

  public String getAuthorLogin() {
    return authorLogin;
  }

  public List<QuestionModel> getQuestions() {
    return questions;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setElapseDate(String elapseDate) {
    this.elapseDate = elapseDate;
  }

  public void setAuthor(String authorLogin) {
    this.authorLogin = authorLogin;
  }

  public void setQuestions(List<QuestionModel> questions) {
    this.questions = questions;
  }
}
