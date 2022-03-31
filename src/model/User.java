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
    
    public String getPassword() {
        return password;
    }
}