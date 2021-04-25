import server from './axios'

export function get(url, params) {
    return server.get(url, {
        params
    })
}

// post
export function post(url, data) {
    return server.post(url, {
        data
    })
}
