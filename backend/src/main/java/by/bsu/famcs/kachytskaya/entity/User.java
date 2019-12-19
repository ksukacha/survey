package by.bsu.famcs.kachytskaya.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
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

  @OneToMany( mappedBy = "user", cascade = CascadeType.MERGE, fetch = FetchType.EAGER)
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
//      ", reports=" + reports +
      '}';
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    User user = (User) o;
    return
      Objects.equals(getFirstName(), user.getFirstName()) &&
      Objects.equals(getLastName(), user.getLastName()) &&
      Objects.equals(getUserName(), user.getUserName()) &&
      Objects.equals(getEmail(), user.getEmail()) &&
      Objects.equals(getPassword(), user.getPassword()) &&
      getRole() == user.getRole();
  }

  @Override
  public int hashCode() {
    return Objects.hash( getFirstName(), getLastName(), getUserName(), getEmail(), getPassword());
  }
}
