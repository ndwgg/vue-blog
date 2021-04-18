import { get } from '@/utils/request'

export function getBanners() {
    return get("/api/banner")
}