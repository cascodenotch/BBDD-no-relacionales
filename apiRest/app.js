const express = require("express")
const cors = require('cors')
const photoRouter = require("./router/photo.route")
const errorHandling = require("./error/error.handling")

const app = express();
 
app.set("port", process.env.PORT || 3000)

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(photoRouter);
app.use(function(req, res, next)
    {
        res.status(404).json({message: "Endpoint not found"})
    })

app.use(errorHandling);

module.exports = app;