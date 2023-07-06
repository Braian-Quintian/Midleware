import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

const expressApp = express();
expressApp.use(express.json());
expressApp.use(express.text());

expressApp.get('/', (req, res) => {
    res.send('Hello World GET');
})
expressApp.post('/', (req, res) => {
    console.log(req.body);
    res.send('Hello World POST');
})

let config = JSON.parse(process.env.MY_CONFIG); //traje la configuracion del servidor
expressApp.listen(config.port, config.hostname, () => {
    console.log(`http://${config.hostname}:${config.port}`);
});