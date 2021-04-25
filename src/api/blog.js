import { get, post } from '@/utils/request'

/**
 * 获取博客分类
 * @returns 
 */
export function getBlogCategories() {
    return get("/api/blogtype")
}

/**
 * 分页获取博客
 * @param {*} params 
 * @returns 
 */
export function getBlogs(params = {
    page: 1,
    limit: 20,
    categoryid: -1
}) {
    return get("/api/blog", params)
}

/**
 * 获取单个博客
 * @param {*} id 
 */
export function getBlog(id) {
    return get(`/api/blog/${id}`)
}

/**
 * 提交评论
 * @param {*} commonBody 
 */
export function postComment(commonBody) {
    return post(`/api/comment`, commonBody)
}

/**
 * 分页获取评论
 * @param {*} params 
 */
export function getComment(params = {
    page: 1,
    limit: 20,
    blogid: null
}) {
    return get("/api/comment", params)
}
