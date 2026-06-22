import express from "express";
const router = express.Router();

let clients = [{ id: 1, name: "Crystal Mayanja" }];

router.get("/", (req, res) => {
  res.json(clients);
});

router.post("/", (req, res) => {
  const newClient = {
    id: clients.length + 1,
    name: req.body.name
  };
  clients.push(newClient);
  res.json(newClient);
});

router.delete("/:id", (req, res) => {
  clients = clients.filter(c => c.id != req.params.id);
  res.json({ message: "deleted" });
});

export default router;