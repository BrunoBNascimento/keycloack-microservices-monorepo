import core from './src/infra/core';

try {
  console.time();
  const coreInstance = core();

  coreInstance.init();
  console.timeEnd();
} catch (e) {
  console.error(e);
} finally {
  console.log('App Successfully initialized');
}
