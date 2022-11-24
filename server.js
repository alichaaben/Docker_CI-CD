const express=require('express');


// init app
const PORT=4000;
const app=express();


app.get('/',(req,res)=>{
    res.send('<h1>bienvenu ci ali</h1> ');
})

app.listen(PORT,()=>console.log('server is runnig as port:4000'));

// "scripts": {
//     "start":"node server.js",==>["npm","start"] npm start bech t5adim server
//     "dev-start":"nodemon server.js" ==>["npm","run","dev-start"] npm run dev-start bech t5adim server
//   },