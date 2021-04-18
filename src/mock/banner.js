import Mock from 'mockjs'

Mock.mock("/api/banner", "get", {
    code: 200,
    msg: "ok",
    "data|5-10": [
        {
            name: "@cname"
        }
    ]
})

