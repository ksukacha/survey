package by.bsu.famcs.kachytskaya.dto;

import by.bsu.famcs.kachytskaya.entity.Answer;
import by.bsu.famcs.kachytskaya.entity.QuestionTypeEnum;
import lombok.Data;

import java.util.Set;

@Data
public class QuestionDto {
  private Long id;
  private String name;
  private QuestionTypeEnum questionType;
  private Set<Answer> answers;
}
