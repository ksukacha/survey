package by.bsu.famcs.kachytskaya.service;

import by.bsu.famcs.kachytskaya.entity.Question;
import javassist.NotFoundException;

public interface IQuestionService {
  Question getQuestionById(Long id) throws NotFoundException;

  Question saveQuestion(Question question);

  Iterable<Question> getQuestions();

  void deleteQuestion(Question question);
}
