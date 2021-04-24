import Mock from 'mockjs'
import qs from 'querystring'

Mock.mock("/api/blogtype", 'get', {
    code: 200,
    msg: "ok",
    "data|30-40": [{
        "id|+1": 1,
        name: "分类-@id",
        "articleCount|0-150": 10,
        "order|+1": 1
    }]
})

Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function (option) {
    const query = qs.parse(option.url)
    return Mock.mock({
        code: 200,
        msg: "ok",
        data: {
            "total|500-1000": 0,
            [`rows|${query.limit}`]: [
                {
                    id: "@guid",
                    title: "@ctitle(10,30)",
                    description: "@cparagraph(5,10)",
                    category: {
                        "id|1-10": 3,
                        name: "分类@id"
                    },
                    scanNumber: "@natural(1000,5000)",
                    commentNumber: "@natural(100,500)",
                    "thumb|1": ["@image(180x150,@color ,@cname)", null],
                    createDate: "@time('T')"
                }
            ]
        }
    })
})
