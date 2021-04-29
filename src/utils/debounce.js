export default function (callback, delay = 200) {
    let timer = null
    return (...arg) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback && callback(...arg)
        }, delay);
    }
}
