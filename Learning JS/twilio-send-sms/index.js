var twilio = require('twilio');

var accountSid = 'AC79a0bfe9a658c909192e77ee8c601f4c'; // Your Account SID from www.twilio.com/console
var authToken = '85738128870ce24bee20b7fd7f10f00b';   // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to: '+916204738645',  // Text this number
    from: '+12076058641' // From a valid Twilio number
})
.then((message) => console.log(message.sid))
.catch(err => console.log(err));

// client.calls
//   .create({
//     url: 'http://demo.twilio.com/docs/voice.xml',
//     to: '+916204738645',
//     from: '+12076058641',
//   })
//   .then(call => console.log(call.sid))
//   .catch(err => console.log(err));

client
  .calls('CAaf67466a808b107fdf34ddab87c655b2')
  .fetch()
  .then(call => console.log(call.to))
  .catch(err => console.log(err));