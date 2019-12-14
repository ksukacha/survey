package by.bsu.famcs.kachytskaya.service;

import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.Survey;
import by.bsu.famcs.kachytskaya.entity.User;
import javassist.NotFoundException;

import java.util.Set;

public interface IUserService {

  User getUserById(Long id) throws NotFoundException;
  User getUserByEmail(String email) throws NotFoundException;

  User saveUser(User user);

  Iterable<User> getUsers();

  Set<Survey> getReportsWithCreatedSurveysBy(Long userId) throws NotFoundException;

  Set<Survey> getReportsWithPassedSurveysBy(Long userId) throws NotFoundException;

  //void deleteUser(User user);
}
