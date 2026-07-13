const prisma = require('../../database/prisma');

class AuthRepository {
  async createUser(data) {
    return prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password || 'hashedpassword' // Placeholder for hashed password
      }
    });
  }

  async findUserByEmail(email) {
    return prisma.user.findUnique({
      where: { email }
    });
  }
}

module.exports = { AuthRepository };
