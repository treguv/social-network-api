const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"], // match email regex
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    // friends: [UserSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

UserSchema.virtual("friendCount").get(function () {
  //   return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = User;
