import { generateToken } from '../middleware/authMiddleware';

export class AuthService {
  async login(username: string, password: string) {
    // ตัวอย่าง: ในการใช้จริง ต้องมี Users table และ hash password
    // สำหรับตอนนี้ใช้ dummy credentials
    if (username === 'admin' && password === 'admin123') {
      const token = generateToken({ id: 1, username });
      return { token, user: { id: 1, username } };
    }
    throw new Error('Invalid credentials');
  }
}
