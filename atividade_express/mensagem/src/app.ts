
import express from "express";
import type { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 3000;

app.use(express.json());

// Rota para receber os dados e montar a mensagem
app.post("/mensagem", (req: Request, res: Response) => {

    const nome = req.body.nome;
    const idade = req.body.idade;
    const time = req.body.time;

    if (!nome || !idade || !time) {
        return res.status(400).json({
            mensagem: "Preencha todos os campos!"
        });
    }

    const mensagem = `Olá, ${nome}! Você tem ${idade} anos e torce para o ${time}!`;

    return res.status(200).json({
        mensagem: mensagem
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
