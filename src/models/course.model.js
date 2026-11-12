// * ARCHIVO A COMPLETAR
import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    // TODO 1: title (String, único, obligatorio, de 3 a 100 caracteres).
     title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
     },
    // TODO 2: description (String, obligatorio, de 10 a 500 caracteres).
      description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
      minlength: 500,
    },
    // TODO 3: level (String, valores permitidos: ["beginner", "intermediate", "advanced"]; por defecto "beginner").
    level: {
      Type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner"
      
    },
    // TODO 4: price (Number, mínimo 0, por defecto 0).
    price: {
      type: Number,
      min: 0,
      default: 0,
    },
    // TODO 5: schedule: documento embebido 1:1. El campo schedule es un objeto que contiene tres campos propios,
    // cada uno con su definición:
    //   - day: String, obligatorio, valores permitidos: ["monday", "tuesday", "wednesday", "thursday", "friday"].
    day: {
      Type: String,
      enum: ["monday", "tuesday", "wednesday", "thursday", "friday"],
      default:"monday"
    },
    //   - startTime: Date, obligatorio.
    startTime: {
      type: Date,
      required: true,
    },
    //   - endTime: Date, obligatorio.
    endTime: {
      type: Date,
      required: true,
    },

    // TODO 6: teacher (ObjectId, obligatorio, referencia al modelo User).
    teacher: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },

    // TODO 7: topics (array de ObjectId con referencia al modelo Topic).
    topics: {
      type: Types.ObjectId,
      ref: "topic",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Course = mongoose.model("Course", courseSchema);

export default Course;
