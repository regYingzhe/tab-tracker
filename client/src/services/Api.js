import axios from 'axios'

// create a base url
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081`
  })
}
