import About from '@/views/About'
import Blog from '@/views/Blog'
import BlogDetail from '@/views/Blog/Detail'
import Message from '@/views/Message'
import Project from '@/views/Project'

export default [
    {
        path: '/', component: () => import("@/views/Home"), name: "Home",
        meta: {
            title: "首页"
        }
    },
    {
        path: '/about', component: About, name: "About",
        meta: {
            title: "关于我"
        }
    },
    {
        path: '/article', component: Blog, name: "Blog",
        meta: {
            title: "文章"
        }
    },
    {
        path: '/article/cate/:categoryId', component: Blog, name: "CategoryBlog",
    },
    {
        path: '/article/:id', component: BlogDetail, name: "BlogDetail",
      
    },
    {
        path: '/message', component: Message, name: "Message",
        meta: {
            title: "留言板"
        }
    },
    {
        path: '/project', component: Project, name: "Project",
        meta: {
            title: "项目效果"
        }
    }
]
