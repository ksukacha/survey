package by.bsu.famcs.kachytskaya.dto;

import by.bsu.famcs.kachytskaya.entity.UserRoleEnum;
import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class UserDto {
  private Long id;
  private String firstName;
  private String lastName;
  private String userName;
  private String email;
  private String password;
  private UserRoleEnum role;
  private Set<SurveyDto> createdSurveys = new HashSet<>();
  private Set<SurveyDto> passedSurveys = new HashSet<>();
}
