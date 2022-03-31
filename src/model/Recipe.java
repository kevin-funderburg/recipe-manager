import java.util.ArrayList;
import java.util.List;

public class Recipe {

    int recipeID;
    String name;
    public List<Ingredient> ingredients = new ArrayList<>();
    String instructions;
    String description;
    String category;
    int rating;
    boolean favorite;
    int prepTime;
    int cookTime;
    String source;

    public Recipe() {

    }

    public Recipe(String name) {
        this.name = name;
    }

    public void addIngredient(Ingredient i) {
        ingredients.add(i);
    }

}

public void download(String url) {
    if (validURL(url)) {
        String html = getHTML(url);
    }
}

public boolean validURL(String url) {
    String[] validURLs = {"foodnetwork", "epicurious", "delish"};
    boolean valid = false;
    for (String s : validURLs) {
        if (url.contains(s))
            valid = true;
    }
    return valid;
}

public String getHTML(String url) {
    String html;
    return html;
}