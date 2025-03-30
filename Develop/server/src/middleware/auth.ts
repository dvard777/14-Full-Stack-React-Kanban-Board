import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface CustomJwtPayload {
  username: string;
  // add additional properties if needed (e.g., user id)
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'Access token missing' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded) => {
    if (err) {
      res.status(403).json({ message: 'Invalid or expired token' });
      return;
    }
    req.user = decoded as CustomJwtPayload;
    next();
  });
};
