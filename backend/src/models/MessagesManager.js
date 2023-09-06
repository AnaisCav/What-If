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
  // create = ({ user, content, creationdate }) => {
  //   return this.database.query(
  //     `insert into ${this.table} (user, content, creationdate) values (?, ?, ?)`,
  //     [user, content, creationdate]
  //   );
  // };
}

module.exports = MessagesManager;
