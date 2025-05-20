class User {
  constructor(name) {
    this.name = name;
  }

  login() {
    console.log(`${this.name} logged in`);
  }
}

class Admin extends User {
  constructor(name, role) {
    super(name); // Inherit name from User
    this.role = role;
  }

  login() {
    super.login(); // Reuse User's login method
    console.log(`Role: ${this.role}`);
  }
}

const admin1 = new Admin("Meena", "Moderator");
admin1.login();
// Meena logged in
// Role: Moderator
