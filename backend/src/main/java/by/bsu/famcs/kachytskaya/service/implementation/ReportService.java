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
  @Transactional(rollbackOn = Throwable.class)
  public Report saveReport(Long userId, String surveyStatus, Survey survey, String creatorUserId) throws NotFoundException {
    Report report;
    User user = new User();
    if (userId != null) {
      user = userService.getUserById(userId);
    }
    if (surveyStatus.equals("NEW")) {
      // TODO посмотреть
      //survey.setId(0L);
      survey = surveyService.saveSurvey(survey);
      Set<Question> questionSet = survey.getQuestions();
      Iterator<Question> questionIterator = questionSet.iterator();

      while (questionIterator.hasNext()) {
        Question q = questionIterator.next();
        q.setSurvey(survey);
        List<Answer> list = q.getAnswers();
        Iterator<Answer> answerIterator = list.iterator();
        while (answerIterator.hasNext()) {
          Answer a = answerIterator.next();
          a.setQuestion(q);
        }
      }
    } else {
      Optional<Survey> surveyOptional = surveyService.getSurveyByName(survey.getName());
      if (surveyOptional.isPresent()) {
        survey = surveyOptional.get();
      }
    }
    report = new Report(userId != null ? user : null, survey, SurveyStatusEnum.valueOf(surveyStatus), creatorUserId);
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

  @Override
  public Optional<Iterable<Report>> getAllReportsByCreatorUserId(String creatorUserId) {
    return reportRepository.getAllByCreatorUserId(creatorUserId);
  }

  @Override
  public Optional<Iterable<Report>> getAllReportsByUserAndSurveyStatus(User user, SurveyStatusEnum surveyStatusEnum) {
    return reportRepository.getAllByUserAndSurveyStatus(user, surveyStatusEnum);
  }
}
