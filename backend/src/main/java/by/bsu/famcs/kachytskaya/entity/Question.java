package by.bsu.famcs.kachytskaya.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
public class Question {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  @Enumerated
  @Column(name="question_type")
  private QuestionTypeEnum questionType;
  @OneToMany (mappedBy = "question", cascade = CascadeType.MERGE)
//  @JsonManagedReference
//  @JoinTable (
//    name = "question_answer",
//    joinColumns = {@JoinColumn(name = "question_id")},
//    inverseJoinColumns = {@JoinColumn(name = "answer_id")})
  private List<Answer> answers;
  @ManyToOne(cascade = CascadeType.MERGE)
  @JoinColumn(name="survey_id")
  @JsonIgnore
  private Survey survey;

  @ManyToOne
  @JoinColumn(name="topic_id")
  @JsonIgnore
  private Topic topic;

  public Question() {}

  public Question(String name, QuestionTypeEnum questionType) {
    this.name = name;
    this.questionType = questionType;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public QuestionTypeEnum getQuestionType() {
    return questionType;
  }

  public List<Answer> getAnswers() {
    return answers;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setQuestionType(QuestionTypeEnum questionType) {
    this.questionType = questionType;
  }

  public void setAnswers(List<Answer> answers) {
    this.answers = answers;
  }

  public Survey getSurvey() {
    return survey;
  }

  public void setSurvey(Survey survey) {
    this.survey = survey;
  }

  public Topic getTopic() {
    return topic;
  }

  public void setTopic(Topic topic) {
    this.topic = topic;
  }

  @Override
  public String toString() {
    return "Question{" +
      "id=" + id +
      ", name='" + name + '\'' +
      ", questionType=" + questionType +
     // ", answers=" + answers +
      '}';
  }
}
