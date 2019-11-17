package fapi.service;


import fapi.models.SurveyModel;
import fapi.service.mock.MockSurveys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SurveysDataService implements ISurveysDataService {

  @Value("${backend.server.url}")
  private String backendServerUrl;

  @Override
  public List<SurveyModel> getAllSurveys() {
    /*RestTemplate restTemplate = new RestTemplate();
    SurveyModel[] surveyModelResponse = restTemplate.getForObject(backendServerUrl + "/api/surveys/", SurveyModel[].class);
    return surveyModelResponse == null ? Collections.emptyList() : Arrays.asList(surveyModelResponse);*/
    return MockSurveys.getMockUserSurveysList();
  }

  @Override
  public SurveyModel getSurveyById(Long id) {
    return MockSurveys.getUserSurvey(id);
  }

  @Override
  public SurveyModel saveSurvey(SurveyModel survey) {
    MockSurveys.addUserSurvey(survey);
    return survey;
  }

  @Override
  public void deleteSurvey(Long id) {
    /*RestTemplate restTemplate = new RestTemplate();
    restTemplate.delete(backendServerUrl + "/api/surveys/" + id);*/
    MockSurveys.deleteUserSurvey(id);
  }
}

