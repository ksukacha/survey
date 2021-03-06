package by.bsu.famcs.kachytskaya.repository;


import by.bsu.famcs.kachytskaya.entity.Answer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AnswerRepository extends CrudRepository<Answer, Long> {
  
}
