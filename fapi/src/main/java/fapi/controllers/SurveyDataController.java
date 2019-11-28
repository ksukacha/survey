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
@RequestMapping("/api/surveys")
public class SurveyDataController {

  @Autowired
  private SurveysDataService surveysDataService;


  @GetMapping
  public ResponseEntity<Set<SurveyModel>> getAllSurveys() {
    return ResponseEntity.ok(surveysDataService.getAllSurveys());
  }
  @GetMapping(value = "/{id}")
  public ResponseEntity<SurveyModel> getSurvey(@PathVariable String id) {
    return ResponseEntity.ok(surveysDataService.getSurveyById(Long.valueOf(id)));
  }

//  @RequestMapping(method = RequestMethod.POST)
//  public ResponseEntity<SurveyModel> saveSurvey(@RequestBody SurveyModel survey) {
//      return ResponseEntity.ok(surveysDataService.saveSurvey(survey));
//  }
  @PostMapping(value = "/saveSurvey", params = {"userId", "surveyStatus"})
  public ResponseEntity<SurveyModel> saveSurvey(@RequestParam("userId") Long userId,
                                           @RequestParam("surveyStatus") String surveyStatus,
                                           @RequestBody SurveyModel survey) {
    return ResponseEntity.ok(surveysDataService.saveSurvey(userId, surveyStatus, survey));
  }

  @DeleteMapping(value = "/{id}")
  public void deleteSurvey(@PathVariable String id) {
    surveysDataService.deleteSurvey(Long.valueOf(id));
  }

}
