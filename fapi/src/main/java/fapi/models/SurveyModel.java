package fapi.models;

import java.util.List;

public class SurveyModel {
  private int id;
  private String name;
  private String description;
  private Long elapseDate;
  //private UserModel creator;
  private String creatorUserId;
  private List<QuestionModel> questions;
  private Long userId;
  private String surveyStatus;

  public SurveyModel() {}

  public SurveyModel(int id, String name, String description, Long elapseDate, List<QuestionModel> questions) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.elapseDate = elapseDate;
    //this.authorLogin = authorLogin;
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

  public Long getElapseDate() {
    return elapseDate;
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

  public void setElapseDate(Long elapseDate) {
    this.elapseDate = elapseDate;
  }

  public void setQuestions(List<QuestionModel> questions) {
    this.questions = questions;
  }


  public String getCreatorUserId() {
    return creatorUserId;
  }

  public void setCreatorUserId(String creatorUserId) {
    this.creatorUserId = creatorUserId;
  }

  public Long getUserId() {
    return userId;
  }

  public void setUserId(Long userId) {
    this.userId = userId;
  }

  public String getSurveyStatus() {
    return surveyStatus;
  }

  public void setSurveyStatus(String surveyStatus) {
    this.surveyStatus = surveyStatus;
  }

  @Override
  public String toString() {
    return "SurveyModel{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", description='" + description + '\'' +
      ", elapseDate=" + elapseDate +
      ", creatorUserId=" + creatorUserId +
      ", questions=" + questions +
      ", userId=" + userId +
      ", surveyStatus='" + surveyStatus + '\'' +
      '}';
  }
}
