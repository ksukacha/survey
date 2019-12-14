package by.bsu.famcs.kachytskaya.service;

import by.bsu.famcs.kachytskaya.entity.Survey;
import javassist.NotFoundException;

import java.util.Optional;

public interface ISurveyService {

  Survey getSurveyById(Long id) throws NotFoundException;
  Optional<Survey> getSurveyByName(String name) throws NotFoundException;

  Survey saveSurvey(Survey survey);

  Iterable<Survey> getSurveys();

  void deleteSurvey(Long id);
}
