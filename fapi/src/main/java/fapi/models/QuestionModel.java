package fapi.models;

import java.util.List;

public class QuestionModel {
  private String name;
  private String qType;
  private List<AnswerModel> answers;

  public QuestionModel(String name, String qType, List<AnswerModel> answers) {
    this.name = name;
    this.qType = qType;
    this.answers = answers;
  }

  public String getName() {
    return name;
  }

  public String getqType() {
    return qType;
  }

  public List<AnswerModel> getAnswers() {
    return answers;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setqType(String qType) {
    this.qType = qType;
  }

  public void setAnswers(List<AnswerModel> answers) {
    this.answers = answers;
  }
}
