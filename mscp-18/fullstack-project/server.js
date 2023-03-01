const express = require('express')
const app = express()
const cors = require('cors');
const dotenv = require('dotenv')
const { Pool } = require('pg')
const client = require('./db')
const morgan = require('morgan')
const PORT = process.env.PORT || 3001

dotenv.config();

app.use(cors())
app.use(morgan("tiny"))
app.use(express.static("public"))
app.use(express.json())


app.route('/task')
    .get(async (req, res)  => {
        try {
            const result = await client.query('SELECT * FROM todo')
            res.json(result.rows)
        } catch (err) {
            res.status(500).json({ error: err})
        }
    })

    .post(async (req, res) => {
        try {
                const { name, description, completed } = req.body;
                const insert = await client.query('INSERT INTO todo (name, description, completed) VALUES ($1,$2,$3);', [name, description, completed])
                const data = await client.query('SELECT * FROM todo')
                res.json({ validation: true, data: data.rows}).status(201)
        } catch (err) {
            res.status(500).json({ error: err})
        }
    })

app.route('/task/:id')
    .get(async (req, res) => {
        try {
                const id = req.params.id
                const results = await client.query('SELECT * FROM todo WHERE id =$1;', [id])
                res.json(results.rows[0])
        } catch (err) {
            res.status(500).json({error: err})
        }
    })
    .put(async (req, res) => {
        try {
                const { name, description, completed } = req.body
                const { id } = req.params
                await client.query('UPDATE todo SET name = $1, description = $2, completed = $3 WHERE id = $4', [name, description, completed, id])
                res.json({ message: `Updated id: ${id} Todo name: ${name}`}).status(204)
        } catch (err) {
            res.status(500).json({err})
        }
    })
    .delete(async (req, res) => {
        try {
            const {id} = req.params
            await client.query('DELETE FROM todo WHERE id = $1', [id])
            res.json({message: `Deleted ID: ${id}`}).status(204)
        } catch (err) {
            res.status(500).json({err})
        }
    })
        

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})