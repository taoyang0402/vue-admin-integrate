/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'
const homeRouter = {
  path: '/home',
  component: Layout,
  redirect: '/home',
  name: 'Home',
  meta: {
    title: 'Home',
    icon: 'table'
  },
  children: [
    {
      path: 'homeindex',
      component: () => import('@/views/home/index'),
      name: 'homeindex',
      meta: { title: 'homeindex' }
    }
  ]
}

export default homeRouter
