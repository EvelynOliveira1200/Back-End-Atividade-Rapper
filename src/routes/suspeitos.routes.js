import { Router } from "express"

const rapperRoutes = Router()


let suspeitos = [
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "P. Diddy",
        idade: 54,
        paisOrigem: "EUA",
        descricaoFisica: ["Homem", "Negro", "Cabelos pretos", "Barba curta"],
        atividadeSuspeita: "Sim"
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Mariah Carey",
        idade: 55,
        paisOrigem: "EUA",
        descricaoFisica: ["Mulher", "Branca", "Cabelos loiros"],
        atividadeSuspeita: "Não"
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Rihanna",
        idade: 36,
        paisOrigem: "Barbados",
        descricaoFisica: ["Mulher", "Morena", "Cabelos Morenos Escuros"],
        atividadeSuspeita: "Não"
    },
    {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome: "Beyoncé",
        idade: 43,
        paisOrigem: "EUA",
        descricaoFisica: ["Mulher", "Morena", "Cabelos Loiro Escuro"],
        atividadeSuspeita: "Não"
    }
];

// Rota para buscar todos os elementos do array Suspeitos
rapperRoutes.get("/", (req, res) => {
    return res.status(200).send(suspeitos)
})


// Rota para cadastrar um novo Suspeito
rapperRoutes.post("/", (req, res) => {
    const { nome, idade, paisOrigem, descricaoFisica, atividadeSuspeita } = req.body

    if (!nome || !idade) {
        return res.status(400).send({ message: "Os campos nome, idade e atividades suspeitas são obrigatórios!" })
    }

    //Validação para saber se o artista participa de atividades suspeitas
    if (atividadeSuspeita != "sim" && atividadeSuspeita != "não") {
        return res.status(400).send({ message: "Digite 'sim' ou 'não'!" })
    }

    if(!Number.isInteger(idade)){
        return res.status(400).send({ message: "Por favor digite um número inteiro!" })
    }

    const novoSuspeito = {
        id: Number(Math.floor(Math.random() * 99) + 1),
        nome,
        idade,
        paisOrigem,
        descricaoFisica,
        atividadeSuspeita,
    }

    suspeitos.push(novoSuspeito)
    return res.status(201).send({ message: "Suspeito cadastrado com sucesso" })
})


rapperRoutes.get("/:id", (req, res) => {
    const { id } = req.params

    console.log(id);


    const suspeito = suspeitos.find((artista) => artista.id === Number(id)
    )

    //console.log(Suspeitos)

    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado!" })
    }

    return res.status(200).send(suspeitos)
})


// Rota para editar um suspeito 
rapperRoutes.put("/:id", (req, res) => {

    const { id } = req.params

    const suspeito = suspeitos.find((artist) => artist.id === Number(id))
    const { nome, idade, paisOrigem, descricaoFisica, atividadeSuspeita } = req.body
    
    if (!nome || !idade) {
        return res.status(400).send({ message: "Os campos nome, idade e atividades suspeitas são obrigatórios!" })
    }

    //Validação para saber se o artista participa de atividades suspeitas
    if (atividadeSuspeita != "sim" && atividadeSuspeita != "não") {
        return res.status(400).send({ message: "Digite 'sim' ou 'não'!" })
    }

    if(!Number.isInteger(idade)){
        return res.status(400).send({ message: "Por favor digite um número inteiro!" })
    }

    //console.log(suspeitos)

    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado!" })
    }


   

    console.log(nome)


    suspeito.nome = nome
    suspeito.idade = idade
    suspeito.paisOrigem = paisOrigem
    suspeito.descricaoFisica = descricaoFisica
    suspeito.atividadeSuspeita = atividadeSuspeita



    return res.status(200).send({
        message: "Artista suspeito atualizado",
        suspeito,
    })

})


// Rota para deletar um suspeito
rapperRoutes.delete("/:id", (req, res) => {
    const { id } = req.params

    const suspeito = suspeitos.find((movie) => movie.id === Number(id))

    if (!suspeito) {
        return res.status(404).send({ message: "Suspeito não encontrado!" })
    }

    suspeito = suspeitos.filter((movie) => movie.id !== Number(id))

    return res.status(200).send({
        message: "suspeito deletado!",
        suspeito,
    })

})

export default rapperRoutes