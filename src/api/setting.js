import { get } from '@/utils/request'

export function getSetting() {
    return get("/api/setting")
}
