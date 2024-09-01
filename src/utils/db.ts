import mongoose, { Mongoose } from "mongoose";

declare global {
  var mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

// Ensuring global.mongoose is initialized
global.mongoose = global.mongoose || { conn: null, promise: null };

async function dbConnect() {
  const MONGODB_URI = process.env.DATABASE_URI!;
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env"
    );
  }

  if (global.mongoose.conn) {
    console.log(
      `${global.mongoose.conn.connection.db?.namespace} DB connected successfully! `
    );
    return global.mongoose.conn;
  }

  if (!global.mongoose.promise) {
    const opts = {
      bufferCommands: false,
    };

    global.mongoose.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    global.mongoose.conn = await global.mongoose.promise;
  } catch (e) {
    global.mongoose.promise = null;
    throw e;
  }
  console.log(
    `${global.mongoose.conn.connection.db?.namespace} DB initialized and connected successfully! `
  );
  return global.mongoose.conn;
}

export default dbConnect;
