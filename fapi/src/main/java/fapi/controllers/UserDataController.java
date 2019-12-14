package fapi.controllers;

import fapi.models.UserModel;
import fapi.service.UsersDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserDataController {

  @Autowired
  private UsersDataService usersDataService;

  @RequestMapping
  public ResponseEntity<List<UserModel>> getAllUsers() {
    return ResponseEntity.ok(usersDataService.getAllUsers());
  }

  @RequestMapping(value = "/{email}", method = RequestMethod.GET)
  public ResponseEntity<UserModel> getUser(@PathVariable String email) {
    return ResponseEntity.ok(usersDataService.getUserByEmail(email));
  }

  @RequestMapping(method = RequestMethod.POST)
  public ResponseEntity<UserModel> saveUser(@RequestBody UserModel user) {
    return ResponseEntity.ok(usersDataService.saveUser(user));
  }

//  @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
//  public void deleteUser(@PathVariable String id) {
//    usersDataService.deleteUser(Long.valueOf(id));
//  }

  @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
  public void updateUser(@RequestBody UserModel newUser, @PathVariable Long id) {
    if (newUser != null) {
      usersDataService.updateUser(newUser, id);
    }
  }
}
