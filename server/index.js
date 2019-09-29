import express from 'express';
import { resolve } from 'path';
import { readFileSync } from 'fs';

const PORT = process.env.PORT || 3000;
const ENCODING = 'utf8';

const indexHtml = resolve(__dirname, '../src/index.html');
const lambdaAscii = resolve(__dirname, './lambda.txt');

const lambda = readFileSync(lambdaAscii, ENCODING);

const app = express();

app.use((_req, res, _next) => {
	res.sendFile(indexHtml);
});

app.listen(PORT, () => {
	console.log(lambda);
	console.log(
		`Server successfully started!

>> Visit http://localhost:%s to use`,
		PORT,
	);
});
