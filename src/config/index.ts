import dotenv from 'dotenv'

// dotenv.config();
dotenv.config({ path: '../.env' })

const config = {
  port: process.env.PORT || '5000', // Provide a default value ('5000') if PORT is undefined
  db_url: process.env.DB_URL,
  default_student_pass: process.env.DEFAULT_STUDENT_PASS,
}

export default config;
