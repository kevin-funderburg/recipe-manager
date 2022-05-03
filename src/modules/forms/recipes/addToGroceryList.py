import sys
import sqlite3
from sqlite3 import Error

# dbpath = r"../../../../server/db/database.sqlite"   #this is the path when executing directly from command line
dbpath = r"server/db/database.sqlite"   #this is the path when executing from npm



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

    id = str(sys.argv[1])
    print("id: ", id)

    sql = "SELECT ingredients FROM recipes WHERE id = " + id

    conn = create_connection(dbpath)
    with conn:
        # execute_sql(conn, sql)
        cur = conn.cursor()
        cur.execute(sql)
        rows = cur.fetchall()
        print("done")

    for row in rows:
        ingredients = row[0]

    ingredients = ingredients.split("\n")

    for i in ingredients:
        sql = "INSERT INTO grocerylist (name) VALUES('" + i + "')"
        with conn:
            # execute_sql(conn, sql)
            cur = conn.cursor()
            cur.execute(sql)
            print(i + " added to grocerylist")


if __name__ == "__main__":
    main()