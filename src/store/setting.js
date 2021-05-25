import { getSetting } from '@/api/setting'
import { setTitle } from '@/utils'
export default {
    namespaced: true,
    state: {
        isLoading: false,
        data: {}
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
        async fetchSetting({ commit }) {
            commit("setLoading", true)
            const { data } = await getSetting()
            commit("setData", data)
            commit("setLoading", false)
            if (data.favicon) {
                const fav = document.querySelector("link [rel='shortcut icon']")
                if (fav) {
                    return
                } else {
                    const ele = document.createElement("link")
                    ele.rel = 'icon'
                    ele.href = data.favicon
                    document.head.appendChild(ele)
                }
            }
            if (data.siteTitle) {
                setTitle.setSiteTitle(data.siteTitle)
            }
        }
    }
}
