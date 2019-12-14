package by.bsu.famcs.kachytskaya.mapper;

import by.bsu.famcs.kachytskaya.dto.QuestionDto;
import by.bsu.famcs.kachytskaya.entity.Question;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class QuestionMapper {
  private final ModelMapper modelMapper;
  @Autowired
  public QuestionMapper(ModelMapper modelMapper) {
    this.modelMapper = modelMapper;
  }

  public Question toEntity(QuestionDto questionDto) {
    return Objects.isNull(questionDto) ? null : modelMapper.map(questionDto, Question.class);
  }

  public QuestionDto toDto(Question entity) {
    return Objects.isNull(entity) ? null : modelMapper.map(entity, QuestionDto.class);
  }
}
