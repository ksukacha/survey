package fapi.service;


import fapi.models.SurveyModel;
// import fapi.service.mock.MockSurveys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class SurveysDataService implements ISurveysDataService {

  @Value("${backend.server.url}")
  private String backendServerUrl;

  @Override
  public Set<SurveyModel> getAllSurveys() {
    /*RestTemplate restTemplate = new RestTemplate();
    SurveyModel[] surveyModelResponse = restTemplate.getForObject(backendServerUrl + "/api/surveys/", SurveyModel[].class);
    return surveyModelResponse == null ? Collections.emptyList() : Arrays.asList(surveyModelResponse);*/
    //return MockSurveys.getMockUserSurveysList();
    RestTemplate restTemplate = new RestTemplate();
    SurveyModel[] surveyModelResponse = restTemplate.getForObject(backendServerUrl + "/api/v1/surveys", SurveyModel[].class);
    Set<SurveyModel> resultSet = new HashSet<>();
    if(surveyModelResponse!=null) {
      Collections.addAll(resultSet, surveyModelResponse);
      return resultSet;
    }
    return Collections.emptySet();
  }

  @Override
  public SurveyModel getSurveyById(Long id) {

    //return MockSurveys.getUserSurvey(id);
    RestTemplate restTemplate = new RestTemplate();
    return restTemplate.getForEntity(backendServerUrl + "/api/v1/surveys/" + id, SurveyModel.class).getBody();
  }

 /* @Override
  public SurveyModel saveSurvey(SurveyModel survey) {
    MockSurveys.addUserSurvey(survey);
    return survey;
  }*/

  @Override
  public SurveyModel saveSurvey(Long userId, String surveyStatus, SurveyModel s) {
    RestTemplate restTemplate = new RestTemplate();
    return restTemplate.postForEntity(backendServerUrl + "/api/v1/surveys/saveSurvey?userId=" + userId + "&surveyStatus=" + surveyStatus, s,  SurveyModel.class).getBody();
  }

  @Override
  public void deleteSurvey(Long id) {
    /*RestTemplate restTemplate = new RestTemplate();
    restTemplate.delete(backendServerUrl + "/api/surveys/" + id);*/
    //MockSurveys.deleteUserSurvey(id);
    RestTemplate restTemplate = new RestTemplate();
    restTemplate.delete(backendServerUrl + "/api/v1/surveys/" + id);
  }
}

