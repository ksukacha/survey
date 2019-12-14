package by.bsu.famcs.kachytskaya.dto;

import by.bsu.famcs.kachytskaya.entity.Answer;
import by.bsu.famcs.kachytskaya.entity.Topic;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

public class QuestionDto {
  private Long id;
  private String name;
  private String questionType;
  private List<Answer> answers;
  @JsonIgnore
  private SurveyDto survey;
  @JsonIgnore
  private Topic topic;

  public QuestionDto() {}
  public QuestionDto(String name, String questionType, List<Answer> answers) {
    this.name = name;
    this.questionType = questionType;
    this.answers = answers;
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

  public String getQuestionType() {
    return questionType;
  }

  public void setQuestionType(String questionType) {
    this.questionType = questionType;
  }

  public List<Answer> getAnswers() {
    return answers;
  }

  public void setAnswers(List<Answer> answers) {
    this.answers = answers;
  }

  public SurveyDto getSurvey() {
    return survey;
  }

  public void setSurvey(SurveyDto survey) {
    this.survey = survey;
  }

  public Topic getTopic() {
    return topic;
  }

  public void setTopic(Topic topic) {
    this.topic = topic;
  }
}
