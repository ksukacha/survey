package by.bsu.famcs.kachytskaya.controller;

import by.bsu.famcs.kachytskaya.dto.SurveyDto;
import by.bsu.famcs.kachytskaya.dto.TestDto;
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

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1")
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

  @GetMapping(value = "/surveys/{id}")
  public ResponseEntity<SurveyDto> getSurveyById(@PathVariable(name = "id") Long id) throws NotFoundException {
    Survey survey = surveyService.getSurveyById(id);
    return new ResponseEntity<>(surveyMapper.toDto(survey), HttpStatus.OK);
  }
  @GetMapping(value = "/surveys")
  public ResponseEntity<List<SurveyDto>> getAllSurveys() {
    Iterable<Survey> allSurveys = surveyService.getSurveys();
    List<SurveyDto> allDtoSurveys = new ArrayList<>();
    for(Survey s: allSurveys) {
      allDtoSurveys.add(surveyMapper.toDto(s));
    }
    return new ResponseEntity<>(allDtoSurveys, HttpStatus.OK);
  }
  @PostMapping(value = "/surveys")
  public SurveyDto saveSurvey(@RequestBody SurveyDto surveyDto) throws NotFoundException {
    Survey survey = surveyMapper.toEntity(surveyDto);
    Report report = reportService.saveReport(surveyDto.getUserId(), surveyDto.getSurveyStatus(), survey, surveyDto.getCreatorUserId());
    SurveyDto surveyDtoResponse = surveyMapper.toDto(report.getSurvey(), report);
    return surveyDtoResponse;
  }
  @DeleteMapping(value = "/survey/{id}")
  public void deleteSurvey(@PathVariable(name = "id") Long id) {
    surveyService.deleteSurvey(id);
  }

  @PostMapping(value="/other")
  public String save(@RequestBody SurveyDto surveyDto){
    System.out.println(surveyDto);
    return surveyDto.toString();
  }

}
