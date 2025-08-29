import { VercelRequest, VercelResponse } from '@vercel/node';
import handler from '../src/server'; // seu server Express

export default (req: VercelRequest, res: VercelResponse) => {
  // o Express trata a requisição
  return handler(req, res);
};