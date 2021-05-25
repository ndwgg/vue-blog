import { getAbout } from '@/api/about';

export default {
    namespaced: true,
    state: {
        loading: true,
        data: null
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
        async fetchAbout({ commit, state }) {
            commit("setLoading", true)
            const { data } = await getAbout()
            commit("setData", data)
            commit("setLoading", false)
        }
    }
};