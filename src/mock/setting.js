import Mock from 'mockjs'

Mock.mock("/api/setting", 'get', {
    code: 0,
    msg: "",
    data: {
        avatar: "https://img1.baidu.com/it/u=3455184204,2524748306&fm=26&fmt=auto&gp=0.jpg",
        siteTitle: "龙傲天的小窝",
        github: "https://gitee.com/ndwgg",
        qq: "2336365486",
        qqQrCode: "http://static.ndwgg.top/qq-concat.png",
        weixin: "伯爵大人",
        weixinQrCode: "http://static.ndwgg.top/wx-concat.jpeg",
        mail: "ndwgg@qq.com",
        icp: "京ICP备2020044340号",
        githubName: "你的伟哥哥",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})
