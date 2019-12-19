package by.bsu.famcs.kachytskaya.mapper;

import by.bsu.famcs.kachytskaya.dto.UserDto;
import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.SurveyStatusEnum;
import by.bsu.famcs.kachytskaya.entity.User;
import by.bsu.famcs.kachytskaya.repository.UserRepository;
import by.bsu.famcs.kachytskaya.service.implementation.ReportService;
import by.bsu.famcs.kachytskaya.service.implementation.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Component
public class UserMapper {
  private final ModelMapper mapper;
  private final SurveyMapper surveyMapper;
  private ReportService reportService;

  @Autowired
  public UserMapper(ModelMapper mapper, ReportService reportService, SurveyMapper surveyMapper) {
    this.mapper = mapper;
    this.reportService = reportService;
    this.surveyMapper = surveyMapper;
  }

  public User toEntity(UserDto userDto) {
    User user = Objects.isNull(userDto) ? null : mapper.map(userDto, User.class);
    return user;
  }

  public UserDto toDto(User entity) {
    UserDto userDto = Objects.isNull(entity) ? null : mapper.map(entity, UserDto.class);
    Optional<Iterable<Report>> optionalReportsWithCreatedSurveysByUser = reportService.getAllReportsByCreatorUserId(String.valueOf(entity.getId()));
    if (optionalReportsWithCreatedSurveysByUser.isPresent()) {
      Iterable<Report> reports = optionalReportsWithCreatedSurveysByUser.get();
      for (Report report : reports) {
        userDto.getCreatedSurveys().add(surveyMapper.toDto(report.getSurvey()));
      }
    }

    Optional<Iterable<Report>> optionalReportsWithEntityUserAndPassedSurveyStatus =
      reportService.getAllReportsByUserAndSurveyStatus(entity, SurveyStatusEnum.PASSED);
    if (optionalReportsWithEntityUserAndPassedSurveyStatus.isPresent()) {
      Iterable<Report> reports = optionalReportsWithEntityUserAndPassedSurveyStatus.get();
      for (Report report : reports) {
        userDto.getPassedSurveys().add(surveyMapper.toDto(report.getSurvey()));
      }
    }
    return userDto;
  }
}
