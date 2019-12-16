package fapi;

import fapi.models.UserModel;
import fapi.service.UsersDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class FapiApplication {

  public static void main(String[] args) {
    SpringApplication.run(FapiApplication.class, args);
  }

  @Bean
  public RestTemplate restTemplate() {
    return new RestTemplate();
  }

  @Bean
  public BCryptPasswordEncoder encoder() {
    return new BCryptPasswordEncoder();
  }

  @Autowired
  private UsersDataService usersDataService;

//  @Bean
//  public CommandLineRunner run() throws Exception {
//    return (args) -> {
//      UserModel user1 = new UserModel("john",
//        "reed",
//        "john1994",
//        "john1994@gmail.com",
//        "123456",
//        "USER");
//      user1.setPassword(encoder().encode("123456"));
//
//      UserModel user2 = new UserModel("peter",
//        "pan",
//        "petpan",
//        "petpan@gmail.com",
//        "654321",
//        "USER");
//       user2.setPassword(encoder().encode("654321"));
//
//       user1 = usersDataService.saveUser(user1);
//       user2 = usersDataService.saveUser(user2);
//    };
//  }
}
