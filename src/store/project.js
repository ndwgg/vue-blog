import { getProjects } from '@/api/project';

export default {
    namespaced: true,
    state: {
        loading: true,
        data: []
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchProject({ commit, state }) {
            if (state.data.length > 0) {
                return
            }
            commit("setLoading", true)
            const { data } = await getProjects()
            commit("setData", data)
            commit("setLoading", false)
        }
    }
}
