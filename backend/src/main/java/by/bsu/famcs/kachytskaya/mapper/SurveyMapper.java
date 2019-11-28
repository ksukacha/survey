package by.bsu.famcs.kachytskaya.mapper;

import by.bsu.famcs.kachytskaya.dto.SurveyDto;
import by.bsu.famcs.kachytskaya.entity.Survey;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class SurveyMapper {

  private final ModelMapper mapper;

  @Autowired
  public SurveyMapper(ModelMapper mapper) {
    this.mapper = mapper;
  }

  public Survey toEntity(SurveyDto surveyDto) {
    Survey survey = Objects.isNull(surveyDto) ? null : mapper.map(surveyDto, Survey.class);
    return survey;
  }

  public SurveyDto toDto(Survey entity) {
    SurveyDto surveyDto = Objects.isNull(entity) ? null : mapper.map(entity, SurveyDto.class);
    return surveyDto;
  }
}
