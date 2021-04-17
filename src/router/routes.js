import About from '@/views/About'
import Blog from '@/views/Blog'
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
        path: '/blog', component: Blog, name: "Blog"
    },
    {
        path: '/message', component: Message, name: "Message"
    },
    {
        path: '/project', component: Project, name: "Project"
    }
]
