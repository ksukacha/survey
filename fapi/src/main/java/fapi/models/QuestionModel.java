package fapi.models;

import java.util.List;

public class QuestionModel {
  private String name;
  private String questionType;
  private List<AnswerModel> answers;

  public QuestionModel() {}
  public QuestionModel(String name, String questionType, List<AnswerModel> answers) {
    this.name = name;
    this.questionType = questionType;
    this.answers = answers;
  }

  public String getName() {
    return name;
  }

  public String getQuestionType() {
    return questionType;
  }

  public List<AnswerModel> getAnswers() {
    return answers;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setQuestionType(String questionType) {
    this.questionType = questionType;
  }

  public void setAnswers(List<AnswerModel> answers) {
    this.answers = answers;
  }

  @Override
  public String toString() {
    return "QuestionModel{" +
      "name='" + name + '\'' +
      ", questionType='" + questionType + '\'' +
      ", answers=" + answers +
      '}';
  }
}
