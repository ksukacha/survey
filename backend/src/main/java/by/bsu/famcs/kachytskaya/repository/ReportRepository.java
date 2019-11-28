package by.bsu.famcs.kachytskaya.repository;

import by.bsu.famcs.kachytskaya.entity.Report;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportRepository extends CrudRepository<Report, Long> {
}
