# The Pick and Roll: A Basketball Newsite with a Golden State Warrior Theme

## Description
*The NBA Post UP* is a basketball news website that obtains its information by scraping [SBNation](https://www.sbnation.com/nba-news-basketball) via Cheerio and MongoDB. Users are able to update the website by pressing the "scrape" link at the top left of the navbar, comment on articles, and delete comments. The website also allows users to sort the articles by date either from newest to oldest or vice versa. The home screen contains information for each article such as an image, title, author name, date and time posted, a link to the article, and a link to comment. The article detail page contains the same information, but with a short summary, a section for comments, and a comment form.


## Usefulness
This program utilizes **MongoDB**, **node**, **cheerio**, **handlebars**, **jQuery**, **Axios** and **express** to create and access a database, run a server, send users to desired routes, and link HTML and CSS files. This enables the program to utilize it's internal database of stored articles and comments from SBNation and have it updated in realtime. The database is formed when the user "scrapes" SBNation by pressing the "scrape" link. Via `routes.js`, Cheerio sends a request to SBNation's site and grabs the data using jQuery and returns it. This information is stored in an object which is sent to the `Article` collection, which is then accessed by Handlebars to display the desired information on the page. When a user comments on an article, the user's name and comment are stored in an object, which is sent to the `Comment` collection. This information is then linked to the article via the `ref` keyword and Handlebars grabs the data it needs to present it on the page.

## Screenshots
**Home screen:** Shows all the articles.
![homescreenpic](https://github.com/jhwillia7/Mongodb-Scraper/blob/master/public/assets/images/mainScreen.PNG)

**Article Detail:** Shows information from the article with the addition of a short summary.
![articledetailspic](https://github.com/jhwillia7/Mongodb-Scraper/blob/master/public/assets/images/Fullarticlepic.PNG)

**Comments:** Part of the Article Detail page, here is a form to post a comment.
![commentscreenpic](https://github.com/jhwillia7/Mongodb-Scraper/blob/master/public/assets/images/commentPage.PNG)


## Technologies Used
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Express-Handlbars](https://github.com/ericf/express-handlebars)
- [Mongoose](https://mongoosejs.com/)
- [Body-Parser](https://www.npmjs.com/package/body-parser)
- [Cheerio](https://github.com/cheeriojs/cheerio)
- [Request](https://github.com/request/request)
- [jQuery](https://jquery.com/)


## JSON
The JSON of the articles and comments can be seen by going to these links:
-[Article JSON](https://ancient-bastion-22425.herokuapp.com/json-article)
-[Comment JSON](https://ancient-bastion-22425.herokuapp.com/json-comment)

## The Site is live!
-[Heroku Deployment](https://ancient-bastion-22425.herokuapp.com)
