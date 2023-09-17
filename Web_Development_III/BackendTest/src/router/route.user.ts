import { Router } from "express";
import { randomUUID } from "node:crypto";
import { Database } from "../database";

const userRoute = Router();
const database = new Database;
const table = "user"

userRoute.get('/', (req, res) => {
    const user = database.select(table);
    res.json(user);
})

userRoute.get('/:id', (req, res) => {
    const { id } = req.params;

    const result = database.select(table, id);

    if(result === undefined) res.status(400).json({msg:"Usuário não encontrado!"});

    res.json(result);
});

// Parametro vindo do CLIENTE - REQUEST
// Parametro indo para o CLIENTE - res

userRoute.post('/',(req, res) => {

    const { name, email } = req.body;

    const user = {
        id: randomUUID(),
        name: name,
        email: email,
    };

    database.insert(table, user);

    res.status(201).json({msg:'Blessed 🙏'});
});

userRoute.delete('/:id', (req, res) => {
    const { id } = req.params;

    const userExist:any = database.select(table, id);

    if(userExist === undefined)
    return res.status(400).json({msg:"Usuário não encontrado!"});

    database.delete(table, id);

    res
    .status(202)
    .json({msg:`O ID: ${id} foi deletado do banco!`})

})

userRoute.put('/:id', (req, res) => {
    const { id } = req.params
    const { name, email } = req.body

    const userExist:any = database.select(table, id);

    if(userExist === undefined)
    return res.status(400).json({msg:"Usuário não encontrado!"});

    database.update(table, id, {id, name, email});

    res
    .status(202)
    .json({msg:`O ID: ${id} foi alterado no banco!`})

});

export { userRoute }