import express from 'express';
import { router } from './routes';
import cors from 'cors'

const server = express()
const port = 3000

//server.use(cors())

server.use(express.json())

server.use(router)

server.use((req, res, next) => {
   res.status(404).json({message: 'Erro ao acessar a rota!'})
})

server.listen(port, () => {
   console.log(`► Server running 🙏  →  http://localhost:${port}`);
})