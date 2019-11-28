package by.bsu.famcs.kachytskaya.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Question {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  @Enumerated
  private QuestionTypeEnum questionType;
  @OneToMany (cascade = CascadeType.ALL)
  @JoinTable (
    name = "question_answer",
    joinColumns = {@JoinColumn(name = "question_id")},
    inverseJoinColumns = {@JoinColumn(name = "answer_id")})
  private Set<Answer> answers;

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

  public Set<Answer> getAnswers() {
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

  public void setAnswers(Set<Answer> answers) {
    this.answers = answers;
  }
}
