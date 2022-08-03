const mongoose = require('mongoose')

const connect = () => {
  return mongoose.connect(
    'mongodb+srv://Bhavesh299:Bhavesh299@cluster0.rx9fxvl.mongodb.net/syncthreads',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('DB connected')
    },
  )
}
module.exports=connect
// mongodb+srv://Bhavesh299:Bhavesh299@cluster0.rx9fxvl.mongodb.net/test;
