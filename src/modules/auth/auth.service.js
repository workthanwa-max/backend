const { AuthRepository } = require('./auth.repository');

class AuthService {
  constructor() {
    this.authRepository = new AuthRepository();
  }

  async register(data) {
    const existingUser = await this.authRepository.findUserByEmail(data.email);
    if (existingUser) {
      throw new Error('User already exists');
    }
    return this.authRepository.createUser(data);
  }

  async login(data) {
    const user = await this.authRepository.findUserByEmail(data.email);
    if (!user) {
      throw new Error('User not found');
    }
    // Implement actual password verification logic here
    return { token: 'mock-jwt-token', user };
  }
}

module.exports = { AuthService };
