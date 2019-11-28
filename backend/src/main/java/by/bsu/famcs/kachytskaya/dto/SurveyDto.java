package by.bsu.famcs.kachytskaya.dto;

import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class SurveyDto {
  private Long id;
  private String name;
  private String description;
  private Long elapseDate;
  private Set<QuestionDto> questions;
}
