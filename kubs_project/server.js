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

app.post('/api/apply1', function (request, response) {
    console.log(request.body)
    response.send
    ([
    {"placeId":123, "floor": 0, "placeName":"8001", "isAble":true},
    {"placeId":124, "floor": 0, "placeName":"8002", "isAble":false},
    {"placeId":125, "floor": 0, "placeName":"8003", "isAble":true},
    {"placeId":126, "floor": 1, "placeName":"8101", "isAble":false},
    {"placeId":127, "floor": 1, "placeName":"8102", "isAble":true},
    {"placeId":128, "floor": 1, "placeName":"8103", "isAble":false}]);
})

app.post('/api/apply2', function (request, response) {
    console.log(request.body)
    response.send(request.body);
})

app.post('/api/complete', function (request, response) {
    console.log(request.body)
    response.send(request.body);
})