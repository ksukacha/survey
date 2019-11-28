package by.bsu.famcs.kachytskaya.service.implementation;

import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.Survey;
import by.bsu.famcs.kachytskaya.entity.SurveyStatusEnum;
import by.bsu.famcs.kachytskaya.entity.User;
import by.bsu.famcs.kachytskaya.repository.ReportRepository;
import by.bsu.famcs.kachytskaya.service.IReportService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;

import java.util.List;

@Service
public class ReportService implements IReportService {
  private ReportRepository reportRepository;
  private UserService userService;

  @Autowired
  public ReportService(ReportRepository reportRepository, UserService userService) {
    this.reportRepository = reportRepository;
    this.userService = userService;
  }

  @Override
  public Report saveReport(Long userId, String surveyStatus, Survey survey) throws NotFoundException {
      boolean isSurveyCreator = SurveyStatusEnum.NEW.toString().equals(surveyStatus);
      User user = new User();
      if (userId != null) {
        user = userService.getUserById(userId);
      }
      Report report = new Report(userId != null ? user : null, survey, SurveyStatusEnum.valueOf(surveyStatus), isSurveyCreator ? user : null);
      report.setId(0L); //

      survey.getReports().add(report);
      user.getReports().add(report);

      report = reportRepository.save(report);
      return report;
  }
}
