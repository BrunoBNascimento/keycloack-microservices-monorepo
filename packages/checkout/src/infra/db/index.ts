import mongoose from 'mongoose';

const db = (
  configs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
) => {
  return {
    init() {
      const { DATABASE, MONGODB_PORT, MONGODB_URL } = process.env;
      const connectionURI = `mongodb://${MONGODB_URL}:${MONGODB_PORT}/${DATABASE}`;
      const onMongodbConnect = () =>
        console.log(`Succesfully connected on mongodb using ${connectionURI}`);

      console.log('Initializing database connection');
      mongoose.connect(connectionURI, configs, onMongodbConnect);
    },
  };
};

export default db;
