package by.bsu.famcs.kachytskaya.repository;

import by.bsu.famcs.kachytskaya.entity.Question;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QuestionRepository extends CrudRepository<Question, Long> {
}
