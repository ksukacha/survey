package fapi.models;

import java.util.List;

public class TopicModel {
  private int id;
  private String name;
  private List<QuestionModel> questions;
  private boolean shared;

  public TopicModel(int id, String name, List<QuestionModel> questions, boolean shared) {
    this.id = id;
    this.name = name;
    this.questions = questions;
    this.shared = shared;
  }

  public int getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public List<QuestionModel> getQuestions() {
    return questions;
  }

  public boolean isShared() {
    return shared;
  }

  public void setId(int id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setQuestions(List<QuestionModel> questions) {
    this.questions = questions;
  }

  public void setShared(boolean shared) {
    this.shared = shared;
  }
}
