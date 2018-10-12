export default error => Object.keys(error.errors).reduce((acc, curr) => {
  const { message } = error.errors[curr];
  if (curr in acc) {
    acc[curr].push(message);
  } else {
    acc[curr] = [message];
  }
  return acc;
}, {});
