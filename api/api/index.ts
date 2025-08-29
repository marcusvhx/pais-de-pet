import { VercelRequest, VercelResponse } from '@vercel/node';
import app from '../src/app'; // seu app Express

export default (req: VercelRequest, res: VercelResponse) => {
  // o Express trata a requisição
  return app(req, res);
};