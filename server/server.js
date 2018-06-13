const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname,"../","public");

const port = process.env.PORT || 3000;

if (process.env.PORT) {
    console.log('Port number is passed via the environment variable PORT')
} else {
    console.log('Default port 3000 is being used.');
}


const app = express();

app.use(express.static(publicPath));

app.get("*",(req,resp)=>{
    resp.sendFile(path.join(publicPath,"index.html"));
})

app.listen(port,()=>{
    console.log(`server is up and listening on port ${port}`);
})
