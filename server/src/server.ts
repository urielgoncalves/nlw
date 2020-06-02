import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuarios');

    //response.send('Hello World');
    response.json([
        'Uriel',
        'Lucas',
        'Victor',
        'Andre'
    ]);
});

app.listen(3333);