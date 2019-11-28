package by.bsu.famcs.kachytskaya.service.implementation;

import by.bsu.famcs.kachytskaya.entity.Topic;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import by.bsu.famcs.kachytskaya.repository.TopicRepository;
import by.bsu.famcs.kachytskaya.service.ITopicService;

import java.util.Optional;

public class TopicService implements ITopicService {
  private final TopicRepository topicRepository;
  @Autowired
  public TopicService(TopicRepository topicRepository) {
    this.topicRepository = topicRepository;
  }

  @Override
  public Topic getTopicById(Long id) throws NotFoundException {
    Optional<Topic> topic = topicRepository.findById(id);
    if (topic.isPresent()) {
      return topic.get();
    } else {
      throw new NotFoundException("Topic with id: " + id + " was not found");
    }
  }

  @Override
  public Topic saveTopic(Topic topic) {
    return topicRepository.save(topic);
  }

  @Override
  public Iterable<Topic> getTopics() {
    return topicRepository.findAll();
  }

  @Override
  public void deleteTopic(Topic topic) {
    topicRepository.delete(topic);
  }
}
