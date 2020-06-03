import express from 'express';

const app = express();

//sending json in the request body
app.use(express.json());

const users = [
    'Uriel',
    'Lucas',
    'Andre',
    'Victor'
];

app.get('/users/:id', (request, response)=>{
    const id = Number(request.params.id);
    const user = users[id];

    return response.json(user);
});

app.get('/users', (request, response) => {    
    const search = String(request.query.search);

    const filteredUsers = users.filter(user=>user.includes(search));

    return response.json(filteredUsers);
});

app.post('/users', (request, response)=>{
    var data = request.body;

    const user = {
        name: 'Uriel',
        email: 'teste@teste.com'
    };

    return response.json(user);
});

app.listen(3333);