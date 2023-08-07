const stayModel = require("../model/stayModel");

/**
 * add new stay to collection
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.addStays = async (req, res, next) => {
  try {
    const data = req.body.data;
    const response = await stayModel.insertMany(data);
    res.status(200).json(response);
  } catch (err) {
    next(err);
  }
};

/**
 * get stays as per location
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getStays = async (req, res, next) => {
  try {
    const pageNumber = req.query.page;
    const recordCount = req.query.recordCount;
    const countryCode = req.query.countryCode;
    const searchText = req.query.searchText || "";
    const aggregate = [
      {
        $project: {
          _id: 0,
          id: "$_id",
          countryCode: "$address.country_code",
          name: "$name",
          summary: "$summary",
          propertyType: "$property_type",
          cancellationPolicy: "$cancellation_policy",
          avaibility: "$availability",
          price: {
            $getField: {
              field: { $literal: "$numberDecimal" },
              input: "$price",
            },
          },
          accomodates: "$accommodates",
          image: "$images.picture_url",
          ratings: "$review_scores.review_scores_rating",
          fullAddress: "$address",
        },
      },
      {
        $match: { countryCode: countryCode },
      },
      {
        $set: {
          searchText: {
            $reduce: {
              input: {
                $map: {
                  input: {
                    $filter: {
                      input: { $objectToArray: "$fullAddress" },
                      as: "filterValue",
                      cond: {
                        $and: [
                          { $ne: ["$$filterValue.v", ""] },
                          { $ne: ["$$filterValue.k", "location"] },
                        ],
                      },
                    },
                  },
                  as: "mapValue",
                  in: { $trim: { input: "$$mapValue.v" } },
                },
              },
              initialValue: "$name",
              in: { $concat: ["$$value", ",", "$$this"] },
            },
          },
        },
      },
      {
        $match: { searchText: { $regex: searchText, $options: "i" } },
      },
      {
        $sort: { ratings: -1 },
      },
      {
        $skip: (pageNumber - 1) * recordCount,
      },
      {
        $limit: parseInt(recordCount),
      },
    ];
    const stayDocuments = await stayModel.aggregate(aggregate);
    res.status(200).json(stayDocuments);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.getDetails = async (req, res, next) => {};
