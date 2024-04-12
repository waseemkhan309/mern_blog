import Mongoose  from "mongoose";

const connectionDb = async()=>{
    try{
        const conn = await Mongoose.connect(process.env.MONG_URL)
        console.log(`MongoDb Successfully connected with server ${conn.connection.host}`)
    }catch(e){
        console.log(`error in MongoDb connection ${e}`)
    }
}

export default connectionDb;
