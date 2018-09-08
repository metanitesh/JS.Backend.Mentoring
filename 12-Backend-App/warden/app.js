import express from 'express';
import jwt from 'jsonwebtoken';
import authenticateRouter from 'routers/authenticateRouter';

const app = express();
;

app.listen(5000, () => console.log('Warden is listening on port 3000!'))
