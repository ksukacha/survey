package by.bsu.famcs.kachytskaya.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Topic {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private boolean shared;
  @OneToMany(cascade = CascadeType.REMOVE)
  @JoinTable (
    name = "topic_question",
    joinColumns = {@JoinColumn(name = "topic_id")},
    inverseJoinColumns = {@JoinColumn(name = "question_id")})
  private Set<Question> questions = new HashSet<>();

  public Topic() {}

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public boolean isShared() {
    return shared;
  }

  public Set<Question> getQuestions() {
    return questions;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setShared(boolean shared) {
    this.shared = shared;
  }

  public void setQuestions(Set<Question> questions) {
    this.questions = questions;
  }
}
