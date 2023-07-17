const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username : username, secret: username, first_name: username},
            {headers: {"private-key" : "43e0fa12-fcd0-4f36-b809-b9f8d82a530e"}}
        );
        return res.status(r.status).json(r.data);
    }
    catch(e) {
        return res.status(e.response.status).json(e.response.data)
    }
});

app.listen(3001);