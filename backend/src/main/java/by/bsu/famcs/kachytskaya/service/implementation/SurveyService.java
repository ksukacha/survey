package by.bsu.famcs.kachytskaya.service.implementation;

import by.bsu.famcs.kachytskaya.dto.SurveyDto;
import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.Survey;
import by.bsu.famcs.kachytskaya.mapper.SurveyMapper;
import javassist.NotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import by.bsu.famcs.kachytskaya.repository.SurveyRepository;
import by.bsu.famcs.kachytskaya.service.ISurveyService;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;

@Service
@Transactional
public class SurveyService implements ISurveyService {
  private final SurveyRepository surveyRepository;
  //private final ReportRepository reportRepository

  @Autowired
  public SurveyService(SurveyRepository surveyRepository) {
    this.surveyRepository = surveyRepository;
  }

  @Override
  public Survey getSurveyById(Long id) throws NotFoundException {
    Optional<Survey> survey = surveyRepository.findById(id);
    if (survey.isPresent()) {
      return survey.get();
    } else {
      throw new NotFoundException("Survey with id: " + id + " was not found");
    }
  }

  @Override
  public Survey saveSurvey(Survey survey) {
    return surveyRepository.save(survey);
  }

  @Override
  public Iterable<Survey> getSurveys() {
    return surveyRepository.findAll();
  }

  @Override
  public void deleteSurvey(Long id) {
    Optional<Survey> optionalSurvey = surveyRepository.findById(id);
    if(optionalSurvey.isPresent()) {
      Survey s = optionalSurvey.get();
      List<Report> reports = s.getReports().stream().filter(report ->
        report.getSurvey().getId().equals(id)).collect(Collectors.toList());
      //reports.removeAll(reports);
    }
    surveyRepository.deleteById(id);
  }
}
