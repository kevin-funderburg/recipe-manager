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
