import Mock from "mockjs";
import qs from "querystring";

Mock.mock("/api/message", "post", {
  code: 0,
  msg: "",
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [
      "http://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2714399441,791784588&fm=26&gp=0.jpg",
      "http://img1.baidu.com/it/u=1796842200,2277127495&fm=26&fmt=auto&gp=0.jpg",
      "http://img2.baidu.com/it/u=3250889597,2466047395&fm=26&fmt=auto&gp=0.jpg",
      "http://img1.baidu.com/it/u=1212161490,2709179851&fm=26&fmt=auto&gp=0.jpg",
    ],
  },
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
  const query = qs.parse(options.url);

  return Mock.mock({
    code: 0,
    msg: "",
    data: {
      total: 52,
      [`rows|${query.limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [
            "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2714399441,791784588&fm=26&gp=0.jpg",
            "https://img1.baidu.com/it/u=1796842200,2277127495&fm=26&fmt=auto&gp=0.jpg",
            "https://img2.baidu.com/it/u=3250889597,2466047395&fm=26&fmt=auto&gp=0.jpg",
            "https://img1.baidu.com/it/u=1212161490,2709179851&fm=26&fmt=auto&gp=0.jpg",
          ],
        },
      ],
    },
  });
});
