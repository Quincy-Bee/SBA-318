import express from "express";
const router = express.Router();

let clients = [
  { id: 1, name: "Crystal Mayanja" },
  { id: 2, name: "Joseph Galluci" },
  { id: 3, name: "Heaven Harper" },
  { id: 4, name: "Levi Gold" },
  { id: 5, name: "Kanye West" },
  { id: 6, name: "Barry Gordy" },
  { id: 7, name: "Mike Tyson" },
  { id: 8, name: "Steve Austin" },
];

router.get("/", (req, res) => {
    res.json(clients);
});

router.post("/", (req, res) => {
    console.log(req.body);

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

router.patch("/:id", (req, res) => {
    const client = clients.find(c => c.id == req.params.id);

    if (!client) return res.status(404).json({ message: "Not found" });

    client.name = req.body.name || client.name;

    res.json(client);
});

export default router;