const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://mern-with-typescript-reserve-app.now.sh'
    : 'http://localhost:3000';

export default baseUrl;
