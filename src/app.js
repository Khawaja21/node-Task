const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT || 4000;

// public static path
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set("views", template_path);
hbs.registerPartials(partials_path)

app.use(express.static(static_path));



// routing
app.get("", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/Weather", (req, res) => {
    res.render("Welcome to the Weather page")
})

app.get("*", (req, res) => {
    res.render("404 opps page not found")
})

app.listen(port , () => {
    console.log(`Listening to the port ${port}`);
});