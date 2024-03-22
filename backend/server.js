const express= require('express');
const mysql= require('mysql')
const cors =require('cors');

const app =express()
app.use(cors())

const db= mysql.createConnection({
    host:"localhost",
    user: 'root',
    password: '',
    database:'vivid_eye'
})

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




app.listen(8081,()=>{
    console.log("listening");
})