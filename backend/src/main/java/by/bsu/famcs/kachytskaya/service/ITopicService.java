package by.bsu.famcs.kachytskaya.service;

import by.bsu.famcs.kachytskaya.entity.Topic;
import javassist.NotFoundException;

public interface ITopicService {
  Topic getTopicById(Long id) throws NotFoundException;

  Topic saveTopic(Topic topic);

  Iterable<Topic> getTopics();

  void deleteTopic(Long id);
}
