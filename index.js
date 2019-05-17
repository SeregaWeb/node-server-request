var port = 5000;

var express = require('express');
var bodyParser = require('body-parser');
var server = express();

server.use('/', express.static('public'));
server.use(bodyParser.json());

var arr = {
    text: []
};

server.post('/set_text', (req, res)=>{
    arr.text.push(req.body.text);
})

server.get('/get_data', (req, res)=>{
    console.log(arr);
    res.json(arr);
});

// server.get('/test.json',(req,res)=>{
//     res.json({
//         test: 'ok',
//         id:1,
//         time: new Date()
//     });
// });

// server.all('/all_data', (req,res)=>{
//     res.send('all data ok');
// }) 

// server.post('/set_test',(req,res)=>{
//     console.log(req.body);
//     res.json(req.body);
// })

server.listen(port, ()=>{
    console.log("Server run on port " + port );
});

