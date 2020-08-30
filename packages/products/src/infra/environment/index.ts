import dotenv, { DotenvConfigOutput } from 'dotenv';

const environment = () => {
  return {
    init(): DotenvConfigOutput {
      const currentPath = process.cwd();
      const { NODE_ENV } = process.env;
      const path = `${currentPath}/.env.${NODE_ENV}`;
      console.log(
        `Initializing environment variables in ENV ${NODE_ENV}... using configuration file ${path}`,
      );

      return dotenv.config({
        path,
      });
    },
  };
};

export default environment;
