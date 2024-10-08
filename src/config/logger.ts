import winston from 'winston'
import { CONFIG } from '.'

const logger = winston.createLogger({
    level: 'info',
    defaultMeta: {
        serviceName: 'auth-service',
    },
    transports: [
        new winston.transports.File({
            dirname: 'logs',
            filename: 'app.log',
            level: 'info',
            silent: CONFIG.NODE_ENV === 'test',
        }),
        new winston.transports.File({
            dirname: 'logs',
            filename: 'error.log',
            level: 'error',
            silent: CONFIG.NODE_ENV === 'test',
        }),
        new winston.transports.Console({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json(),
            ),
        }),
    ],
})

export default logger
