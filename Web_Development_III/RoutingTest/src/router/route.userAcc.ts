import { Router } from "express";
import { nanoid } from "../../node_modules/nanoid/index";
import { Database } from "../database";

const userAccRoute = Router();
const database = new Database;
const table = "userAcc";

userAccRoute.get('/', (request, response) => {
    const userAcc = database.select(table);

    response.json(userAcc);
});

userAccRoute.get('/:id', (request, response) => {
    const { id } = request.params;

    const result = database.select(table, id);

    if(result === undefined) response.status(400).json({msg:"User account not found!"});

    response.json(result);
});

// Creates a new bank account
userAccRoute.post('/create',(request, response) => {
    const { name, address, zip, cpf, balance, operation } = request.body;
    
    const userAcc = {
        id: nanoid(10),
        name,
        address,
        zip,
        cpf,
        balance: 0,
        operation: []
    };   
 
    database.insert(table, userAcc);

    response.status(201).json({msg:'Blessed 🙏'});
});

// Deletes a bank account
userAccRoute.delete('/delete/:id', (request, response) => {
    const { id } = request.params;

    const userAccExist:any = database.select(table, id);
 
    if(userAccExist === undefined)
    return response.status(400).json({msg:"User account not found!"});

    database.delete(table, id);

    response
    .status(202)
    .json({msg:`User account with ID: ${id} was deleted!`});
});

// Edit a bank account
userAccRoute.put('/edit/:id', (request, response) => {
    const { id } = request.params;
    const { name, address, zip, cpf, balance, operation } = request.body;

    const userAccExist:any = database.select(table, id);

    if(userAccExist === undefined)
    return response.status(400).json({msg:"User account not found!"});

    database.update(table, id, {id, name, address, zip, cpf, balance, operation});

    response
    .status(202)
    .json({msg:`User account with ID: ${id} was edited!`});
});
 
// Make a deposit into the account
userAccRoute.put('/deposit/:id', (request, response) => {
    const { id } = request.params;
    const { operation } = request.body

    if (!operation || !Array.isArray(operation) || operation.length === 0) {
        return response.status(400).json({ msg: "Invalid operation data" });
    }

    const { type, value } = operation[0]; 
    
    const userAcc = database.select(table, id);
   
    if(userAcc === undefined) {
        return response.status(404).json({msg: "User account not found!"});
    };  
    
    const newBalance = userAcc.balance + Number(value);
    const userAccUpdated = {...userAcc, balance: newBalance};

    database.update(table, id, userAccUpdated);

    response.json(`Deposit made into account with ID: '${id}'`);
});

//Make a withdrawal from an account
userAccRoute.put('/withdraw/:id', (request, response) => {
    const { id } = request.params;
    const { operation } = request.body

    if (!operation || !Array.isArray(operation) || operation.length === 0) {
        return response.status(400).json({ msg: "Invalid operation data" });
    }

    const { type, value } = operation[0];

    const userAcc = database.select(table, id);
    
    if(userAcc === undefined) {
        return response.status(404).json({msg: "User account not found!"});
    };

    if(userAcc.balance < value) {
        return response.status(400).json("Insufficient balance to make the withdrawal");
    }

    const newBalance = userAcc.balance - Number(value);
    const userAccUpdated = {...userAcc, balance: newBalance};

    database.update(table, id, userAccUpdated);

    response.json(userAccUpdated);
});

// Shows the full statement of an account
userAccRoute.get('/statement/:id', (request, response) => {
    const { id } = request.params;

    const userAcc = database.select(table, id);
    const Statement = userAcc.operation || []

    if(userAcc === undefined) {
        return response.status(404).json("User account not found!");
    };

    response.json({ID_account: `${id}`, Statement});
});

// Shows the total balance of an account
userAccRoute.get('/balance/:id', (request, response) => {
    const { id } = request.params;

    const userAcc = database.select(table, id);
    const balance = userAcc.balance || []

    if(userAcc === undefined) {
        return response.status(404).json({msg: "User account not found!"});
    };

    response.json({ID_user: `${id}`, balance: `R$${balance}`});
});

export { userAccRoute }