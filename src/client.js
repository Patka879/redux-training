import axios from "axios"

export const googleBooksClient = axios.create({
    baseURL: process.env.REACT_APP_GOOGLE_BOOKS_API,
    timeout: 5000
  })

googleBooksClient.interceptors.request.use(config => {
    config.params = {
        key: process.env.REACT_APP_GOOGLE_API_KEY,
    };
    return config
})

  