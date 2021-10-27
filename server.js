const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
//not set up yet
// const routes = require("./controllers");
// const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
//can put helpers in after set up the helpers function
const hbs = exphbs.create({});
//set up session and connect with sequelize database
// const sess = {
//   secret: "Super secret secret",
//   cookie: {
//     maxAge: 3600, //1 hours save
//     httpOnly: true,
//     secure: false,
//   },
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// app.use(session(sess));

// Inform Express.js on which template engine to use
//we not setup handlebars yet so after setting up then we can open this
// app.engine("handlebars", hbs.engine);
// app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Now listening. Visit http://localhost:${PORT}`)
  );
});
