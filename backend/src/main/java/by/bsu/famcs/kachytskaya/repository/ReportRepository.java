package by.bsu.famcs.kachytskaya.repository;

import by.bsu.famcs.kachytskaya.entity.Report;
import by.bsu.famcs.kachytskaya.entity.Survey;
import by.bsu.famcs.kachytskaya.entity.SurveyStatusEnum;
import by.bsu.famcs.kachytskaya.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ReportRepository extends CrudRepository<Report, Long> {
  Iterable<Report> getAllBySurvey(Survey survey);
}
