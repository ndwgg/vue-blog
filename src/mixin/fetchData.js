export default function (dafaultData) {
    return {
        data() {
            return {
                data: dafaultData,
                isLoading: true
            }
        },
        async created() {
            const data = await this.fetchData()
            this.data = data
            this.isLoading = false
        }
    }
}
