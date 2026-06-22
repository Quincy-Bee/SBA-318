import express from "express";
import clientsRouter from "./routes/clients.js";
import leadsRouter from "./routes/leads.js";
import propertiesRouter from "./routes/properties.js";

const app = express();
const port = 3000;

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

app.use(logger);
app.use(addTime);

// routers
app.use("/clients", clientsRouter);
app.use("/leads", leadsRouter);
app.use("/properties", propertiesRouter);

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});