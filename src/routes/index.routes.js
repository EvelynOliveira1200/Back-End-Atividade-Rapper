import { Router } from "express"
import rapperRoutes from "./suspeitos.routes.js"

const rapperRoutes = Router()

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor funfando" })
})

export default rapperRoutes