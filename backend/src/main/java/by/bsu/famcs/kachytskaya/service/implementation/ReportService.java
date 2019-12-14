package by.bsu.famcs.kachytskaya.service.implementation;

import by.bsu.famcs.kachytskaya.entity.*;
import by.bsu.famcs.kachytskaya.repository.ReportRepository;
import by.bsu.famcs.kachytskaya.service.IReportService;
import javassist.NotFoundException;
import org.aspectj.weaver.patterns.TypePatternQuestions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;

import javax.transaction.Transactional;
import java.util.*;

@Service
//@Transactional
public class ReportService implements IReportService {
  private ReportRepository reportRepository;
  private UserService userService;
  private SurveyService surveyService;
  private QuestionService questionService;
  private AnswerService answerService;

  @Autowired
  public ReportService(ReportRepository reportRepository, UserService userService, SurveyService surveyService, QuestionService questionService, AnswerService answerService) {
    this.reportRepository = reportRepository;
    this.userService = userService;
    this.surveyService = surveyService;
    this.questionService = questionService;
    this.answerService = answerService;
  }

  @Override
  public Report saveReport(Long userId, String surveyStatus, Survey survey, String creatorUserId) throws NotFoundException {
    Report report;
    //boolean isSurveyCreator = SurveyStatusEnum.NEW.toString().equals(surveyStatus) && userId!=null;
    User user = new User();
    if (userId != null) {
      user = userService.getUserById(userId);
    }
    if(surveyStatus.equals("NEW")) {
      survey.setId(0L);
      survey = surveyService.saveSurvey(survey);
      List<Question> questionList = survey.getQuestions();
      for (int j = 0; j < questionList.size(); ++j) {
        Question q = questionList.get(j);
        q.setSurvey(survey);
        // questionService.saveQuestion(q);
        List<Answer> list = q.getAnswers();
        for (int i = 0; i < list.size(); i++) {
          Answer a = list.get(i);
          a.setQuestion(q);
          //answerService.saveAnswer(a);
        }
      }
    }else{
      Optional<Survey> surveyOptional = surveyService.getSurveyByName(survey.getName());
      if(surveyOptional.isPresent()) {
        survey = surveyOptional.get();
      }
    }
    report = new Report(userId != null ? user : null, survey, SurveyStatusEnum.valueOf(surveyStatus), creatorUserId/*isSurveyCreator ? userId : null*/);
    survey.getReports().add(report);
    if (userId != null) {
      user.getReports().add(report);
      // userService.saveUser(user);
    }
    report = reportRepository.save(report);
    return report;
  }

  @Override
  public Report getReportBySurveyWithCreator(Survey survey) {
    Iterable<Report> reportsBySurvey = reportRepository.getAllBySurvey(survey);
    for (Report r : reportsBySurvey) {
      if (r.getCreatorUserId() != null) {
        return r;
      }
    }
    return null;
  }
}
