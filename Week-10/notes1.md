# Callbacks & F1 MVP Sprint

## Set up APP routes (APP is instead of API - as we've making an application)
Going to be many routes such as circuits which gets all the seasons
Past the season controller the request and a callback function (with error and data )
- express needed
- mongoose needed

Create a html website to show data

``` JavaScript
app.set('use engine', 'ejs');

app.get('/', function (req, res) {
  res.status(200).render('pages/index');
})
```
mkdir views
mkdir views/layout
mkdir views/pages
touch views/layout/header.ejs
touch views/layout/footer.ejs
touch views/pages/index.ejs

``` HTML
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test</title>
  </head>
  <body>
    <% include ../layout/header.ejs %>
    <% turtles.forEach(function (turtle) { %>

    <% }) %>
    <% include ../layout/footer.ejs %>
  </body>
</html>
```
