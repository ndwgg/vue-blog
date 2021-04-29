/**
 * 格式化时间
 * @param {*} timestamp 
 * @returns 
 */
export default function (timestamp, showTime) {
    const date = new Date(+timestamp),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDay().toString().padStart(2, '0');
    let str = `${date.getFullYear()} -${month} - ${day} `
    if (showTime) {
        const hour = date.getHours().toString().padStart(2, '0'),
            minute = date.getMinutes().toString().padStart(2, '0'),
            second = date.getSeconds().toString().padStart(2, '0');
        str += ` ${hour}:${minute}:${second}`
    }
    return str
}

