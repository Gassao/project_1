//   Row 1 and 2 => import.
 // A primary function that receives all the data from --> configs--> Models-->Routers --> and it created Routers and send to Web Site( Clinet)
const express = require('express')
const cors = require('cors')
require('./config/db')

const sudentsRouter = require('./Routers/studentRouter')


const app = express()
const port = 8000;

app.use((cors()));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/students', sudentsRouter);

app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
})