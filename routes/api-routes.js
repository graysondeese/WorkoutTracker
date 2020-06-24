let db = require("../models");
const { Workout } = require("../models")

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.json(err);
        })
    })

    app.post("/api/workouts",  (req, res) => {
        const workout = new Workout(req.body)
        db.Workout.create(workout)
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.json(err);
        })
    })
    app.put("/api/workouts/:id", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body}})
            .then(workout => {
                res.json(workout);
            })
            .catch(err => {
                res.json(err)
            });
    });

    app.get("/api/exercise", (req, res) => {
        db.Workout.find({})
        .then(Workout => {
            res.json(Workout);
        })
        .catch(err => {
            res.json(err);
          });
      });
    
}