// eslint-disable-next-line
export const catchException = (errorHandler, fn) => dispatch =>
  Promise.resolve(fn(dispatch)).catch(error => dispatch(errorHandler(error.response.data))); // eslint-disable-line
