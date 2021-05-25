import { getBanners } from '@/api/banner';

export default {
    namespaced: true,
    state: {
        isLoading: true,
        data: []
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload
        },
        setData(state, payload) {
            state.data = payload
        }
    },
    actions: {
        async fetchBanner({ commit, state }) {
            if (state.data.length > 0) return
            commit("setLoading", true)
            const { data } = await getBanners()
            commit("setData", data)
            commit("setLoading", false)
        }
    }
};