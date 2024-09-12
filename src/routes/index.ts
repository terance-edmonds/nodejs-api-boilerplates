import express from 'express';
import controllers from '../controllers/hello.controller';
import validationSchema from '../validation/hello.schema';
import validate from '../middleware/validator';

const router = express.Router();

router.get('/:name', validate(validationSchema.hello, 'params'), controllers.hello);

export default router;
