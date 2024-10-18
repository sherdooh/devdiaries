import mongoose from "mongoose";

const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://sherdooh:UfBpoMsgtAAs6zhh@cluster0.oplba.mongodb.net/devdiaries')
    console.log('DB Connected');
}


export default ConnectDB;