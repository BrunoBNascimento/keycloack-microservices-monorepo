import joi from 'joi';

const productSchema = joi.object().keys({
  name: joi.string().required(),
  price: joi.number().required(),
});

export default joi.object().keys({
  products: joi.array().items(productSchema),
  creditCard: joi.string().required(),
});
