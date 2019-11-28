package fapi.service;



import fapi.models.SurveyModel;

import java.util.List;
import java.util.Set;

public interface ISurveysDataService {
  Set<SurveyModel> getAllSurveys();
  SurveyModel getSurveyById(Long id);
  SurveyModel saveSurvey(Long userId, String userStatus, SurveyModel s);
  void deleteSurvey(Long id);
}
