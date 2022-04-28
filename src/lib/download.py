import sys
from urllib.request import Request, urlopen
from bs4 import BeautifulSoup
import requests


def getHTML(url):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    fp = urlopen(req,timeout=10)
    mybytes = fp.read()

    mystr = mybytes.decode("utf8")
    fp.close()

    return mystr

def main():
    print("Hello world")
    print("arg: ", str(sys.argv[1]))
    URL = 'https://www.foodnetwork.com/recipes/oven-baked-salmon-recipe-1911951'
    page = requests.get(URL)
    # html = getHTML('https://www.foodnetwork.com/recipes/oven-baked-salmon-recipe-1911951')
    soup = BeautifulSoup(page.content, "html.parser")
    # print(html)

if __name__ == "__main__":
    main()