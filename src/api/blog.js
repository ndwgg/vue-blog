import { get } from '@/utils/request'

/**
 * 获取博客分类
 * @returns 
 */
export async function getBlogCategories() {
    return get("/api/blogtype")
}

/**
 * 分页获取博客
 * @param {*} params 
 * @returns 
 */
export async function getBlog(params = {
    page: 1,
    limit: 20,
    categoryid: -1
}) {
    return get("/api/blog", params)
}
