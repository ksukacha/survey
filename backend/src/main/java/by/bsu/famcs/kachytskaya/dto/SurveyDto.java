package by.bsu.famcs.kachytskaya.dto;

import by.bsu.famcs.kachytskaya.entity.Question;
import lombok.Data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class SurveyDto {
  private Long id;
  private String name;
  private String description;
  private Long elapseDate;
  private String creatorUserId;
  private List<QuestionDto> questions;
  private Long userId;
  private String surveyStatus;

  public SurveyDto() {}
  public SurveyDto(String name, String description, Long elapseDate, String creatorUserId, List<QuestionDto> questions, Long userId, String surveyStatus) {
    this.name = name;
    this.description = description;
    this.elapseDate = elapseDate;
    this.creatorUserId = creatorUserId;
    this.questions = questions;
    this.userId = userId;
    this.surveyStatus = surveyStatus;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Long getElapseDate() {
    return elapseDate;
  }

  public void setElapseDate(Long elapseDate) {
    this.elapseDate = elapseDate;
  }

  public String getCreatorUserId() {
    return creatorUserId;
  }

  public void setCreatorUserId(String creatorUserId) {
    this.creatorUserId = creatorUserId;
  }

//  public List<Question> getQuestions() {
//    return questions;
//  }
//
//  public void setQuestions(List<Question> questions) {
//    this.questions = questions;
//  }


  public List<QuestionDto> getQuestions() {
    return questions;
  }

  public void setQuestions(List<QuestionDto> questions) {
    this.questions = questions;
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
    return "SurveyDto{" +
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
