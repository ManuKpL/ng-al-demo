// these packages had to be installed via npm
import express from 'express';

// these packages are shipped with node and do not require extra installation via npm
import { resolve } from 'path';
import { readFileSync } from 'fs';

// read server port from current node environment or set default value
const PORT = process.env.PORT || 3000;
const ENCODING = 'utf8';

// define absolute paths for our source files based on relative path to the current file
const sourceDir = resolve(__dirname, '../dist');
const lambdaAscii = resolve(__dirname, './lambda.txt');

// read a text file as a javascript string encoded in UTF-8
const lambda = readFileSync(lambdaAscii, ENCODING);

// create the express server
const app = express();

// serve all files inside the given directory (dist)
app.use(express.static(sourceDir));

// launch the server on the given port and log message on success
app.listen(PORT, () => {
  console.log(lambda);
  console.log(
    `Server successfully started!

>> Visit http://localhost:%s to use`,
    PORT,
  );
});
