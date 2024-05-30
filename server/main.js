import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

// nike schoenen
app.get('/data/nike.json', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/nike.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading nike.json:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

//  nike t-shirts
app.get('/data/nike-tshirts.json', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/nike-tshirts.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading nike-tshirts.json:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// nike trainingspakken
app.get('/data/nike-trainingspak.json', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/nike-trainingspak.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading nike-trainingspak.json:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});


// adidas schoenen
app.get('/data/adidas.json', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/adidas.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading nike.json:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

//  adidas t-shirts
app.get('/data/adidas-tshirts.json', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/adidas-tshirts.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading nike-tshirts.json:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// adidas trainingspakken
app.get('/data/adidas-trainingspak.json', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/adidas-trainingspak.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading nike-trainingspak.json:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// new balance
app.get('/data/newBalance.json', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/newbalance.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading newbalance.json:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// new balance-tshirts
app.get('/data/newbalance-tshirts.json', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/newbalance-tshirts.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading newbalance-tshirts.json:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});
// new balance
app.get('/data/newbalance-broek.json', (req, res) => {
  res.setHeader('Content-type', 'application/json;charset=UTF-8');
  fs.readFile('data/newbalance-broek.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading newbalance-broek.json:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.send(data);
    }
  });
});

// Start de server op de opgegeven poort
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
