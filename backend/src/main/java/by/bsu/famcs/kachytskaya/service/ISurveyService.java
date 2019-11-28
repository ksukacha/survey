package by.bsu.famcs.kachytskaya.service;

import by.bsu.famcs.kachytskaya.entity.Survey;
import javassist.NotFoundException;

public interface ISurveyService {

  Survey getSurveyById(Long id) throws NotFoundException;

  Survey saveSurvey(Survey survey);

  Iterable<Survey> getSurveys();

  void deleteSurvey(Long id);
}
