package fapi.controllers;

import fapi.models.SurveyModel;
import fapi.service.SurveysDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/surveys")
public class SurveyDataController {

  @Autowired
  private SurveysDataService surveysDataService;

  @RequestMapping ("/surveys1")
  public List<SurveyModel> getAllSurveys1() {
    List<SurveyModel> list = new ArrayList<>();
    SurveyModel s = new SurveyModel(15, "surveyname", "descr",
      "2010", null, null);
    list.add(s);
    return list;
  }
  @RequestMapping
  public ResponseEntity<List<SurveyModel>> getAllSurveys() {
    return ResponseEntity.ok(surveysDataService.getAllSurveys());
  }
  @RequestMapping(value = "/{id}", method = RequestMethod.GET)
  public ResponseEntity<SurveyModel> getSurvey(@PathVariable String id) {
    return ResponseEntity.ok(surveysDataService.getSurveyById(Long.valueOf(id)));
  }

  @RequestMapping(method = RequestMethod.POST)
  public ResponseEntity<SurveyModel> saveSurvey(@RequestBody SurveyModel survey) {
    if (survey != null) {
      return ResponseEntity.ok(surveysDataService.saveSurvey(survey));
    }
    return null;
  }

  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
  public void deleteSurvey(@PathVariable String id) {
    surveysDataService.deleteSurvey(Long.valueOf(id));
  }

}
