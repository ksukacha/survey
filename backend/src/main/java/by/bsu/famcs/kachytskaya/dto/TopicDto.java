package by.bsu.famcs.kachytskaya.dto;

import lombok.Data;

import java.util.Set;

@Data
public class TopicDto {
  private Long id;
  private String name;
  private boolean shared;
  private Set<QuestionDto> questions;
}
