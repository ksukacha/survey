package by.bsu.famcs.kachytskaya.service;

import by.bsu.famcs.kachytskaya.entity.Answer;
import javassist.NotFoundException;

public interface IAnswerService {
  Answer getAnswerById(Long id) throws NotFoundException;

  Answer saveAnswer(Answer answer);

  Iterable<Answer> getAnswers();

  void deleteAnswer(Answer answer);
}
