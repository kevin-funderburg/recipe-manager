import sys
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import re
import requests
import sqlite3
from sqlite3 import Error

dbpath = r"../../server/db/database.sqlite"
soup = None


class Recipe:

    def __init__(self):
        self.name = None
        self.description = None
        self.ingredients = None
        self.directions = None
        self.link = None
        self.prep_time = None
        self.cook_time = None
        self.category = None
        self.favorite = None
        self.rating = None


def getName():
    temp = soup.find_all("div", class_="assetTitle")
    name = temp[0].text
    name = name.replace("\n", "")
    return name


def getIngredients():
    ingredients = ""
    temp = soup.find_all("div", class_="o-Ingredients__m-Body")
    ingredients = temp[0].text
    ingredients = ingredients.replace("\n\n\n\n\n\n\n", "\n")
    ingredients = ingredients.replace("\n\n\n\n\n\n", "\n")
    ingredients = ingredients.replace("\n\n\n\n\n", "\n")
    ingredients = ingredients.replace("\n\n\n\n", "\n")
    ingredients = ingredients.replace("\n\n\n", "\n")
    ingredients = ingredients.replace("\n\n", "\n")
    ingredients = ingredients.replace("\nDeselect All\n", "")

    return ingredients


def getDescription():
    return None


def getDirections():
    directions = ""
    directionsHtml = soup.find_all("li", class_="o-Method__m-Step")
    for d in directionsHtml:
        if d.text:
            directions += d.text.replace("              ", "")
    return directions


def getTimes():
    prep_time = ""
    cook_time = ""

    times = soup.find_all("ul", class_="o-RecipeInfo__m-Time")
    times = times[0].text
    times = times.replace("\n\n\n", "\n")
    times = times.replace("\n\n", "\n")
    times = times.split("\n")
    prep_time = times[2]
    prep_time = prep_time.replace('min', '')
    prep_time = prep_time.replace(' ', '')
    cook_time = times[4]
    cook_time = cook_time.replace('min', '')
    cook_time = cook_time.replace(' ', '')

    return [prep_time, cook_time]


def create_connection(db_file):
    """ create a database connection to the SQLite database
        specified by the db_file
    :param db_file: database file
    :return: Connection object or None
    """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
    except Error as e:
        print(e)

    return conn


def main():
    global soup
    recipe = Recipe

    print("Hello world")
    url = str(sys.argv[1])
    print("url: ", url)
    page = requests.get(url)
    soup = BeautifulSoup(page.content, "html.parser")

    name = getName()
    recipe.name = name

    ingredients = getIngredients()
    recipe.ingredients = ingredients

    directions = getDirections()
    recipe.directions = directions

    recipe.description = 'NULL'

    recipe.link = url

    times = getTimes()
    recipe.prep_time = times[0]
    recipe.cook_time = times[1]

    recipe.category = 'NULL'
    recipe.rating = 'NULL'
    recipe.favorite = 'NULL'

    sql = "INSERT INTO recipes (name, description, ingredients, directions, link, prep_time, cook_time, category, rating, favorite) " \
          "VALUES('{0}','{1}','{2}','{3}','{4}','{5}','{6}','{7}','{8}','{9}')".format(recipe.name, recipe.description, recipe.ingredients, recipe, directions, recipe.link, recipe.prep_time, recipe.cook_time, recipe.category, recipe.rating, recipe.favorite)
    # create a database connection
    conn = create_connection(dbpath)
    with conn:
        # execute_sql(conn, sql)
        cur = conn.cursor()
        cur.execute(sql)
        rows = cur.fetchall()
        print("done")

if __name__ == "__main__":
    main()