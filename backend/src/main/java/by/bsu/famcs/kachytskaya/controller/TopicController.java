package by.bsu.famcs.kachytskaya.controller;

import by.bsu.famcs.kachytskaya.entity.Topic;
import by.bsu.famcs.kachytskaya.service.implementation.TopicService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/topics")
public class TopicController {
  private TopicService topicService;
  @Autowired
  public TopicController(TopicService topicService) {
    this.topicService = topicService;
  }

  @GetMapping
  public ResponseEntity<Set<Topic>> getAllTopics() {
    Iterable<Topic> allTopics = topicService.getTopics();
    Set<Topic> topics = new HashSet<>();
    for(Topic t: allTopics) {
      topics.add(t);
    }
    return new ResponseEntity<>(topics, HttpStatus.OK);
  }

  @GetMapping(value = "/{id}")
  public ResponseEntity<Topic> getTopicById(@PathVariable(name = "id") Long id) throws NotFoundException {
    Topic topic = topicService.getTopicById(id);
    return new ResponseEntity<>(topic, HttpStatus.OK);
  }

  @PostMapping
  public ResponseEntity<Topic> saveTopic(@RequestBody Topic topic) {
    Topic savedTopic = topicService.saveTopic(topic);
    return new ResponseEntity<>(savedTopic, HttpStatus.OK);

  }
  @DeleteMapping(value = "/{id}")
  public void deleteSurvey(@PathVariable(name = "id") Long id) {
    topicService.deleteTopic(id);
  }


}
