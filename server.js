import app from './app';

const port = process.env.POST || '3000'; app.listen(port);
console.log(`Listening on port ${port}`);
