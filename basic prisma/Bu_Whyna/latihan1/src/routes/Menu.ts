import express from "express"
import { buatMenu, dapatMenubyNama, dapatSemuaMenu } from "../controllers/MenuController"
const Menu = express()
Menu.use(express.json())

Menu.get("/",dapatSemuaMenu)
Menu.post("/create",buatMenu)
Menu.get("/:name", dapatMenubyNama)
export default Menu