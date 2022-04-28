DROP TABLE IF EXISTS Recipes;
DROP TABLE IF EXISTS GroceryList;
DROP TABLE IF EXISTS InStock;

CREATE TABLE "GroceryList" (
	"listID"	        INTEGER,
	"name"          TEXT NOT NULL UNIQUE,
	PRIMARY KEY("listID")
);

CREATE TABLE "InStock" (
	"itemID"	        INTEGER,
	"inStock"       INTEGER NOT NULL,
	PRIMARY KEY("itemID")
);


CREATE TABLE "Recipes" (
	"recipeID"      INTEGER,
	"name"			TEXT,
	"ingredients"   TEXT,
	"instructions"	TEXT,
	"descrip"       TEXT,
	"category"      TEXT,
	"rating"	    INTEGER,
	"favorite"      INTEGER,
	"prepTime"      INTEGER,
	"cookTime"      INTEGER,
	"source"        TEXT,
	PRIMARY KEY("recipeID")
);


INSERT INTO Recipes (name, ingredients, instructions, descrip, category, rating, favorite, prepTime, cookTime, source)
VALUES ("Chicken Cordon Bleu",
"4 chicken breasts skinless and boneless
4 thin slices prosciutto di Parma
1/2 pound Gruyere, grated
1/4 cup all-purpose flour
Kosher salt and freshly ground black pepper
1 cup panko bread crumbs
4 sprigs fresh thyme, leaves only
1 clove garlic, peeled and finely minced
2 tablespoons unsalted butter, melted
2 eggs
Extra-virgin olive oil", 
"Preheat oven to 350 degrees F.

Lay the chicken breast between 2 pieces of plastic wrap. Using the flat side of a meat mallet, gently pound the chicken to 1/4-inch thickness. Remove the top sheet of plastic and lay 2 slices of prosciutto neatly over the top to cover the breast and sprinkle a quarter of the cheese over the prosciutto. Tuck in the sides of the breast and roll up tight like a jellyroll inside the plastic wrap. Squeeze the log gently to seal and twist both ends tight to form a nice log. Repeat with remaining chicken.

Season the flour with salt and pepper. Mix the bread crumbs with thyme, garlic and kosher salt, pepper, and melted butter. The butter will help the crust brown. Beat together the eggs and season so the flour, the eggs and the crumbs are all seasoned.

Remove the plastic wrap. Lightly dust the chicken with flour, dip in the egg mixture and gently coat in the bread crumbs. Lightly coat a baking pan with olive oil and carefully transfer the roulades onto it. Bake for 20 to 25 minutes until browned and cooked through.

Cut into pinwheels and serve on top of Brussels Sprout Hash with Chicken Jus and Cranberry Chutney, if desired.",
NULL, "Entree", 4, 1, 20, 25,
"https://www.foodnetwork.com/recipes/tyler-florence/chicken-cordon-bleu-recipe2-1952383#lightbox-recipe-video"),

	  ("Arroz Con Pollo",
	  "2 teaspoons salt
1 teaspoon garlic powder
1/2 teaspoon dried cumin
1/4 teaspoon black pepper
1/4 teaspoon cayenne pepper
1 - 3.5-4 lb pound chicken, cut into 8 serving pieces and skin removed
3 tablespoons vegetable oil
1 small yellow onion, finely diced
1 green bell pepper, diced
1 red bell pepper, diced
2 jalapeno peppers, diced
1 1/2 teaspoons salt
1 1/2 cups long-grain rice
2 cloves garlic, finely diced
1 1/2 cups low-salt chicken stock
1/2 cup tomato sauce",
	"Combine the salt, garlic powder, cumin, black pepper and cayenne in a plastic gallon bag. Shake until the mixture is well combined. 

Pat the chicken dry and place in the bag with the spice mixture. Shake the bag, making sure the chicken is well coated. 

Heat the oil in a 12-inch high-sided skillet over high heat until hot but not smoking. Add the chicken and brown on all sides, about 6 minutes each side. Transfer the chicken to a plate, using tongs. 

Add the onions, green peppers, red peppers and 1/2 teaspoon salt to the skillet. Cook the vegetables over moderate heat, stirring, until softened and fragrant, about 7 minutes. Add the rice and garlic and cook until the rice begins to turn gold in color and fragrant, about 1 minute. 

Meanwhile, combine the stock, tomato sauce and remaining teaspoon salt in a medium bowl. Add 1 1/4 cups water and the stock mixture to the skillet and stir to make sure the rice is covered in liquid. Nestle the chicken in the rice, adding any juices from the plate. Bring the rice to a boil. Reduce the heat to medium-low and cover. Cook until the chicken is cooked through, the rice is tender and most of the liquid is absorbed, about 35 minutes. Let the skillet stand covered, about 10 minutes before serving.",

	NULL, "Entree", 4, 1, 20, 60, "https://www.foodnetwork.com/recipes/melissa-darabian/arroz-con-pollo-recipe-2121998"),
	
	("Vanilla Creme Brulee",
	"2 cups heavy or light cream, or half-and-half
1 vanilla bean, split lengthwise, or 1 teaspoon vanilla extract
⅛ teaspoon salt
5 egg yolks
½ cup sugar, more for topping",

	"Heat oven to 325 degrees. In a saucepan, combine cream, vanilla bean and salt and cook over low heat just until hot. Let sit for a few minutes, then discard vanilla bean. (If using vanilla extract, add it now.)

In a bowl, beat yolks and sugar together until light. Stir about a quarter of the cream into this mixture, then pour sugar-egg mixture into cream and stir. Pour into four 6-ounce ramekins and place ramekins in a baking dish; fill dish with boiling water halfway up the sides of the dishes. Bake for 30 to 40 minutes, or until centers are barely set. Cool completely. Refrigerate for several hours and up to a couple of days.

When ready to serve, top each custard with about a teaspoon of sugar in a thin layer. Place ramekins in a broiler 2 to 3 inches from heat source. Turn on broiler. Cook until sugar melts and browns or even blackens a bit, about 5 minutes. Serve within two hours.",

	NULL, "Desert", 5, 1, NULL, 60, "https://cooking.nytimes.com/recipes/9039-vanilla-creme-brulee"),

	("My Favorite Patato Gratin",
	"1 tbsp unsalted butter, plus more for greasing pan
2 lbs baking potatoes
½ tsp kosher salt
½ tsp freshly ground pepper
2 pinches freshly grated nutmeg
1 garlic clove, sliced
2 bay leaves
a couple sprigs of fresh thyme
2 firmly packed cups grated Gruyere cheese
1 cup heavy cream",
	"1. Preheat the oven to 350°F.

2. Butter the inside of an 8 X 8-inch baking dish. Peel the potatoes and put them in a bowl of cold water to keep them from browning while you slice them. Slice about half of the potatoes as thin as you can and layer them into the pan. (A food processor or Benriner slicer comes in handy for this.) Sprinkle with ¼ teaspoon of the salt, ¼ teaspoon of the pepper, a pinch of nutmeg, the garlic, and the bay leaves. Strip the thyme leaves off the sprigs and sprinkle them over the potatoes. Sprinkle with half of the cheese and pour over half of the cream.

3. Now slice and layer the remaining potatoes on top and sprinkle again with ¼ teaspoon salt, ¼ teaspoon pepper, and a pinch of nutmeg. Pour the rest of the cream over, sprinkle with the rest of the cheese, and dot with the 1 tablespoon butter (_a great trick_: use a frozen stick of butter and a grater). Put the gratin in the oven and bake until the top is golden and crusty and the interior of the gratin is still moist with cream when you stick a knife into it, about 1 hour and 15 minutes. Let it sit for 10 minutes before serving to let it firm up; it will be much easier to cut and serve.",
	
	"This is a cheesy, gooey gratin that tastes more of cheese than of cream, and also very subtly of fresh thyme and garlic. if you want something really simple, forget thee roasted red pepper strips in the center, substitute ½ pound of turnips for some potatoes, use half blue cheese, or add a layer of sliced tomatoes.",
	
	"Side", 5, 1, 20, 75, "The Food You Want to Cook"),
	
	("Chicken and Rice",
	"3 lb whole chicken
2 1/2 tsp freshly ground black pepper, divided plus more for serving
2 bay leaves (optional)
1 medium yellow onion, halved (optional)
2 tsp kosher salt, plus more to taste
2 C long-grain white rice (may substitute brown rice, quinoa, or a combination)
1 C chicken broth, optional as needed at the end of cooking
Juice of 1 lemon",
	"Remove gizzards and liver from chicken and discard; keep the neck (optional). Place chicken—and neck, if using—into a large Dutch oven or pot, breast side up. Add enough cool water to just barely cover the chicken. Over high heat, bring to a boil. While heating, season with ½ teaspoon freshly ground black pepper, and add bay leaves and onion if using. When boiling, reduce to a simmer, cover, and cook, about 1 hour.

After an hour, chicken should be fully cooked and falling off the bone. Turn off heat, remove lid, and let rest in the broth, 30 minutes.

Remove chicken from the pot and set aside to cool. Meanwhile, season the broth with remaining black pepper and salt. Bring back to a boil and stir in rice; lower heat and simmer uncovered, 1 minute. Stir and cook another 8–20 minutes, depending on the cooking directions of the type of rice you're using.

Meanwhile, pull the chicken into sizeable chunks, discarding the bones, skin, and fat; pour any juices that run off back into the chicken meat. When the rice is cooked, add chicken back to the pot. Stir, cover, and simmer, 10 more minutes.

After 10 minutes, the rice will have absorbed most of the broth, yielding a soupy consistency. (At this point, add more broth if desired.) Season with more black pepper and salt to taste. Stir in the lemon juice. Sprinkle with more black pepper and serve immediately. (Note: To liven up this humble dish you may add fresh spinach, kale, or chopped tomatoes, or stir in a dollop of pesto. Feel free to get creative and make this dish your own!)",
	
	"Chef's Notes: Vivian Howard was raised on this humble comfort dish, known as a bog in her neck of the woods. Boiling the chicken till it falls off the bone yields a flavorful broth for the rice to soak up, resulting in a rich, silky porridge that's plump with chicken. Think of it as Southern risotto!",
	
	"Entree", 5, 1, 30, 60, "https://www.foodnetwork.com/fnk/recipes/chicken-and-rice-7151558"),
	
	("Braised Brussell Sprouts",
	"1 head brussel sprout 
1/2 cup chicken stock 
1/2 tbsp olive oil
2 dashes fish sauce
salt
pepper",
	"1. Split heads of brussel sprouts in half

2. Coat pan with olive oil and arrange the brussel sprout hves cut side down in the pan, bring to medium heat and allow to cook undisturbed for a few minutes so the cut sode gets good caramelization.

3. Add chicken stock, fish sauce, salt and pepper and cook until the sprouts are tender and the stock is boiled away.",
	"I never liked Brussels sprouts as a kid, but now I love them. You don't normally find this vegetable in the Spanish kitchen, so the flavorful combination of sprouts and chorizo is my take on a new Spanish-American side.",
	
	"Side", 5, 1, 10, 15, "https://www.foodnetwork.com/fnk/recipes/pan-roasted-brussels-sprouts-7152007")
	


;
