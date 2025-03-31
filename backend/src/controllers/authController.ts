import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await prisma.user.create({
      data: { email, password: hashedPassword }
    });
    res.status(201).json({ id: user.id, email: user.email });

  } catch (error) {
    console.error('Error registering user:', error);
    res.status(400).json({ error: error });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    
    const user = await prisma.user.findUnique({
      where: { email }
    });
    
    if (!user) {
      res.status(400).json({ error: 'User not found' });
    }else{
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      res.status(400).json({ error: 'Invalid password' });
    }
    
    res.status(200).json({ id: user.id, email: user.email });
  }
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
};