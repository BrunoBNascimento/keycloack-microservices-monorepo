export default (error: string, details = {}) => {
  return {
    error: true,
    message: error,
    details,
  };
};
