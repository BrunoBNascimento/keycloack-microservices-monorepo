import joi from 'joi';

export default joi.object().keys({
  name: joi.string(),
});