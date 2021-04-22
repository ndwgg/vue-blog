import loadingImg from '@/assets/loading.svg';
import styles from './index.module.less'

function createImage() {
    const image = document.createElement("img")
    image.dataset.role = 'loading'
    image.src = loadingImg;
    image.className = styles.loading
    return image
}

// 得到loading
function getLoaingImage(el) {
    return el.querySelector("img[data-role=loading]")
}

export default function (el, binding) {
    const currentImage = getLoaingImage(el)
    if (binding.value) {
        if (!currentImage) {
            // 创建
            const img = createImage()
            el.appendChild(img)
        }
    } else {
        // 移除
        if (currentImage) {
            currentImage.remove()
        }
    }
}
