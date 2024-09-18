import express from 'express'
import Menu from './routes/Menu';


const PORT: number = 8000
const app = express()
app.use(express.json())
app.use('/menu', Menu);

app.listen(PORT, () => {
    console.log("[server]: Server is running at http://localhost:8000")
})