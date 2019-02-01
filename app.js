const express = require('express');
const nunjucks = require('nunjucks');

let app = express();
const path = require('path');
app.use(express.static(path.join(__dirname,'static')));
nunjucks.configure(path.join(__dirname,'/views'), {
    autoescape: true,
    express: app
});

const PORT = process.env.PORT || 3000;

app.disable('x-powered-by');
app.listen(PORT,()=>{console.log("Server running at: "+PORT)});

app.get('/', (req, res)=>{
    res.render('index.html');
});
app.all('*', (req, res)=>{
    res.send({success:false, status:404, message:"Page Not Found"});
});