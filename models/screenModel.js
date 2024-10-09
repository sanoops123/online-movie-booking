const mongoose = require('mongoose');

const screenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  screenType: {
    type: String, 
    required: true,
  },
  seats: {
    type: Array,
    required: true,
  },

  movieSchedules: [
    {
      movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie", 
        required: true,
      },
      showTime: {
        type:Number,
        required:true
      },
      showDate:{
        type:Number,
        required:true,
      },
    },
  ],
});

export const Screen = mongoose.model("Screen", screenSchema);
