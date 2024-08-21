const { default: mongoose } = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: false,
    },
  },
  { timeStamp: true }
);

export const TodoModel = mongoose.models.todos || mongoose.model("todos", Schema);
