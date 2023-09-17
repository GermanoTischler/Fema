import express, { response } from 'express'
import { router } from './router/index';

const app = express();
const port = 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server Running!! 🙏 - end: http://localhost:${port}`);
});