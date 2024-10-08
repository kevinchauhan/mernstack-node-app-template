import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import logger from './config/logger'
import { HttpError } from 'http-errors'

const app = express()
app.use(express.json())
app.use(cors())
// Routes
app.get('/', async (req, res) => {
    res.send('ok...')
})

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message)
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    })
})
export default app
