const express = require('express');
const server = express();

server.get("/", (req, res) => {
    res.json({ message: "Hello world - tested on March 26" });
 });

 server.get("/ready", (req, res) => {
    res.json({ message: "It is working!!!" });
 });

 const port = 3000;

 server.listen(port, () => {
     console.log(`Server listening at ${port}`);
 });