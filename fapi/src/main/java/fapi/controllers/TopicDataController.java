package fapi.controllers;


import fapi.models.TopicModel;
import fapi.service.TopicsDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/topics")
public class TopicDataController {

  @Autowired
  private TopicsDataService topicsDataService;

  @RequestMapping
  public ResponseEntity<List<TopicModel>> getAllTopics() {
    return ResponseEntity.ok(topicsDataService.getAllTopics());
  }
  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public ResponseEntity<TopicModel> getTopic(@PathVariable String id) {
    return ResponseEntity.ok(topicsDataService.getTopicById(Long.valueOf(id)));
  }

  @RequestMapping(method = RequestMethod.POST)
  public ResponseEntity<TopicModel> saveTopic(@RequestBody TopicModel topic) {
    if (topic != null) {
      return ResponseEntity.ok(topicsDataService.saveTopic(topic));
    }
    return null;
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteTopic(@PathVariable String id) {
    topicsDataService.deleteTopic(Long.valueOf(id));
  }

}
