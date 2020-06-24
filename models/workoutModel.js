// setting up required vars
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating schema

const WorkoutSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now
    },
    excercises: [{
        type: {type: String, trim: true, required: "Please select a type of workout."},
        name: {type: String , trim: true, required: "Please name your workout."},
        duration: {type: Number},
        weight: {type: Number},
        reps: {type: Number},
        sets: {type: Number},
        duration: {type: Number},

    }]
}, {
    toJSON: {
        virtuals: true
    }
});

// Defining virtual to calc time
WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, current) => {
      return total + current.duration
    }, 0)
  });

// creating the model we made above 
const Workout = mongoose.model("Workout", WorkoutSchema)
// Exporting the workout model
module.exports = Workout;