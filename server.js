const express = require('express');
const app = express();
const port = 3000;


// routes
app.get('/', (req, res) => {
    res.send('Hello from Node JS');
})

app.get("/blog", (req,res)=>{
    res.send("Blog Content");
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});