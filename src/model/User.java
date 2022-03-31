// package model;

import java.util.ArrayList;
import java.util.List;

public class User {

	int userId;
    String firstName;
    String lastName;
    String email;
    String mailingAddress;
    String password;
    public List<Recipe> recipes = new ArrayList<>();

    public User(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public String getPassword() {
        return password;
    }
}


public boolean userExists(String email) {
    boolean exists = false;
    String sql = "SELECT * FROM Users WHERE email = '" + email + "'";
    //TODO execute SQL
    return exists;
}


public addToDB(User user) {
    String sql = "INSERT INTO Users (firstName, lastname, ";
}