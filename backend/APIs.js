const express = require('express');
var cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

const {createClient} = require('@supabase/supabase-js');
const supabaseUrl = 'https://gjzcfefmcwhswjobgdqy.supabase.co';
const supabaseKey = 'REDACTED_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

OTPs = new Map();
function generateOTP(email){
     var digits='0123456789';
    let otp='';
    for (let i = 0; i < 4; i++ ) 
    {
     otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
}
async function sendEmail(email){
     OTPs.set(email,generateOTP(email));
     var nodemailer = require('nodemailer');
        var transporter = nodemailer.createTransport({
        service:'outlook365',
        auth: {
        user: 'scared2compile@outlook.com',
        pass: 'REDACTED_EMAIL_PASSWORD'
        }
        });
        var mailOptions = {
        from: 'scared2compile@outlook.com',
        to: email,
        subject: 'Your One-Time-Password for login to preschoolgowhere',
        text: 'Your OTP is '+OTPs.get(email)+'. This OTP is valid for 15 minutes. Please do not share with anyone. If you have logged in again, then do not use this OTP.'
        };
        return new Promise(function (resolve, reject){
            transporter.sendMail(mailOptions, (err, info) => {
             if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                 console.log(`Mail sent successfully!`);
                resolve(info);
             }
            });
        });


}
function intersection(setA, setB) {
     const result = new Set();
     for (const elem of setA) {
         if (setB.has(elem)) {
             result.add(elem);
         }
     }
     return Array.from(result);
 }
app.post('/api/signup', (req,res) => {
     password = req.body.password;
     email = req.body.email;
     OTP = req.body.OTP;
     const EmailCheck = async() => {
     const {data} = await supabase
     .from('Accounts')
     .select('email')
     .eq('email',email)

     return data;
     };
     (async () => {
          const result = await EmailCheck();
          if(result.length >= 1)
          {
               console.log("Email already in database");
               res.send("Email already in use");
          }
          else{
               if(OTPs.get(req.body.email) === req.body.OTP){
               const {data} = await supabase.rpc('signup', {email:email,
               password:password});
               console.log("Email not in database");
               res.send("Account succesfully created!");
               }
               else{
                    console.log("OTP doesnt match");
                    res.send("Incorrect OTP. Try again.")
               }
          }
      })();

});
app.post('/api/login', (req,res) => {
     password = req.body.password;
     email = req.body.email;
     const EmailCheck = async() => {
          const {data} = await supabase
          .from('Accounts')
          .select('email')
          .eq('email',email)
     
          return data;
          };
          (async () => {
               const result = await EmailCheck();
               if(result.length === 0)
               {
                    console.log("Email not in database");
                    res.send("Please sign up first.");
               }
               else{
                    const returndata = async() => {
                         const {data} = await supabase.rpc('login', {user_email:email,
                              user_password:password});
                         return data;
                    }
                    const data = await returndata();
                    console.log(data);
                    if(data[0] === email){
                         console.log("Correct password!");
                         res.send("Succesfully logged in!");
                                        }
                    else{
                         console.log("Incorrect password!");
                         res.send("Login Unsuccesful");
                    }
               }
           })();
     
});
app.post('/api/updatepassword', (req,res) => {
     password = req.body.password;
     email = req.body.email;
     OTP = req.body.OTP;
     const EmailCheck = async() => {
     const {data} = await supabase
     .from('Accounts')
     .select('email')
     .eq('email',email)

     return data;
     };
     (async () => {
          const result = await EmailCheck();
          if(result.length === 0)
          {
               console.log("Email not in database");
               res.send("Please sign up first.");
          }
          else{
               if(OTPs.get(email) === OTP){
               const {data} = await supabase.rpc('updatepassword', {user_email:email,
               user_password:password});
               console.log("succesful");
               res.send("Sucessfully updated!");
               }
               else{
                    console.log("OTP doesn't match");
                    res.send("Incorrect OTP. Try again.");
               }
          }
      })();

});
app.post('/api/sendOTP/:email', (req,res) => {
          (async () => {
                    const {data} = await sendEmail(req.params.email);
                    console.log(OTPs.get(req.params.email));
                    res.send("OTP has been sent to your email!")
           })();
});
app.post('/api/runQuery', (req, res) => {
     food = req.body.food;
     second_lang = req.body.second_lang;
     service = req.body.service;
     spark = req.body.spark;
     transport = req.body.transport;
     citizenship = req.body.citizenship;
     level = req.body.level;
     max_fee = req.body.max_fee;
     min_fee = req.body.min_fee;
     service = req.body.service;
     
     const Filter1 = async() => {
         const {data} = await supabase.rpc('runfilter', {food:food,
             second_lang: second_lang,
             service: service,
             spark:spark,
             transport:transport});
             return data;
         };
     const Filter2 = async() => {
     const {data} = await supabase.rpc('filterfees', {citizenship:citizenship,
         level: level,
         max_fee: max_fee,
         min_fee: min_fee,
         service: service});
         return data;
     };
     (async () => {
         const data1 = await Filter1();
         const data2 = await Filter2();
         const setA = new Set(data1);
         const setB = new Set(data2);
         console.log(intersection(setA,setB));
         res.send(intersection(setA,setB));
     })();
 });
 
 const port = process.env.PORT || 3000;
 app.listen(port, () => console.log("Listening on: " + port));
 /*{food:"Default",
             second_lang: "Tamil",
             spark:"Default",
             transport:"Default",
          citizenship:"SC",
         level: "Nursery (4 yrs old)",
         max_fee: 800,
         min_fee:700,
         service:"Full Day"}*/
