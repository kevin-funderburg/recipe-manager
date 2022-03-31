import java.util.ArrayList;
import java.util.List;

public class GroceryList {
    
    public List<Ingredient> ingredients = new ArrayList<>();
    public List<Item> items = new ArrayList<>();

    public GroceryList() {

    }

    public void addItem(Item i) {
        items.add(i);
    }

    public void addIngredient(Ingredient i) {
        ingredients.add(i);
    }

    public boolean itemExists(Item i) {
        return items.contains(i);
    }

    public boolean ingredientExists(Item i) {
        return ingredients.contains(i);
    }
}
