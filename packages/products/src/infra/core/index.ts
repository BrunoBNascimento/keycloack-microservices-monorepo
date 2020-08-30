import express from 'express';
import ICore from '@/infra/core/interfaces/ICore';
import env from '@/infra/environment';
import db from '@/infra/db';
import routes from '@/infra/routes';

const core = (): ICore => {
  const app = express();
  const environment = env();
  const dbconnection = db();
  const routesInstance = routes();

  return {
    init() {
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
