package fapi.controllers;

import fapi.models.SurveyModel;
import fapi.service.SurveysDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api")
public class SurveyDataController {

  @Autowired
  private SurveysDataService surveysDataService;


  @GetMapping("/surveys")
  public ResponseEntity<Set<SurveyModel>> getAllSurveys() {
    return ResponseEntity.ok(surveysDataService.getAllSurveys());
  }
  @GetMapping(value = "/surveys/{id}")
  public ResponseEntity<SurveyModel> getSurvey(@PathVariable String id) {
    return ResponseEntity.ok(surveysDataService.getSurveyById(Long.valueOf(id)));
  }

  @PostMapping(value = "/surveys")
  public ResponseEntity<SurveyModel> saveSurvey(@RequestBody SurveyModel survey) {
    return ResponseEntity.ok(surveysDataService.saveSurvey(survey));
  }

  @DeleteMapping(value = "/survey/{id}")
  public void deleteSurvey(@PathVariable String id) {
    surveysDataService.deleteSurvey(Long.valueOf(id));
  }

}
