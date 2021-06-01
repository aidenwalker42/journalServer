const app = require('express')()

app.get("/", function(req, res) {
    res.status(200).send(`<h1>DevMountain rock</h1>`);
})

app.listen(4000, function() {
    console.log("up and running at port 4000");
})