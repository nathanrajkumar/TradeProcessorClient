'use strict';
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http, {cors: {origin: "*"}});
var Kafka = require('no-kafka');
let cors = require('cors');

const options = {
  origin: 'http://localhost:4200',
}
// FOR CORS:
app.use(cors())




io.on('connection', (socket) => {
  console.log('USER CONNECTED');

  socket.on('disconnect', function(){
    console.log('USER DISCONNECTED');
  });

});

http.listen(3000, () => {
  console.log('started on port 3000');
  var consumer = new Kafka.SimpleConsumer({
        connectionString: 'localhost:9092',
        clientId: 'producer-1'
    });

// data handler function can return a Promise
	var dataHandler = function (messageSet, topic, partition) {
		messageSet.forEach(function (m) {
			console.log(topic, partition, m.offset, m.message.value.toString('utf8'));
      var tradeMessage = {
        lastUpdated:(new Date()),
        message: m.message.value.toString('utf8')
      }
      io.emit('message', tradeMessage);
		});
	};

	return consumer.init().then(function () {
		var v1= consumer.subscribe('trade_message', [0], dataHandler);
		var arr=[];
		arr.push([v1]);
		console.log("val:"+arr);
		return arr;

	});
});

