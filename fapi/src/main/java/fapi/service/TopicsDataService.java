package fapi.service;


import fapi.models.TopicModel;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TopicsDataService implements ITopicsDataService {

  @Value("${backend.server.url}")
  private String backendServerUrl;

  @Override
  public List<TopicModel> getAllTopics() {
    /*RestTemplate restTemplate = new RestTemplate();
    SurveyModel[] surveyModelResponse = restTemplate.getForObject(backendServerUrl + "/api/surveys/", SurveyModel[].class);
    return surveyModelResponse == null ? Collections.emptyList() : Arrays.asList(surveyModelResponse);*/
   // return MockTopics.getMockTopics();
  return null;
  }

  @Override
  public TopicModel getTopicById(Long id) {
    return null;
  }

  @Override
  public TopicModel saveTopic(TopicModel topic) {
//    MockTopics.addTopic(topic);
    return topic;
  }

  @Override
  public void deleteTopic(Long id) {
    /*RestTemplate restTemplate = new RestTemplate();
    restTemplate.delete(backendServerUrl + "/api/surveys/" + id);*/
    //MockTopics.deleteTopic(id);
  }
}
