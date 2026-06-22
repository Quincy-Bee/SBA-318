import express from "express";
const router = express.Router();

let properties = [{ id: 1, address: "NYC Apartment" }];

router.get("/", (req, res) => {
  res.json(properties);
});

router.post("/", (req, res) => {
  const newProperty = {
    id: properties.length + 1,
    address: req.body.address
  };

  properties.push(newProperty);
  res.json(newProperty);
});

export default router;