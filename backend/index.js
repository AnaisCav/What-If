require("dotenv").config();

const app = require("./src/app");

const port = parseInt(process.env.APP_PORT || 1337, 10);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Server is running on port ${port} 🚀`);
  }
});
