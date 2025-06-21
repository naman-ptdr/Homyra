const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: String,
  image: {
    filename: { type: String },
    url: {
      type: String,
      default:
        "https://plus.unsplash.com/premium_photo-1680883742292-03b1a8b69568?q=80&w=1970&auto=format&fit=crop",
      set: (v) =>
        v === ""
          ? "https://plus.unsplash.com/premium_photo-1680883742292-03b1a8b69568?q=80&w=1970&auto=format&fit=crop"
          : v,
    },
  },
  price: {
    type: Number,
    min: 0,
  },
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
