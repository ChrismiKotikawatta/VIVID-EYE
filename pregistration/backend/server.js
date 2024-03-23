const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'vivid_eye'
})

app.post('/details', (req, res) => {
    const sql = "INSERT INTO details (`Name`, `NIC`, `ContactNumber`, `DateOfBirth`, `Address`, `Right_eye`, `Left_eye`) VALUES (?)";
    const values = [
        req.body.Name,
        req.body.NIC,
        req.body.ContactNumber,
        req.body.DateOfBirth,
        req.body.Address,
        req.body.Right_eye,
        req.body.Left_eye,
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

//API for the patient details search page//

app.get('/',(re,res)=> {
    return res.json('from backend side');
})


app.get('/details', (req, res) => {
    const sql = "SELECT * FROM details";
    db.query(sql, (err, data) => {
        if (err) {
            console.error('Error fetching data from database:', err);
            return res.json(err);
        }
        console.log('Data fetched successfully:', data);
        return res.json(data);
    });
});


// Route for both signup and login
app.post('/admin', (req, res) => {
    const { Username, Password } = req.body;
    
    // Check if the request is for signup or login
    if (req.query.action === 'signup') {
        const sqlSignup = "INSERT INTO admin (Username, Password) VALUES (?, ?)"
        const signupValues = [Username, Password];

        db.query(sqlSignup, signupValues, (err, result) => {
            if (err) {
                console.error("Error occurred while inserting data:", err);
                return res.status(500).json({ error: "An error occurred while saving data to the database" });
            }

            console.log("Data inserted successfully:", result);
            return res.status(200).json({ message: "Signup Successful" });
        });
    } else if (req.query.action === 'login') {
        const sqlLogin = "SELECT * FROM admin WHERE Username = ? AND Password = ?";
        db.query(sqlLogin, [Username, Password], (err, data) => {
            if (err) {
                console.error("Error occurred while querying the database:", err);
                res.status(500).json({ success: false, message: "Internal Server Error" });
            } else {
                if (data.length > 0) {
                    res.json({ success: true, message: "Login Successful" });
                } else {
                    res.json({ success: false, message: "Incorrect username or password" });
                }
            }
        });
    } else {
        res.status(400).json({ error: "Invalid action" });
    }
});

app.listen(8081, ()=> {
    console.log("Listening...");

})