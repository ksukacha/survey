package fapi.models;

public class AnswerModel {
  private String name;

  public AnswerModel() {}
  public AnswerModel(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}
