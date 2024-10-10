import { Router } from "express"

const rapperRoutes = Router()


let Suspeitos = [
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "P. Diddy",
        idade: 54,
        paisOrigem: "EUA",
        descricaoFisica: ["Homem", "Negro", "Cabelos pretos", "Barba curta"],
        atividadeSuspeita: true
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Mariah Carey",
        idade: 55,
        paisOrigem: "EUA",
        descricaoFisica: ["Mulher", "Branca", "Cabelos loiros"],
        atividadeSuspeita: false
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Rihanna",
        idade: 36,
        paisOrigem: "Barbados",
        descricaoFisica: ["Mulher", "Morena", "Cabelos Morenos Escuros"],
        atividadeSuspeita: false
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Beyoncé",
        idade: 43,
        paisOrigem: "EUA",
        descricaoFisica: ["Mulher", "Morena", "Cabelos Loiro Escuro"],
        atividadeSuspeita: true
    }
];

// Rota para buscar todos os elementos do array Suspeitos
rapperRoutes.get("/", (req, res) => {
    return res.status(200).send(Suspeitos)
})


// Rota para cadastrar um novo Suspeito
rapperRoutes.post("/", (req, res) => {
    const { nome, idade, paisOrigem, descricaoFisica, atividadeSuspeita} = req.body

    if(!nome || !idade || !atividadeSuspeita) {
        return res.status(400).send({message: "Os campos nome, idade e atividades suspeitas são obrigatórios!"})
    }

    //Validação para saber se o artista participa de atividades suspeitas
    if(atividadeSuspeita != "sim" && atividadeSuspeita != "não") {
        return res.status(400).send({message: "Digite 'sim' ou 'não'!"})
    }

    const novoSuspeito = {
        id: Number(Math.floor(Math.random() * 99) +1),
        nome,
        idade,
        paisOrigem,
        descricaoFisica,
        atividadeSuspeita,
    }

    Suspeitos.push(novoSuspeito)
    return res.status(201).send({message:"Planeta cadastrado com sucesso"})
})

export default rapperRoutes