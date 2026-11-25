
import express from "express";
import type { Express, Request, Response } from "express";

const app: Express = express();
const PORT: number = 3002;

app.use(express.json());

// Dados corretos para o login
const usuarioCorreto = "admin";
const senhaCorreta = "123456";

// Rota para verificar o login
app.post("/login", (req: Request, res: Response) => {

    const usuario = req.body.usuario;
    const senha = req.body.senha;

    // Verifica se os campos foram preenchidos
    if (!usuario || !senha) {
        return res.status(400).json({
            mensagem: "Informe o usuário e a senha!"
        });
    }

    // Verifica se o usuário e a senha estão corretos
    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        return res.status(200).json({
            mensagem: "Login realizado com sucesso!"
        });
    }

    // Caso os dados estejam incorretos
    return res.status(401).json({
        mensagem: "Usuário ou senha incorretos!",
        usuario: usuario
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
