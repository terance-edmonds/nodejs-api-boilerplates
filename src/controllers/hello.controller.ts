import { Request, Response } from 'express';

export default {
    hello: async (req: Request, res: Response) => {
        return res.status(200).send(`Hello ${req.params.name}!`);
    }
};
