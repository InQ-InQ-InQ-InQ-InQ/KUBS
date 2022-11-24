const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '/build/index.html'));
});

app.post('/api/login', function (request, response) {
    console.log(request.body)
    response.send
    ([
    {"classid":"123", "layer": 0, "roomName":"8001", "available":0},
    {"classid":"124", "layer": 0, "roomName":"8002", "available":0},
    {"classid":"125", "layer": 0, "roomName":"8003", "available":1},
    {"classid":"126", "layer": 1, "roomName":"8101", "available":1},
    {"classid":"127", "layer": 1, "roomName":"8102", "available":1},
    {"classid":"128", "layer": 1, "roomName":"8103", "available":0}]);
})

app.post('/api/members', function (request, response) {
    console.log(request.body)
    response.send(request.body);
})