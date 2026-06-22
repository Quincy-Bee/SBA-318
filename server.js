import express from 'express';
const app = express();
const port = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//moddleware 1
const activityLogger = (req, res, next) => {
  console.log(`[CRM ACTIVITY] ${req.method} ${req.url}`);
  next();
};

//middleware 2
const leadSourceTagger = (req, res, next) => {
  req.leadSource = req.query.source || "unknown";
  next();
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}); 
