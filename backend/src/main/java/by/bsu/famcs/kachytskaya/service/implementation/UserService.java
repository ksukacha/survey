package by.bsu.famcs.kachytskaya.service.implementation;

import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.Survey;
import by.bsu.famcs.kachytskaya.entity.SurveyStatusEnum;
import by.bsu.famcs.kachytskaya.entity.User;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import by.bsu.famcs.kachytskaya.repository.UserRepository;
import by.bsu.famcs.kachytskaya.service.IUserService;

import java.util.Collections;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class UserService implements IUserService {

  private final UserRepository userRepository;

  @Autowired
  public UserService(UserRepository userRepository) {
    this.userRepository = userRepository;
  }


  @Override
  public User getUserById(Long id) throws NotFoundException {
    Optional<User> user = userRepository.findById(id);
    if (user.isPresent()) {
      return user.get();
    } else {
      throw new NotFoundException("User with id: " + id + " was not found");
    }
  }

  @Override
  public User saveUser(User user) {
    return userRepository.save(user);
  }

  @Override
  public Iterable<User> getUsers() {
    return userRepository.findAll();
  }

  @Override
  public Set<Survey> getReportsWithCreatedSurveysBy(Long userId) throws NotFoundException {
    Optional<User> user = userRepository.findById(userId);
    if (user.isPresent()) {
      Set<Report> filteredReports = user.get().getReports().stream().filter(report ->
        (report.getCreatorUser().getId().equals(userId))).collect(Collectors.toSet());
      Set<Survey> createdSurveysByUser = new HashSet<>();
      for(Report r: filteredReports) {
        createdSurveysByUser.add(r.getSurvey());
      }
      return createdSurveysByUser;
    } else {
      throw new NotFoundException("User with id: " + userId + " was not found");
    }
  }

  @Override
  public Set<Survey> getReportsWithPassedSurveysBy(Long userId) throws NotFoundException {
    Optional<User> user = userRepository.findById(userId);
    if (user.isPresent()) {
      Set<Report> filteredReports = user.get().getReports().stream().filter(report -> (report.getUser().getId().equals(userId)
        && report.getSurveyStatus() == SurveyStatusEnum.PASSED)).collect(Collectors.toSet());
      Set<Survey> passedSurveysByUser = new HashSet<>();
      for(Report r: filteredReports) {
        passedSurveysByUser.add(r.getSurvey());
      }
      return passedSurveysByUser;
    } else {
      throw new NotFoundException("User with id: " + userId + " was not found");
    }
  }
}
