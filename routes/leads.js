import express from "express";
const router = express.Router();

let leads = [{ id: 1, name: "Zillow Lead" }];

router.get("/", (req, res) => {
  res.json(leads);
});

router.post("/", (req, res) => {
  const newLead = {
    id: leads.length + 1,
    name: req.body.name,
    source: req.query.source || "unknown"
  };

  leads.push(newLead);
  res.json(newLead);
});

export default router;