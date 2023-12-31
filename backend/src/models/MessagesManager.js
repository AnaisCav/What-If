const AbstractManager = require("./AbstractManager");

class MessagesManager extends AbstractManager {
  constructor() {
    super({ table: "message" });
  }

  create(message) {
    return this.database.query(
      `INSERT INTO ${this.table} (user, content) VALUES (?, ?)`,
      [message.user, message.content]
    );
  }
  update(message) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ? WHERE id = ?`,
      [message.content, message.id]
    );
  }
}

module.exports = MessagesManager;
