require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);



const user = require('./models/user');
const Booking = require('./models/Booking');
const Business = require('./models/Business');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const express = require('express');
const app = express();
app.use(express.static('BOOKIVA APP'));
const path=require('path');
app.use(express.static(path.join(__dirname,'public')));
const cors = require('cors');
const mongoose = require('mongoose');


app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended:true}));


app.use((req,res,next) => {
    console.log ('Incoming request: ${req.method} ${req.url}');
     next();
});





app.use(cors());

mongoose.connect('mongodb+srv://golasneha:Sneha07@cluster0.xtvjkwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('Database Connected!'))
    .catch(err => console.log(err));



app.get('/', (req, res) => {
    res.send('Welcome to the Booking App!');
});

app.post('/register-business', async (req, res) => {
    try {
        const newBusiness = new Business(req.body);
        await newBusiness.save();
        res.status(201).send('Business Registered Successfully!');
    } catch (error) {
        res.status(500).send(error);
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


/*register user*/

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone,
            date: req.body.date
        });
        await newUser.save();
        res.status(201).send('User Registered Successfully!');
    } catch (error) {
        res.status(500).send('Error in Registration');
    }
});





/*login user*/

app.post('/login', async (req, res) => {

        try {
            const{email, password} = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid password');
        }


        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    }
    
        catch (error) {
            console.log(error);
            res.status(500).send("Server error");
        }
    });

    const verifyToken = (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).send('Access denied. No token provided.');
        }

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).send('Invalid token.');
            }
            req.user = user;
            next();
        });
    };



app.post('/api/booking', async (req, res) => {

        try {
            const newBooking = new Booking(req.body);           
            await newBooking.save();
            res.status(201).json('Booking Created Successfully!');
        } 
        catch (error) {
            console.error("Error",error);
           res.status(500).json('Error in Booking');
        }
    
});



// 1. यह रहा /signup रूट जो आपके साइन अप बटन के क्लिक पर डेटा पकड़ेगा
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    
    // यह आपके टर्मिनल (VS Code) में प्रिंट होगा
    console.log("new user:", username, email, password);
    
    // यहाँ आप डेटाबेस (MongoDB/SQL) में डेटा सेव करने का कोड लिख सकती हैं

    // फ्रंटएंड को सफलता का मैसेज भेजें ताकि वह होम पेज पर रीडायरेक्ट कर सके
    res.status(200).json({ message: 'Sign up successful!' });
});

// होम पेज का रूट
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// सर्वर को पोर्ट 3000 पर चलाना
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


