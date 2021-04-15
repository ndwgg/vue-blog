# Avatar
<img src="http://mdrs.yuanjin.tech/img/20201130153821.png" alt="image-20201130153821293" style="zoom:50%;" />


## 属性
| 属性名 | 含义     | 类型   | 必填  | 默认值 |
| ------ | -------- | ------ | ----- | ------ |
| url    | 图片地址 | String | true  | 无     |
| size   | 图片大小 | Number | false | 50     |

# Icon
<img src="http://mdrs.yuanjin.tech/img/20201130153927.png" alt="image-20201130153927256" style="zoom:50%;" />

图标组件

使用的图标源来自于「阿里巴巴矢量库」

## 属性
| 属性名 | 含义 | 类型 | 必填 | 默认值 
| --- | --- | --- | --- | --- |
| type | 图标名 | String | true | 无

<img src="http://mdrs.yuanjin.tech/img/20201130155542.jpg" alt="iShot2020-11-30下午03.47.09" style="zoom:33%;" />

# pager

<img src="http://mdrs.yuanjin.tech/img/20201113130301.png" style="zoom:50%;" />

## 属性
| 属性名 | 含义 | 类型 | 必填 | 默认值 
| --- | --- | --- | --- | --- |
| current | 当前页数 | Number | false | 1
| total | 总条数 | Number | false | 0
| limit | 每页限制条数 | Number | false | 10
| visibleNumber | 展示条数 | Number | false | 10

## 事件
| 事件名 | 含义 | 事件参数 | 参数类型
| --- | --- | --- | --- |
| pageChange | 改变页数 |  改变页数 | Number


# empty
<img src="http://mdrs.yuanjin.tech/img/20201130165011.png" alt="image-20201130165011681" style="zoom:50%;" />

该组件需要在外层容器中横向垂直居中

# ImageLoader

该组件可以实现一个渐进式图片

![alt tag](http://mdrs.yuanjin.tech/img/20201115132049.gif)

## 属性

| 属性名      | 含义                                         | 类型   | 必填 | 默认值 |
| ----------- | -------------------------------------------- | ------ | ---- | ------ |
| src         | 原始图片的路径                               | String | 是   | 无     |
| placeholder | 原始图片加载完成前的占位图片                 | String | 是   | 无     |
| duration    | 原始图片加载完成后，切换到原始图经过的毫秒数 | Number | 否   | 500    |

## 事件

| 事件名 | 含义                   | 事件参数 | 参数类型 |
| ------ | ---------------------- | -------- | -------- |
| load   | 原始图片加载完成后触发 | 无       | 无       |

## 示例

```html
<ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
/>
```


