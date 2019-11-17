package fapi.service;



import fapi.models.SurveyModel;

import java.util.List;

public interface ISurveysDataService {
  List<SurveyModel> getAllSurveys();
  SurveyModel getSurveyById(Long id);
  SurveyModel saveSurvey(SurveyModel account);
  void deleteSurvey(Long id);
}
