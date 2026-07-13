class LoginDto {
  constructor(data) {
    this.email = data.email;
    this.password = data.password;
  }
}

class RegisterDto {
  constructor(data) {
    this.email = data.email;
    this.name = data.name;
    this.password = data.password;
  }
}

module.exports = { LoginDto, RegisterDto };
