import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

const validate = (schema: Joi.ObjectSchema, content: 'body' | 'params' | 'query' = 'body') => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const data = content == 'body' ? req.body : content == 'params' ? req.params : req.query;
        const validation_result = schema.validate(data);

        if (validation_result.error) {
            var error_message = validation_result.error.details[0].message.replace(/"/g, '');

            return res.status(400).json({ status: 'failed', message: error_message });
        }

        return next();
    };
};

export default validate;
