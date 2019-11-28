package by.bsu.famcs.kachytskaya.service.implementation;

import by.bsu.famcs.kachytskaya.entity.Question;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import by.bsu.famcs.kachytskaya.repository.QuestionRepository;
import by.bsu.famcs.kachytskaya.service.IQuestionService;

import java.util.Optional;

public class QuestionService implements IQuestionService {
  private final QuestionRepository questionRepository;

  @Autowired
  public QuestionService(QuestionRepository questionRepository){
    this.questionRepository = questionRepository;
  }

  @Override
  public Question getQuestionById(Long id) throws NotFoundException {
    Optional<Question> question = questionRepository.findById(id);
    if (question.isPresent()) {
      return question.get();
    } else {
      throw new NotFoundException("Question with id: " + id + " was not found");
    }
  }

  @Override
  public Question saveQuestion(Question question) {
    return questionRepository.save(question);
  }

  @Override
  public Iterable<Question> getQuestions() {
    return questionRepository.findAll();
  }

  @Override
  public void deleteQuestion(Question question) {
    questionRepository.delete(question);
  }
}
