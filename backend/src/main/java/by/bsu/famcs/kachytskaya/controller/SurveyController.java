package by.bsu.famcs.kachytskaya.controller;

import by.bsu.famcs.kachytskaya.dto.SurveyDto;
import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.Survey;
import by.bsu.famcs.kachytskaya.mapper.SurveyMapper;
import by.bsu.famcs.kachytskaya.repository.SurveyRepository;
import by.bsu.famcs.kachytskaya.service.implementation.ReportService;
import by.bsu.famcs.kachytskaya.service.implementation.SurveyService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/surveys")
public class SurveyController {
  private SurveyService surveyService;
  private SurveyMapper surveyMapper;
  private ReportService reportService;
  @Autowired
  public SurveyController(SurveyService surveyService, ReportService reportService, SurveyMapper surveyMapper) {
    this.surveyService = surveyService;
    this.reportService = reportService;
    this.surveyMapper = surveyMapper;
  }

  @GetMapping(value = "/{id}")
  public ResponseEntity<SurveyDto> getSurveyById(@PathVariable(name = "id") Long id) throws NotFoundException {
    Survey survey = surveyService.getSurveyById(id);
    return new ResponseEntity<>(surveyMapper.toDto(survey), HttpStatus.OK);
  }
  @GetMapping
  public ResponseEntity<Set<SurveyDto>> getAllSurveys() {
    Iterable<Survey> allSurveys = surveyService.getSurveys();
    Set<SurveyDto> allDtoSurveys = new HashSet<>();
    for(Survey s: allSurveys) {
      allDtoSurveys.add(surveyMapper.toDto(s));
    }
    return ResponseEntity.ok(allDtoSurveys);
  }
  @PostMapping(value = "/saveSurvey", params = {"userId", "surveyStatus"})
  public ResponseEntity<SurveyDto> saveSurvey(@RequestParam("userId") Long userId,
                                             @RequestParam("surveyStatus") String surveyStatus,
                                             @RequestBody SurveyDto surveyDto) throws NotFoundException {
    Survey survey = surveyMapper.toEntity(surveyDto);
    Report report = reportService.saveReport(userId, surveyStatus, survey);
    SurveyDto surveyDtoResponse = surveyMapper.toDto(report.getSurvey());
    return new ResponseEntity<>(surveyDtoResponse, HttpStatus.OK);

  }
  @DeleteMapping(value = "/{id}")
  public void deleteSurvey(@PathVariable(name = "id") Long id) {
    surveyService.deleteSurvey(id);
  }

}
