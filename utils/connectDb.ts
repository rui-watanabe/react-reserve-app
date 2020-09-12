import mongoose from 'mongoose';

interface connectionType {
  isConnected?: number;
}

const connection: connectionType = {};

async function connectDB(): Promise<void> {
  if (connection.isConnected) {
    // Use exiting database connection
    console.log('Using exiting connection');
    return;
  }
  // Use new database connection
  const db = await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('DB Connected');
  connection.isConnected = db.connections[0].readyState;
}

export default connectDB;
