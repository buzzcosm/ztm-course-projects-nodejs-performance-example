const express = require('express');

const app = express();

function delay(duration) {
  // blocking behavior ...
  const startTime = Date.now();
  while(Date.now() - startTime < duration) {
    // event loop is blocked...
  }
}

app.get('/', (req, res) => {
  // Blocking operation
  // JSON.stringify({}) => "{}"
  // JSON.parse("{}") => {}
  // [5,4,3,2,1].sort();
  res.send('Performance example');
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send('Ding ding ding!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

