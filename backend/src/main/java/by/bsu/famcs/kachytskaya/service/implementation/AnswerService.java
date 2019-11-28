package by.bsu.famcs.kachytskaya.service.implementation;

import by.bsu.famcs.kachytskaya.entity.Answer;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import by.bsu.famcs.kachytskaya.repository.AnswerRepository;
import by.bsu.famcs.kachytskaya.service.IAnswerService;

import java.util.Optional;

public class AnswerService implements IAnswerService {
  private final AnswerRepository answerRepository;

  @Autowired
  public AnswerService(AnswerRepository answerRepository) {
    this.answerRepository = answerRepository;
  }

  @Override
  public Answer getAnswerById(Long id) throws NotFoundException {
    Optional<Answer> answer = answerRepository.findById(id);
    if (answer.isPresent()) {
      return answer.get();
    } else {
      throw new NotFoundException("Answer with id: " + id + " was not found");
    }
  }

  @Override
  public Answer saveAnswer(Answer answer) {
    return answerRepository.save(answer);
  }

  @Override
  public Iterable<Answer> getAnswers() {
    return answerRepository.findAll();
  }

  @Override
  public void deleteAnswer(Answer answer) {
    answerRepository.delete(answer);
  }
}
