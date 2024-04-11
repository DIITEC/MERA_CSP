const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const randomstring = require('randomstring');
const cors = require('cors');


const app = express();
const PORT = 3001;

// Connect to MongoDB
mongoose.connect('mongodb+srv://Meracspdatabase:meracsp12345@cluster0.qfd1ain.mongodb.net/meracsp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// User schema
const userSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    fatherName: String,
    email: String,
    dob: Date,
    address: String,
    gender: String,
    state: String,
    district: String,
    username: String,
    password: String,
    dateCreated: { type: Date, default: Date.now }
  });

const User = mongoose.model('User', userSchema);

app.use(cors());
app.use(bodyParser.json());

// Registration endpoint
app.post('/register', async (req, res) => {
    const { name, mobile, fatherName, email, dob, address, gender, state, district, photo } = req.body;

  // Generate random username and password
  const username = randomstring.generate(8);
  const password = randomstring.generate(10);

  try {
    // Save user data to MongoDB
    const newUser = new User({
        name,
        mobile,
        fatherName,
        email,
        dob,
        address,
        gender,
        state,
        district,
        photo,
        username,
        password
      });
    await newUser.save();

    // Send username and password to email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aakashskilldevelopment@gmail.com',
        pass: 'lyoopjfpvrdonctw'
      }
    });

    const mailOptions = {
      from: 'aakashskilldevelopment@gmail.com',
      to: email,
      subject: 'Registration Details',
      text: `Username: ${username}\nPassword: ${password}`
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending registration details.');
      } else {
        console.log('Email sent: ' + info.response);
        res.status(200).send('Registration successful! Check your email for login details.');
      }
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Error registering user.');
  }
});

// Login endpoint
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log("helloooooo")
    // Check if the username and password match any user in the database
    const user = await User.findOne({ username, password });
    if (user) {
      res.status(200).send({ message: 'Login successful', user });
    } else {
      res.status(401).send({ message: 'Invalid username or password.' });
    }
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).send({ message: 'Error logging in.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});