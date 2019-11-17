package fapi.service.mock;



import fapi.models.AnswerModel;
import fapi.models.QuestionModel;
import fapi.models.TopicModel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class MockTopics {
  private static List<TopicModel> mockTopics = new ArrayList<>(Arrays.asList(
    new TopicModel(0, "Colors", new ArrayList<>(Arrays.asList(
      new QuestionModel("Your favourite colour?", "single-choice", new ArrayList<>(Arrays.asList(
        new AnswerModel("red"), new AnswerModel("green"), new AnswerModel("blue")
      ))),
      new QuestionModel("Color of your eyes?", "single-choice", new ArrayList<>(Arrays.asList(
        new AnswerModel("green"), new AnswerModel("hazel"), new AnswerModel("light blue")
      )))
    )), true),
    new TopicModel(1, "Tea", new ArrayList<>(Arrays.asList(
      new QuestionModel("Do you drink tea?", "single-choice", new ArrayList<>(Arrays.asList(
        new AnswerModel("yes"), new AnswerModel("no")
      ))),
      new QuestionModel("Which tea do you prefer?", "multiple-choice", new ArrayList<>(Arrays.asList(
        new AnswerModel("green"), new AnswerModel("black"), new AnswerModel("red"), new AnswerModel("white")
      )))
    )), true)

  ));

  public static void addTopic(TopicModel t) {
    mockTopics.add(t);
  }
  public static void deleteTopic(Long id) {mockTopics.removeIf(t -> t.getId() == id);}
  public static TopicModel getTopic(Long id) {
    return mockTopics.stream().filter(t -> t.getId() == id).findFirst().get();
  }
  public static List<TopicModel> getMockTopics() {
    return mockTopics;
  }
}
