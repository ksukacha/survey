package by.bsu.famcs.kachytskaya.entity;

import javax.persistence.*;
import java.util.Objects;

@Entity
public class Report {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @ManyToOne(cascade = {CascadeType.MERGE})
  @JoinColumn(name="user_id")
  private User user;

  @ManyToOne(/*optional = false, cascade = {CascadeType.MERGE}*/cascade = {CascadeType.MERGE})
  @JoinColumn(name = "survey_id")
  private Survey survey;
  @Enumerated
  @Column(name ="survey_status")
  private SurveyStatusEnum surveyStatus;

 // @OneToOne
 // private User creatorUser;
  private String creatorUserId;

  public Report() {}

  public Report(User user, Survey survey, SurveyStatusEnum surveyStatus, /*User creatorUser*/ String creatorUserId) {
    this.user = user;
    this.survey = survey;
    this.surveyStatus = surveyStatus;
    this.creatorUserId = creatorUserId;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public User getUser() {
    return user;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public Survey getSurvey() {
    return survey;
  }

  public void setSurvey(Survey survey) {
    this.survey = survey;
  }

  public SurveyStatusEnum getSurveyStatus() {
    return surveyStatus;
  }

  public void setSurveyStatus(SurveyStatusEnum surveyStatus) {
    this.surveyStatus = surveyStatus;
  }

  public String getCreatorUserId() {
    return creatorUserId;
  }

  public void setCreatorUserId(String creatorUserId) {
    this.creatorUserId = creatorUserId;
  }

  @Override
  public String toString() {
    return "Report{" +
      "id=" + id +
      ", user=" + user +
      ", survey=" + survey +
      ", surveyStatus=" + surveyStatus +
      ", creatorUserId=" + creatorUserId +
      '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Report report = (Report) o;
    return Objects.equals(getId(), report.getId()) &&
      Objects.equals(getUser(), report.getUser()) &&
      Objects.equals(getSurvey(), report.getSurvey()) &&
      getSurveyStatus() == report.getSurveyStatus() &&
      Objects.equals(getCreatorUserId(), report.getCreatorUserId());
  }

  @Override
  public int hashCode() {
    return Objects.hash(getId(), getUser(), getSurvey(), getSurveyStatus(), getCreatorUserId());
  }
}
