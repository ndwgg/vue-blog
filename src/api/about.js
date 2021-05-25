import { get } from '@/utils/request'

/**
 * 获取关于我
 * @returns 
 */
export async function getAbout() {
    return await get("/api/about");
}
