import axios from 'axios'

const server = axios.create()

server.interceptors.request.use((req) => {
    return req
})

server.interceptors.response.use(resp => {
    if (resp.status === 200) {
        return resp.data
    }
    return null
}, (err) => {
    const { data, status } = err.response
    return {
        code: status,
        data
    }
})

export default server
