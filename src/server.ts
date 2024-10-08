import { CONFIG } from './config'
import app from './app'
import logger from './config/logger'

const PORT = CONFIG.PORT || 8000

const startServer = async (port: number) => {
    try {
        app.listen(port, () => {
            logger.info(`Listening on port ${port}`)
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            logger.error(`something went wrong..`, error.message)
            setTimeout(() => {
                process.exit(1)
            }, 1000)
        }
    }
}

startServer(PORT as number)
