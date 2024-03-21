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


app.listen(8081, ()=> {
    console.log("Listening...");

})