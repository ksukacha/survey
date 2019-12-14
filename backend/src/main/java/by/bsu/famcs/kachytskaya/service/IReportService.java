package by.bsu.famcs.kachytskaya.service;

import by.bsu.famcs.kachytskaya.dto.SurveyDto;
import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.Survey;
import by.bsu.famcs.kachytskaya.entity.SurveyStatusEnum;
import javassist.NotFoundException;

import java.util.List;

public interface IReportService {

  Report saveReport(Long userId, String surveyStatus, Survey survey, String creatorUserId) throws NotFoundException;
  Report getReportBySurveyWithCreator(Survey survey);
}
