import server from './axios'

export function get(url, params) {
    return server.get(url, {
        params
    })
}
