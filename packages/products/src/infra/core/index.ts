import express from 'express';
import ICore from '@/infra/core/interfaces/ICore';
import env from '@/infra/environment';
import db from '@/infra/db';
import routes from '@/infra/routes';
import errorHandler from '@/application/middleware/ErrorHandler';

const core = (): ICore => {
  const app = express();
  const environment = env();
  const dbconnection = db();
  const routesInstance = routes();

  return {
    init() {
      app.use(express.json());
      app.use(errorHandler);

      environment.init();
      dbconnection.init();
      routesInstance.init(app);

      const { PORT } = process.env;
      const onListenPort = () =>
        console.log(`Successfully listening on port ${PORT}`);

      console.log('Initializing Express...');
      app.listen(PORT, onListenPort);
    },
  };
};

export default core;
