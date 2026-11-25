
import express from "express";
import type { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 3001;

app.use(express.json());

// Rota para realizar a soma
app.post("/soma", (req: Request, res: Response) => {

    const numero1 = req.body.numero1;
    const numero2 = req.body.numero2;
    const numero3 = req.body.numero3;

    // Verifica se os campos foram preenchidos
    if (numero1 === undefined || numero2 === undefined || numero3 === undefined) {
        return res.status(400).json({
            mensagem: "Informe os três números!"
        });
    }

    // Verifica se os valores são números
    if (
        typeof numero1 !== "number" ||
        typeof numero2 !== "number" ||
        typeof numero3 !== "number"
    ) {
        return res.status(400).json({
            mensagem: "Todos os valores devem ser numéricos!"
        });
    }

    // Realiza a soma
    const resultado = numero1 + numero2 + numero3;

    return res.status(200).json({
        resultado: resultado
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
