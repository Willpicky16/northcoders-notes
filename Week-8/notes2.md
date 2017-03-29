# MongoDB

Schema - Set of rules for a database

MongoDB is schemless - doesn't have a set of rules for storing files/items.

`mongod` to run mongo server

`mongo`
Within mongo you can you `show dbs` to show the mongo databases

`mongo < insert_pizzas.js` sends the file to the mongo database
`use pizza_db` Uses the specific database
`show collections` Shows the collections
`db.pizzas.count()` Counts how many items in db.pizzas
`db.pizzas.insert()` Add the information inside the insert that the pizza would need
`db.pizzas.find()` Finds a specific items
