package by.bsu.famcs.kachytskaya.mapper;

import by.bsu.famcs.kachytskaya.dto.SurveyDto;
import by.bsu.famcs.kachytskaya.dto.UserDto;
import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.Survey;
import by.bsu.famcs.kachytskaya.entity.User;
import by.bsu.famcs.kachytskaya.service.implementation.ReportService;
import by.bsu.famcs.kachytskaya.service.implementation.SurveyService;
import javassist.NotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.Optional;

@Component
public class SurveyMapper {
  private final ModelMapper mapper;
  private ReportService reportService;
  private SurveyService surveyService;
  @Autowired
  public SurveyMapper(ModelMapper mapper, ReportService reportService, SurveyService surveyService) {
    this.mapper = mapper;
    this.reportService = reportService;
    this.surveyService = surveyService;
  }

  public Survey toEntity(SurveyDto surveyDto) throws NotFoundException {
    Survey survey;
    Optional<Survey> surveyOptional = surveyService.getSurveyByName(surveyDto.getName());
    if(surveyOptional.isPresent()) {
      survey = surveyOptional.get();
      return survey;
    }else {
      survey = mapper.map(surveyDto, Survey.class);
      return survey;
    }
  }

  public SurveyDto toDto(Survey entity, Report report) {
    SurveyDto surveyDto = toDto(entity);
    surveyDto.setSurveyStatus(report.getSurveyStatus().toString());
    if(report.getUser()!=null) {
      surveyDto.setUserId(report.getUser().getId());
    }
    return surveyDto;
  }

  public SurveyDto toDto(Survey entity) {
    SurveyDto surveyDto = Objects.isNull(entity) ? null : mapper.map(entity, SurveyDto.class);
    Report reportWithSurveyCreator = reportService.getReportBySurveyWithCreator(entity);
    String surveyCreatorId = reportWithSurveyCreator.getCreatorUserId();
  //survey status = null, userId = null, creator = null
    surveyDto.setCreatorUserId(surveyCreatorId);
    return surveyDto;
  }
}
