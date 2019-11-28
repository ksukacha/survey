package by.bsu.famcs.kachytskaya.mapper;

import by.bsu.famcs.kachytskaya.dto.UserDto;
import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class UserMapper {
  private final ModelMapper mapper;

  @Autowired
  public UserMapper(ModelMapper mapper) {
    this.mapper = mapper;
  }

  public User toEntity(UserDto userDto) {
    User user = Objects.isNull(userDto) ? null : mapper.map(userDto, User.class);
    /*for (Report report: user.getReports()){ //и вообще, user.getReports() - пустой, потому что его нет в dto
      report.setUser(user);
      report.setCreatorUser(??);
      report.setSurvey(??);
      report.setSurveyStatus(??);
    }*/
    return user;
  }

  public UserDto toDto(User entity) {
    return Objects.isNull(entity) ? null : mapper.map(entity, UserDto.class);
  }
}
