const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WorkoutSchema = new Schema(
  {
    day: { type: Date, default: Date.now },
    exercises: [
      { 
      type: { type: String, required: "Please include a type of exercise!" },
      name: { type: String, required: "Please include a name!" },
      duration: { type: Number, required: "Please input a duration" },
      distance: { type: Number },
      weight: { type: Number },
      reps: { type: Number },
      sets: { type: Number } }
    ]
  },
  {
    toJSON: { virtuals: true }
  }
);
WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, current) => {
    return total + current.duration;
  }, 0);
});
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
