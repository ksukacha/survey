package by.bsu.famcs.kachytskaya;

import by.bsu.famcs.kachytskaya.dto.QuestionDto;
import by.bsu.famcs.kachytskaya.dto.SurveyDto;
import by.bsu.famcs.kachytskaya.entity.*;
import by.bsu.famcs.kachytskaya.mapper.QuestionMapper;
import by.bsu.famcs.kachytskaya.mapper.SurveyMapper;
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

import java.util.*;


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
  @Autowired
  private TopicRepository topicRepository;

  @Autowired
  private QuestionMapper questionMapper;

  @Autowired
  private SurveyMapper surveyMapper;



  public static void main(String[] args) {
    SpringApplication.run(BackendApplication.class, args);
  }

//  @Bean
//  public CommandLineRunner springdata() throws Exception{
//    return(args) -> {
//
////     User user1 = new User("john",
////        "reed",
////        "john1994",
////        "john1994@gmail.com",
////        "123456",
////        UserRoleEnum.USER);
////     userRepository.save(user1);
////
////      User user2 = new User("peter",
////        "pan",
////        "petpan",
////        "petpan@gmail.com",
////        "123456",
////        UserRoleEnum.USER);
////      userRepository.save(user2);
//
//      Answer a1 = new Answer("yes");
//      Answer a2 = new Answer("no");
//
//      List<Answer> answers = new ArrayList<>();
//      answers.add(a1);
//      answers.add(a2);
//
//      Survey s1 = new Survey("survey1", "descr", (new Date()).getTime());
//      Survey s2 = new Survey("survey2", "descr2", (new Date()).getTime());
//      //s1.setId(0L);
//
//      Question q1 = new Question("q1", QuestionTypeEnum.SINGLE_CHOICE);
//      q1.setSurvey(s1);
//      q1.setAnswers(answers);
//
//      Set<Question> questions = new HashSet<>();
//      questions.add(q1);
//
//      s1.setQuestions(questions);
//
//      s1 = surveyRepository.save(s1);
//
//      for(Question q: questions) {
//        questionRepository.save(q);
//      }
//      for(Answer a: answers) {
//        a.setQuestion(q1);
//        answerRepository.save(a);
//      }
//      //Report report = new Report(user1, s1, SurveyStatusEnum.NEW, user1);
//      Answer a3 = new Answer("+");
//      Answer a4 = new Answer("-");
//
//      List<Answer> answers2 = new ArrayList<>();
//      answers2.add(a3);
//      answers2.add(a4);
//
//      Question q2 = new Question("q2", QuestionTypeEnum.SINGLE_CHOICE);
//      q2.setSurvey(s2);
//      q2.setAnswers(answers2);
//      Set<Question> questions2 = new HashSet<>();
//      questions2.add(q2);
//
//      s2.setQuestions(questions2);
//      surveyRepository.save(s2);
//
//      for(Question q: questions2) {
//        questionRepository.save(q);
//      }
//      for(Answer a: answers2) {
//        a.setQuestion(q2);
//        answerRepository.save(a);
//      }
//
//
//      reportService.saveReport(1L, "NEW", s1, "1L");
//      reportService.saveReport(1L, "PASSED", s1, "1L");
//      reportService.saveReport(1L, "NEW", s2,"1L");
//      reportService.saveReport(2L, "PASSED", s2, null);
//
////      Topic topic = new Topic("topic1", true);
////      questions.forEach(q -> q.setTopic(topic));
////      topic.setQuestions(questions);
////      topicRepository.save(topic);
////      for(Question q: questions) {
////        questionRepository.save(q);
////      }
//      //getSurveyById(id)
//      Survey s1Get = surveyService.getSurveyById(1L);
//      LOG.debug("Survey: {}", s1Get.toString());
//
//      //getSurveys()
//      Iterable<Survey> allSurveys = surveyService.getSurveys();
//      LOG.info("All surveys: ");
//      for(Survey s: allSurveys) {
//        LOG.debug("Survey: {}", s.toString());
//      }
//
//      //deleteSurveyById(id)
//      //surveyService.deleteSurvey(1L);
////      allSurveys = surveyService.getSurveys();
////      LOG.info("After delete: ");
////      for (Survey s : allSurveys) {
////        LOG.debug("Survey: {}", s.toString());
////      }
////      Survey s1Get1 = surveyService.getSurveyById(1L);
////      LOG.debug("q-s from s1: {}", s1Get1.getQuestions().toString());
////
////      //getSurveys()
////      Iterable<Survey> allSurveys1 = surveyService.getSurveys();
////      LOG.info("All q-s from all surveys: ");
////      for(Survey s: allSurveys1) {
////        LOG.debug("q-s: {}", s.getQuestions().toString());
////      }
//    };
//  }
}
