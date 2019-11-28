package by.bsu.famcs.kachytskaya.entity;

import javax.persistence.*;

@Entity
public class Report {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @ManyToOne
  @JoinColumn
  private User user;

  @ManyToOne(optional = false, cascade = {CascadeType.MERGE})
  @JoinColumn(name = "survey_id")
  private Survey survey;
  @Enumerated
  @Column(name ="survey_status")
  private SurveyStatusEnum surveyStatus;

  @OneToOne
  private User creatorUser;

  public Report() {}

  public Report(User user, Survey survey, SurveyStatusEnum surveyStatus, User creatorUser) {
    this.user = user;
    this.survey = survey;
    this.surveyStatus = surveyStatus;
    this.creatorUser = creatorUser;
  }

  public Long getId() {
    return id;
  }

  public User getUser() {
    return user;
  }

  public Survey getSurvey() {
    return survey;
  }

  public SurveyStatusEnum getSurveyStatus() {
    return surveyStatus;
  }

  public User getCreatorUser() {
    return creatorUser;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setUser(User user) {
    this.user = user;
  }

  public void setSurvey(Survey survey) {
    this.survey = survey;
  }

  public void setSurveyStatus(SurveyStatusEnum surveyStatus) {
    this.surveyStatus = surveyStatus;
  }

  public void setCreatorUser(User creatorUser) {
    this.creatorUser = creatorUser;
  }

  @Override
  public String toString() {
    return "Report{" +
      "id=" + id +
      ", user=" + user +
      ", survey=" + survey +
      ", surveyStatus=" + surveyStatus +
      ", creatorUser=" + creatorUser +
      '}';
  }
}
