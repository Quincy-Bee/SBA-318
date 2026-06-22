import express from "express";
import clientsRouter from "./routes/clients.js";
import leadsRouter from "./routes/leads.js";
import propertiesRouter from "./routes/properties.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static file
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// serve public folder
app.use(express.static(path.join(__dirname, "public")));

// middleware 
app.use(express.json());

// custom middleware 1
const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next();
};

// custom middleware 2
const addTime = (req, res, next) => {
  req.time = new Date().toISOString();
  next();
};

//views
app.set("view engine", "pug");
app.set("views", "./views");

// router"
app.get("/dashboard", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.use(express.static("public"));
app.use(logger);
app.use(addTime);

// routers
app.use("/clients", clientsRouter);
app.use("/leads", leadsRouter);
app.use("/properties", propertiesRouter);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});