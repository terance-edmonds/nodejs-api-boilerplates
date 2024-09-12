import Joi from 'joi';

export default {
    hello: Joi.object().keys({
        name: Joi.string().required()
    })
};
