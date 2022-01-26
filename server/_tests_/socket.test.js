
const io = require('socket.io-client');
const server = require('../socket/config');

describe('Suite of unit tests', function () {
  //ngejalain servernya
  server.attach(3025); //kalo server in use, ganti server disini dan di localhost dibawah
  // let sender;
  // let receiver;
  let socket;

  beforeEach(function (done) {
    // Setup
    socket = io.connect('http://localhost:3025', {
      'reconnection delay': 0
      , 'reopen delay': 0
      , 'force new connection': true
    });

    socket.on('connect', function () {
      console.log('worked...');
      done();
    });
    socket.on('disconnect', function () {
      console.log('disconnected...');
    });
  });

  afterEach(function (done) {
    // Cleanup
    if (socket.connected) {
      console.log('disconnecting...');
      socket.disconnect();
    } else {
      // There will not be a connection unless you have done() in beforeEach, socket.on('connect'...)
      console.log('no connection to break...');
    }
    done();

  });

  describe('Chat tests', function () {

    test('Show message', (done) => {
      let payload = [
        {
          username: 'Budi',
          message: 'test'
        }
      ] 
      socket.emit('send_msg_pro', payload);

      socket.on('get_msg_pro', data => {
        expect(data).toEqual(expect.any(Object));
        done();
      });
      
    });

    test('Show message 2', (done) => {
      let payload = [
        {
          username: 'Budi',
          message: 'test'
        }
      ] 
      socket.emit('send_msg_amateur', payload);

      socket.on('get_msg_amateur', data => {
        expect(data).toEqual(expect.any(Object));
        done();
      });
      
    });

    test('Show message 3', (done) => {
      let payload = [
        {
          username: 'Budi',
          message: 'test'
        }
      ] 
      socket.emit('send_msg_home_cook', payload);

      socket.on('get_msg_home_cook', data => {
        expect(data).toEqual(expect.any(Object));
        done();
      });
      
    });

  });

});

