const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const clothSchema = joi.object({
  clothId: joi.objectId().required(),
  rentPeriod: joi.date().min(tomorrow).required(),
  rentCharge: joi.number().min(100).required(),
});

const rentClothSchema = joi.object({
  clothDetails: joi.array().items(clothSchema),
});

const getClothesSchema = joi.object({
  storeName: joi.string().trim().allow(null),
  rentPerDay: joi.number().min(100).allow(null),
  stock: joi.number(),
});

module.exports = {
  rentClothSchema,
  getClothesSchema,
};
