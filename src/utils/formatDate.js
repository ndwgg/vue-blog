/**
 * 格式化时间
 * @param {*} timestamp 
 * @returns 
 */
export default function (timestamp) {
    const date = new Date(+timestamp),
        month = (date.getMonth() + 1).toString().padStart(2, '0'),
        day = date.getDay().toString().padStart(2, '0');
    return `${date.getFullYear()} -${month} - ${day} `
}

