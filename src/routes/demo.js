/**
 * Created by wanghongxiang on 2018/4/27.
 */
export default [
    {
        path: '/',
        exact: true,
        component: () => import('../modules/demo/index')
    },{
        path: '/1',
        exact: true,
        component: () => import('../modules/demo1/index')
    },{
        path: '/2',
        exact: true,
        component: () => import('../modules/demo2/index')
    },{
        path: '/3',
        exact: true,
        component: () => import('../modules/demo3/index')
    },{
        path: '/4',
        exact: true,
        component: () => import('../modules/demo4/index')
    }
]

