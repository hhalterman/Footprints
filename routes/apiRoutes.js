
var db = require("../models");

var connection = require("../config/connection.js");

module.exports = function(app) {

  // POST route for user quiz.
  app.post("/api/survey", function(req, res) {
    console.log(req.body);
    db.users.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nature: req.body.nature,
      cost: req.body.cost,
      history: req.body.history,
      adventure: req.body.adventure,
      culture: req.body.culture,
      urban: req.body.urban,
      activity: req.body.activity,
      climate: req.body.climate,
      access: req.body.access,
      stay: req.body.stay,
    })
      .then(function(dbUsers){
        let bestMatch;
        let smallestDifference;
      
      // Takes each location score and converts it into a number, then pushes it into one array. 
        db.Locations.findAll({}).then(function() {
        for (var i = 0; i < db.Locations.length; i++) {
      
      // Take the difference of each score and push it into it's own array.
        const differences = [];
        differences.push(Math.abs((users.nature) - (locations.nature)));
        differences.push(Math.abs((users.cost) - (locations.cost)));
        differences.push(Math.abs((users.history) - (locations.history)));
        differences.push(Math.abs((users.adventure) - (locations.adventure)));
        differences.push(Math.abs((users.urban) - (locations.urban)));
        differences.push(Math.abs((users.activity) - (locations.activity)));
        differences.push(Math.abs((users.culture) - (locations.cuture)));
        differences.push(Math.abs((users.climate) - (locations.climate)));
        differences.push(Math.abs((users.access) - (locations.access)));
        differences.push(Math.abs((users.stay) - (locations.stay)));
        console.log(differences);  
      
      // Get the sum of the differences array.
        const result = differences.recude((acc, cur) => {
          return acc + curr;
          }, 0);
      
      // If no Best Match exists, set current location as the best match and the smallestDifference as the current number.
          if(!bestMatch) {
            bestMatch = location;
            smallestDifference = result;
          }
      
      // If a best match exists, compare the current result to the smallest difference, and replace if less.
          else if(result < smallestDifference) {
            bestMatch = location;
            smallestDifference = results;
          }
      };
      });
      // Send the best match to the client. 
      console.log(bestMatch);
      res.json(bestMatch);
      });
    });
  
  
// POST route to store user comments in the database.

app.post("/api/comment", function(req, res) {
  console.log(req.body);
  db.Input.create({
    username: req.body.username,
    city : req.body.city,
    country: req.body.country,
    comment: req.body.comment,
  })
    .then(function(dbInput) {
      console.log(dbInput)
      res.json(dbInput);
    });
});


// Store user suggestions in the database.

app.post("/api/add", function(req, res) {
  console.log(req.body);
  db.Input.create({
    username: req.body.username,
    city : req.body.city,
    country: req.body.country,
    description: req.body.description,
  })
    .then(function(dbInput) {
      res.json(dbInput);
    });
});


// Search for Footprint in location table by city.

app.get("/api/find/city/:city", function(req, res) {
  db.Locations.findAll({
    where: {
      city: req.params.city
    }
  }).then(function(dbLocations) {
    res.json(dbLocations);
  });
});

// Deleteing a comment.
app.delete("/api/comment/:id", function(req, res) {
  db.Input.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(function(dbInput) {
      res.json(dbInput);
    });
});

app.put("/api/comment", function(req, res) {
  db.Input.update(req.body,
    {
      where: {
        id: req.body.id
      }
    })
    .then(function(dbInput) {
      res.json(dbInput);
    });
});

}

// function compare(users) {  

  // Empty variables to store results
  //   let bestMatch;
  //   let smallestDifference;
  
  // // Takes each location score and converts it into a number, then pushes it into one array. 
  //   db.Locations.findAll({}).then(function() {
  //   for (var i = 0; i < db.Locations.length; i++) {
  
  // // Take the difference of each score and push it into it's own array.
  //   const differences = [];
  //   differences.push(Math.abs((users.nature) - (locations.nature)));
  //   differences.push(Math.abs((users.cost) - (locations.cost)));
  //   differences.push(Math.abs((users.history) - (locations.history)));
  //   differences.push(Math.abs((users.adventure) - (locations.adventure)));
  //   differences.push(Math.abs((users.urban) - (locations.urban)));
  //   differences.push(Math.abs((users.activity) - (locations.activity)));
  //   differences.push(Math.abs((users.culture) - (locations.cuture)));
  //   differences.push(Math.abs((users.climate) - (locations.climate)));
  //   differences.push(Math.abs((users.access) - (locations.access)));
  //   differences.push(Math.abs((users.stay) - (locations.stay)));
  //   console.log(differences);  
  
  // // Get the sum of the differences array.
  //   const result = differences.recude((acc, cur) => {
  //     return acc + curr;
  //     }, 0);
  
  // // If no Best Match exists, set current location as the best match and the smallestDifference as the current number.
  //     if(!bestMatch) {
  //       bestMatch = location;
  //       smallestDifference = result;
  //     }
  
  // // If a best match exists, compare the current result to the smallest difference, and replace if less.
  //     else if(result < smallestDifference) {
  //       bestMatch = location;
  //       smallestDifference = results;
  //     }
  // };
  // });
  // // Send the best match to the client. 
  // console.log(bestMatch);
  // res.json(bestMatch);
  
  // };
