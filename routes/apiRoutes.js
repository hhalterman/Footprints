
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
      // Empty variables to store results
  
  
  // Takes each location score and converts it into a number, then pushes it into one array. 
    db.Locations.findAll({}).then(function(dbLocations) {
    let bestMatch;
    let smallestDifference;
    for (let i=0; i < dbLocations.length; i++) {
    const differences = [];
  // Take the difference of each score and push it into it's own array.
    differences.push(Math.abs((dbUsers.nature) - (dbLocations[i].nature)));
    differences.push(Math.abs((dbUsers.cost) - (dbLocations[i].cost)));
    differences.push(Math.abs((dbUsers.history) - (dbLocations[i].history)));
    differences.push(Math.abs((dbUsers.adventure) - (dbLocations[i].adventure)));
    differences.push(Math.abs((dbUsers.urban) - (dbLocations[i].urban)));
    differences.push(Math.abs((dbUsers.activity) - (dbLocations[i].activity)));
    differences.push(Math.abs((dbUsers.culture) - (dbLocations[i].culture)));
    differences.push(Math.abs((dbUsers.climate) - (dbLocations[i].climate)));
    differences.push(Math.abs((dbUsers.access) - (dbLocations[i].access)));
    differences.push(Math.abs((dbUsers.stay) - (dbLocations[i].stay)));
    console.log("These are the differences; " + differences);
  // Get the sum of the differences array.
    const result = differences.reduce((acc, curr) => {
      return acc + curr;
      }, 0);
      // console.log("The results are" + result);
  // If no Best Match exists, set current location as the best match and the smallestDifference as the current number.
      if(!bestMatch) {
        bestMatch = dbLocations[i];
        smallestDifference = result;
      }
  
  // If a best match exists, compare the current result to the smallest difference, and replace if less.
      else if(result < smallestDifference) {
        bestMatch = dbLocations[i];
        smallestDifference = result;
      }
  };
  console.log("The smallest difference is :" + smallestDifference);
  console.log("The best Match Is :" + bestMatch);
  res.json(bestMatch);
  });
      });
    });
  };
  
  
// // POST route to store user comments in the database.

// app.post("/api/comment", function(req, res) {
//   console.log(req.body);
//   db.Input.create({
//     username: req.body.username,
//     city : req.body.city,
//     country: req.body.country,
//     comment: req.body.comment,
//   })
//     .then(function(dbInput) {
//       console.log(dbInput)
//       res.json(dbInput);
//     });
// });


// // Store user suggestions in the database.

// app.post("/api/add", function(req, res) {
//   console.log(req.body);
//   db.Input.create({
//     username: req.body.username,
//     city : req.body.city,
//     country: req.body.country,
//     description: req.body.description,
//   })
//     .then(function(dbInput) {
//       res.json(dbInput);
//     });
// });


// // Search for Footprint in location table by city.

// app.get("/api/search/city/:city", function(req, res) {
//   db.Locations.findAll({
//     where: {
//       city: req.params.city
//     }
//   }).then(function(dbLocations) {
//     res.json(dbLocations);
//   });
// });

// // Generate 3 location cards for the search home page. 

// app.get("/api/search", function(req, res) {
//   db.Locations.findAll({
//     ORDER: id DESC,
//     limit: 3
//   }).then(function(dbLocations) {
//     res.json(dbLocations);
//   });
// });

// // Deleteing a comment.
// app.delete("/api/comment/:id", function(req, res) {
//   db.Input.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(function(dbInput) {
//       res.json(dbInput);
//     });
// });

// app.put("/api/comment", function(req, res) {
//   db.Input.update(req.body.comment,
//     {
//       where: {
//         id: req.body.id
//       }
//     })
//     .then(function(dbInput) {
//       res.json(dbInput);
//     });
// });

// }



// function compare(users) {  

//   // Empty variables to store results
//     let bestMatch = [];
//     let smallestDifference;
//     const differences = [];
  
//   // Takes each location score and converts it into a number, then pushes it into one array. 
//     db.Locations.findAll({}).then(function(dbLocations) {
//     for (let i=0; i < dbLocations.length; i++) {
  
//   // Take the difference of each score and push it into it's own array.
//     differences.push(Math.abs((users.nature) - (dblocations.nature)));
//     differences.push(Math.abs((users.cost) - (dblocations.cost)));
//     differences.push(Math.abs((users.history) - (dblocations.history)));
//     differences.push(Math.abs((users.adventure) - (dblocations.adventure)));
//     differences.push(Math.abs((users.urban) - (dblocations.urban)));
//     differences.push(Math.abs((users.activity) - (dblocations.activity)));
//     differences.push(Math.abs((users.culture) - (dblocations.cuture)));
//     differences.push(Math.abs((users.climate) - (dblocations.climate)));
//     differences.push(Math.abs((users.access) - (dblocations.access)));
//     differences.push(Math.abs((users.stay) - (dblocations.stay)));
  
//   // Get the sum of the differences array.
//     const result = differences.recude((acc, curr) => {
//       return acc + curr;
//       }, 0);
  
//   // If no Best Match exists, set current location as the best match and the smallestDifference as the current number.
//       if(!bestMatch) {
//         bestMatch = locations;
//         smallestDifference = result;
//       }
  
//   // If a best match exists, compare the current result to the smallest difference, and replace if less.
//       else if(result < smallestDifference) {
//         bestMatch = location;
//         smallestDifference = results;
//       }
//       console.log(bestMatch)
//   };
//   });
// };

