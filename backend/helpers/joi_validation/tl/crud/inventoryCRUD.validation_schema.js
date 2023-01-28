const joi = require("joi");
joi.objectId = require("joi-objectid")(joi);

const addClothSchema = joi.object({
  title: joi.string().trim().required(),
  rentPerHour: joi.number().min(100).max(10000).required(),
  stock: joi.number().min(1).required(),
  image: joi.string().trim().uri().required(),
});

const getClothesSchema = joi.object({
  storeName: joi.string().trim().allow(null),
  rentPerHour: joi.string().trim().allow(null),
  stock: joi.number().allow(null),
});

const updateClothSchema = joi.object({
  clothId: joi.objectId().required(),
  title: joi.string().trim(),
  rentPerHour: joi.number(),
  stock: joi.number(),
  image: joi.string().trim().uri(),
});

const deleteClothSchema = joi.object({
  clothId: joi.objectId().required(),
});

module.exports = {
  addClothSchema,
  getClothesSchema,
  updateClothSchema,
  deleteClothSchema,
};
