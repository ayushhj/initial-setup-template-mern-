import { Config } from './config/index'
import app from './app'

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => console.log(`Listing on port ${PORT}`))
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

startServer()

// console.log(Config.PORT)
