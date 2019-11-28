package by.bsu.famcs.kachytskaya;

import by.bsu.famcs.kachytskaya.entity.*;
import by.bsu.famcs.kachytskaya.repository.*;
import by.bsu.famcs.kachytskaya.service.implementation.ReportService;
import by.bsu.famcs.kachytskaya.service.implementation.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


@SpringBootApplication
public class BackendApplication {
  private static final Logger LOG = LoggerFactory.getLogger(BackendApplication.class);

  @Autowired
  private UserRepository userRepository;
  @Autowired
  private SurveyRepository surveyRepository;
  @Autowired
  private QuestionRepository questionRepository;
  @Autowired
  private AnswerRepository answerRepository;
  @Autowired
  private ReportService reportService;
  @Autowired
  private SurveyService surveyService;

  public static void main(String[] args) {
    SpringApplication.run(BackendApplication.class, args);
  }

  @Bean
  public CommandLineRunner springdata() throws Exception{
    return(args) -> {
     User user1 = new User("john",
        "reed",
        "john1994",
        "john1994@gmail.com",
        "123456",
        UserRoleEnum.USER);
      userRepository.save(user1);

      User user2 = new User("peter",
        "pan",
        "petpan",
        "petpan@gmail.com",
        "123456",
        UserRoleEnum.USER);
      userRepository.save(user2);

      Answer a1 = new Answer("yes");
      Answer a2 = new Answer("no");

      Set<Answer> answers = new HashSet<>();
      answers.add(a1);
      answers.add(a2);

      Question q1 = new Question("q1", QuestionTypeEnum.SINGLE_CHOICE);
      q1.setAnswers(answers);

      Set<Question> questions = new HashSet<>();
      questions.add(q1);
      Survey s1 = new Survey("survey1", "descr", (new Date()).getTime(), questions );
      s1.setId(0L);

      Report report = new Report(user1, s1, SurveyStatusEnum.NEW, user1);

      reportService.saveReport(1L, "NEW", s1);

      //getSurveyById(id)
//      Survey s1Get = surveyService.getSurveyById(1L);
//      LOG.debug("Survey: {}", s1Get.toString());
//
//      //getSurveys()
//      Iterable<Survey> allSurveys = surveyService.getSurveys();
//      LOG.info("All surveys: ");
//      for(Survey s: allSurveys) {
//        LOG.debug("Survey: {}", s1Get.toString());
//      }
//
//      //deleteSurveyById(id)
//      surveyService.deleteSurvey(1L);
//      allSurveys = surveyService.getSurveys();
//      for (Survey s : allSurveys) {
//        LOG.debug("Survey: {}", s1Get.toString());
//      }
    };
  }
}
