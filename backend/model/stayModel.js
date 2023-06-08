const mongoose = require("mongoose");

const stay = new mongoose.Schema({
  _id: {
    type: "String",
  },
  listing_url: {
    type: "String",
  },
  name: {
    type: "String",
  },
  summary: {
    type: "String",
  },
  space: {
    type: "String",
  },
  description: {
    type: "String",
  },
  neighborhood_overview: {
    type: "String",
  },
  notes: {
    type: "String",
  },
  transit: {
    type: "String",
  },
  access: {
    type: "String",
  },
  interaction: {
    type: "String",
  },
  house_rules: {
    type: "String",
  },
  property_type: {
    type: "String",
  },
  room_type: {
    type: "String",
  },
  bed_type: {
    type: "String",
  },
  minimum_nights: {
    type: "Date",
  },
  maximum_nights: {
    type: "Date",
  },
  cancellation_policy: {
    type: "String",
  },
  last_scraped: {
    $date: {
      type: "Date",
    },
  },
  calendar_last_scraped: {
    $date: {
      type: "Date",
    },
  },
  accommodates: {
    type: "Number",
  },
  bedrooms: {
    type: "Number",
  },
  beds: {
    type: "Number",
  },
  number_of_reviews: {
    type: "Number",
  },
  bathrooms: {
    $numberDecimal: {
      type: "String",
    },
  },
  amenities: {
    type: ["String"],
  },
  price: {
    $numberDecimal: {
      type: "String",
    },
  },
  security_deposit: {
    $numberDecimal: {
      type: "String",
    },
  },
  cleaning_fee: {
    $numberDecimal: {
      type: "String",
    },
  },
  extra_people: {
    $numberDecimal: {
      type: "String",
    },
  },
  guests_included: {
    $numberDecimal: {
      type: "Number",
    },
  },
  images: {
    thumbnail_url: {
      type: "String",
    },
    medium_url: {
      type: "String",
    },
    picture_url: {
      type: "String",
    },
    xl_picture_url: {
      type: "String",
    },
  },
  host: {
    host_id: {
      type: "String",
    },
    host_url: {
      type: "String",
    },
    host_name: {
      type: "String",
    },
    host_location: {
      type: "String",
    },
    host_about: {
      type: "String",
    },
    host_thumbnail_url: {
      type: "String",
    },
    host_picture_url: {
      type: "String",
    },
    host_neighbourhood: {
      type: "String",
    },
    host_is_superhost: {
      type: "Boolean",
    },
    host_has_profile_pic: {
      type: "Boolean",
    },
    host_identity_verified: {
      type: "Boolean",
    },
    host_listings_count: {
      type: "Number",
    },
    host_total_listings_count: {
      type: "Number",
    },
    host_verifications: {
      type: ["String"],
    },
  },
  address: {
    street: {
      type: "String",
    },
    suburb: {
      type: "String",
    },
    government_area: {
      type: "String",
    },
    market: {
      type: "String",
    },
    country: {
      type: "String",
    },
    country_code: {
      type: "String",
    },
    location: {
      type: {
        type: "String",
      },
      coordinates: {
        type: ["Number"],
      },
      is_location_exact: {
        type: "Boolean",
      },
    },
  },
  availability: {
    availability_30: {
      type: "Number",
    },
    availability_60: {
      type: "Number",
    },
    availability_90: {
      type: "Number",
    },
    availability_365: {
      type: "Number",
    },
  },
  review_scores: {},
  reviews: {
    type: "Array",
  },
});

const stayModel = mongoose.model(
  "listingsAndReviews",
  stay,
  "listingsAndReviews"
);

module.exports = stayModel;
