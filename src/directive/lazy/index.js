import eventBus from '@/eventBus'
import { debounce } from '@/utils'
import defaultGif from '@/assets/default.gif'

let imgs = []

// 第一步：将所有需要处理的图片替换为默认图片
// 第二步：计算位置，看当前的图片是不是处在一个合适的位置
// 第三步：图片加载完成(onload) 替换默认图片即可

function setImage(img) {
    img.dom.src = defaultGif
    const clientHeight = document.documentElement.clientHeight
    const rect = img.dom.getBoundingClientRect();
    const height = rect.height || 150
    console.log(rect.top)
    if (rect.top >= -height && rect.top <= clientHeight) {
        // 位置合适需要处理图片了
        const tempImageEle = new Image()
        tempImageEle.onload = function () {
            img.dom.src = img.src
        }
        tempImageEle.src = img.src
        imgs = imgs.filter(i => i !== img)
    }
}

function setImages() {
    for (const img of imgs) {
        setImage(img)
    }
}

function handleScroll() {
    setImages()
}

eventBus.$on("mainScroll", debounce(handleScroll, 400))

export default {
    // 图片插入后方便获取图片的信息w、h、l、t
    inserted(el, binding) {
        const img = {
            dom: el,
            src: binding.value
        }
        imgs.push(img)
        setImage(img)
    },
    unbind(el) {
        imgs.filter(it => it.dom !== el)
    }
}
