package by.bsu.famcs.kachytskaya.entity;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.*;

@Entity
public class Survey {
  @Id
  @GeneratedValue (strategy = GenerationType.AUTO)
  @Column(name = "survey_id", nullable = false, unique = true)
  private Long id;
  private String name;
  private String description;
  @Column(name ="elapse_date")
  private Long elapseDate;
  @OneToMany (mappedBy = "survey", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)

//  @JoinTable (
//    name = "survey_question",
//    joinColumns = {@JoinColumn(name = "survey_id")},
//    inverseJoinColumns = {@JoinColumn(name = "question_id")})
  private List<Question> questions = new ArrayList<>();
  //@Enumerated
  //private SurveyStatusEnum status;
  @OneToMany( mappedBy = "survey", cascade = CascadeType.MERGE, fetch = FetchType.EAGER/*, cascade = CascadeType.ALL*/)
  private Set<Report> reports = new HashSet<>();

  public Survey() {}

  public Survey(String name, String description, Long elapseDate) {
    this.name = name;
    this.description = description;
    this.elapseDate = elapseDate;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public Long getElapseDate() {
    return elapseDate;
  }

  public List<Question> getQuestions() {
    return questions;
  }

  //  public SurveyStatusEnum getStatus() {
//    return status;
//  }

  public Set<Report> getReports() {
    return reports;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setElapseDate(Long elapseDate) {
    this.elapseDate = elapseDate;
  }

//  public void setStatus(SurveyStatusEnum status) {
//    this.status = status;
//  }

  public void setQuestions(List<Question> questions) {
    this.questions = questions;
  }

  public void setReports(Set<Report> reports) {
    this.reports = reports;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Survey survey = (Survey) o;
    return Objects.equals(getId(), survey.getId()) &&
      Objects.equals(getName(), survey.getName()) &&
      Objects.equals(getDescription(), survey.getDescription());
  }

  @Override
  public int hashCode() {
    return Objects.hash(getId(), getName(), getDescription());
  }

  @Override
  public String toString() {
    return "Survey{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", description='" + description + '\'' +
      ", elapseDate=" + elapseDate +
      ", questions=" + questions +
      '}';
  }

}
