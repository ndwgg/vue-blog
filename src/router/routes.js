import About from '@/views/About'
import Blog from '@/views/Blog'
import BlogDetail from '@/views/Blog/Detail'
import Message from '@/views/Message'
import Project from '@/views/Project'

export default [
    {
        path: '/', component: () => import("@/views/Home"), name: "Home"
    },
    {
        path: '/about', component: About, name: "About"
    },
    {
        path: '/article', component: Blog, name: "Blog"
    },
    {
        path: '/article/cate/:categoryId', component: Blog, name: "CategoryBlog"
    },
    {
        path: '/article/:id', component: BlogDetail, name: "BlogDetail"
    },
    {
        path: '/message', component: Message, name: "Message"
    },
    {
        path: '/project', component: Project, name: "Project"
    }
]
