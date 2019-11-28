package by.bsu.famcs.kachytskaya.entity;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(name = "first_name")
  private String firstName;
  @Column(name = "last_name")
  private String lastName;
  @Column(name = "user_name")
  private String userName;
  private String email;
  private String password;
  @Enumerated
  private UserRoleEnum role;

//  @OneToMany(cascade = CascadeType.ALL)
//  @JoinTable (
//    name = "user_created_survey",
//    joinColumns = {@JoinColumn(name = "user_id")},
//    inverseJoinColumns = {@JoinColumn(name = "survey_id")})
//  private Set<Survey> createdSurveys = new HashSet<>();
//
//  @ManyToMany
//  @JoinTable(
//    name = "user_passed_survey",
//    joinColumns = {@JoinColumn(name = "user_id")},
//    inverseJoinColumns = {@JoinColumn(name = "survey_id")})
//  private Set<Survey> passedSurveys = new HashSet<>();

  @OneToMany(targetEntity = Report.class, mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
  private Set<Report> reports = new HashSet<>();


  public User() {}

  public User(String firstName, String lastName, String userName, String email, String password, UserRoleEnum role) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public Long getId() {
    return id;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getUserName() {
    return userName;
  }

  public String getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }

  public UserRoleEnum getRole() {
    return role;
  }

//  public Set<Survey> getCreatedSurveys() {
//    return createdSurveys;
//  }
//
//  public Set<Survey> getPassedSurveys() {
//    return passedSurveys;
//  }


  public Set<Report> getReports() {
    return reports;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public void setUserName(String userName) {
    this.userName = userName;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setPassword(String password) {
    this.password = password;
  }

//  public void setCreatedSurveys(Set<Survey> createdSurveys) {
//    this.createdSurveys = createdSurveys;
//  }
//
//  public void setPassedSurveys(Set<Survey> passedSurveys) {
//    this.passedSurveys = passedSurveys;
//  }

  public void setReports(Set<Report> reports) {
    this.reports = reports;
  }

  public void setRole(UserRoleEnum role) {
    this.role = role;
  }

  @Override
  public String toString() {
    return "User{" +
      "id=" + id +
      ", firstName='" + firstName + '\'' +
      ", lastName='" + lastName + '\'' +
      ", userName='" + userName + '\'' +
      ", email='" + email + '\'' +
      ", password='" + password + '\'' +
      ", role=" + role +
      ", reports=" + reports +
      '}';
  }
}
