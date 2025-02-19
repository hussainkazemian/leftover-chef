import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/userModel';
import { JWT_SECRET } from '../config';

const register = async (userData) => {
  const { username, email, password, ...profileData } = userData;
  const existingUser = await User.findOne({ where: { username } });

  if (existingUser) {
    throw new Error('Username already taken');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await User.create({ username, email, password: hashedPassword });
  await Profile.create({ userId: user.id, ...profileData });

  return user;
};

const login = async (loginData) => {
  const { username, password } = loginData;
  const user = await User.findOne({ where: { username } });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
  return token;
};

const getProfile = async (userId) => {
  const profile = await Profile.findOne({ where: { userId } });
  if (!profile) {
    throw new Error('Profile not found');
  }
  return profile;
};

export default { register, login, getProfile };