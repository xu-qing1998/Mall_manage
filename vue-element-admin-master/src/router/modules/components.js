/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: '营销',
    icon: 'sms'
  },
  children: [{
    path: 'flash',
    component: () =>
                import ('@/views/sms/flash/index'),
    name: 'flash',
    meta: { title: '秒杀活动列表', icon: 'sms-flash' }
  },
  {
    path: 'session',
    component: () =>
                import ('@/views/sms/flash/sessionList'),
    name: 'session',
    meta: { title: '秒杀时间段列表' },
    hidden: true
  },
  {
    path: 'markdown',
    component: () =>
                import ('@/views/sms/markdown'),
    name: 'MarkdownDemo',
    meta: { title: '优惠券列表', icon: 'sms-coupon' }
  },
  {
    path: 'json-editor',
    component: () =>
                import ('@/views/sms/json-editor'),
    name: 'JsonEditorDemo',
    meta: { title: '品牌推荐', icon: 'product-brand' }
  },
  {
    path: 'avatar-upload',
    component: () =>
                import ('@/views/sms/avatar-upload'),
    name: 'AvatarUploadDemo',
    meta: { title: '新品推荐', icon: 'sms-new' }
  },
  {
    path: 'dropzone',
    component: () =>
                import ('@/views/sms/dropzone'),
    name: 'DropzoneDemo',
    meta: { title: '人气推荐', icon: 'sms-hot' }
  },
  {
    path: 'sticky',
    component: () =>
                import ('@/views/sms/sticky'),
    name: 'StickyDemo',
    meta: { title: '专题推荐', icon: 'sms-subject' }
  },
  {
    path: 'count-to',
    component: () =>
                import ('@/views/sms/count-to'),
    name: 'CountToDemo',
    meta: { title: '广告列表', icon: 'sms-ad' }
  }
  ]
}

export default componentsRouter
