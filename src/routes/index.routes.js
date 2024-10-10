import { Router } from "express"
import rapperRoutes from "./suspeitos.routes.js"

const routes = Router()

routes.get("/", (req, res) => {
    return res.status(200).send({ message: "Servidor funfando" })
})

routes.use("/suspeitos", rapperRoutes)
export default routes