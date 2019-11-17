package fapi.service;

import fapi.models.TopicModel;

import java.util.List;

public interface ITopicsDataService {
  List<TopicModel> getAllTopics();
  TopicModel getTopicById(Long id);
  TopicModel saveTopic(TopicModel topic);
  void deleteTopic(Long id);
}
