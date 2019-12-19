package by.bsu.famcs.kachytskaya.controller;

import by.bsu.famcs.kachytskaya.dto.SurveyDto;
import by.bsu.famcs.kachytskaya.dto.UserDto;
import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.Survey;
import by.bsu.famcs.kachytskaya.entity.User;
import by.bsu.famcs.kachytskaya.mapper.UserMapper;
import by.bsu.famcs.kachytskaya.service.implementation.UserService;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {
  private UserService userService;
  private UserMapper userMapper;
  public UserController(UserService userService, UserMapper userMapper){
    this.userService = userService;
    this.userMapper = userMapper;
  }

  @PostMapping
  public ResponseEntity<User> saveUser(@RequestBody UserDto userDto) {
    User user = userMapper.toEntity(userDto);
    return ResponseEntity.ok(userService.saveUser(user));
  }

  @GetMapping
  public ResponseEntity<UserDto> getUserByEmail(@RequestParam String email) throws NotFoundException {
    User user = userService.getUserByEmail(email);
    UserDto userDto = userMapper.toDto(user);
    return ResponseEntity.ok(userDto);
  }
}
