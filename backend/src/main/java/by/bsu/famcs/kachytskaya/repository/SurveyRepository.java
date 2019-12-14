package by.bsu.famcs.kachytskaya.repository;

import by.bsu.famcs.kachytskaya.entity.Survey;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SurveyRepository extends CrudRepository<Survey, Long> {
  Optional<Survey> findByName(String name);
}
