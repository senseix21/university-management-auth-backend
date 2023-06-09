import mongoose from 'mongoose'
import config from './config'


async function main() {
  try {
    await mongoose.connect(config.db_url as string)
    // console.log(` :smile Connected to database successfully!`)

    // app.listen(port, () => {
    //   console.log('App listening on port', port)
    // })
  } catch (error) {
    // console.error('Error connecting to Mongoose server', error)
  }
}

main()
