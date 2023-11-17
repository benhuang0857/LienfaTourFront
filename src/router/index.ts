import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { Layout, getParentLayout } from '@/utils/routerHelper'
import { useI18n } from '@/hooks/web/useI18n'

const { t } = useI18n()

export const constantRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/redirect',
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'Redirect',
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'Redirect',
        component: () => import('@/views/Redirect/Redirect.vue'),
        meta: {}
      }
    ],
    meta: {
      hidden: true,
      noTagsView: true
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
    name: 'Login',
    meta: {
      hidden: true,
      title: t('router.login'),
      noTagsView: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

export const asyncRouterMap: AppRouteRecordRaw[] = [
  {
    path: '/basic-info',
    component: Layout,
    name: 'BasicInfo',
    meta: {
      title: t('A.基本資料'),
      icon: 'bx:bxs-component',
      alwaysShow: true
    },
    children: [
      {
        path: 'company-employee',
        component: getParentLayout(),
        name: 'CompanyEmployee',
        meta: {
          title: t('B.公司部門員工管理'),
          alwaysShow: true
        },
        children: [
          {
            path: 'headquarter',
            component: () => import('@/views/BasicInfo/CompanyEmployee/Headquarter/AllPage.vue'),
            name: 'Headquarter',
            meta: {
              title: t('A.總公司管理')
            }
          },
          {
            path: 'headquarter-add',
            component: () => import('@/views/BasicInfo/CompanyEmployee/Headquarter/AddPage.vue'),
            name: 'HeadquarterAdd',
            meta: {
              title: t('新增'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/basic-info/company-employee/headquarter-add'
            }
          },
          {
            path: 'headquarter-edit',
            component: () => import('@/views/BasicInfo/CompanyEmployee/Headquarter/EditPage.vue'),
            name: 'HeadquarterEdit',
            meta: {
              title: t('編輯'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/basic-info/company-employee/headquarter-edit'
            }
          },
          {
            path: 'branchoffice',
            component: () => import('@/views/BasicInfo/CompanyEmployee/BranchOffice/AllPage.vue'),
            name: 'BranchOffice',
            meta: {
              title: t('B.分公司管理')
            }
          },
          {
            path: 'branchoffice-add',
            component: () => import('@/views/BasicInfo/CompanyEmployee/BranchOffice/AddPage.vue'),
            name: 'BranchOfficeAdd',
            meta: {
              title: t('新增'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/basic-info/company-employee/branchoffice-add'
            }
          },
          {
            path: 'branchoffice-edit',
            component: () => import('@/views/BasicInfo/CompanyEmployee/BranchOffice/EditPage.vue'),
            name: 'BranchOfficeEdit',
            meta: {
              title: t('編輯'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/basic-info/company-employee/branchoffice-edit'
            }
          }
        ]
      },
      {
        path: 'tour-info',
        component: getParentLayout(),
        name: 'TourInfo',
        meta: {
          title: t('C.旅遊資訊管理'),
          alwaysShow: true
        },
        children: [
          {
            path: 'continent',
            component: () => import('@/views/TourInfo/Continent/AllPage.vue'),
            name: 'continent',
            meta: {
              title: t('A.洲別管理')
            }
          },
          {
            path: 'continent-add',
            component: () => import('@/views/TourInfo/Continent/AddPage.vue'),
            name: 'ContinentAdd',
            meta: {
              title: t('新增'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/basic-info/tour-info/continent-add'
            }
          },
          {
            path: 'continent-edit',
            component: () => import('@/views/TourInfo/Continent/EditPage.vue'),
            name: 'ContinentEdit',
            meta: {
              title: t('編輯'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/tourinfo/continent-edit'
            }
          },
          {
            path: 'country',
            component: () => import('@/views/TourInfo/Country/AllPage.vue'),
            name: 'country',
            meta: {
              title: t('B.國家管理')
            }
          },
          {
            path: 'country-add',
            component: () => import('@/views/TourInfo/Country/AddPage.vue'),
            name: 'CountryAdd',
            meta: {
              title: t('新增'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/basic-info/tour-info/country-add'
            }
          },
          {
            path: 'country-edit',
            component: () => import('@/views/TourInfo/Country/EditPage.vue'),
            name: 'CountryEdit',
            meta: {
              title: t('編輯'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/tourinfo/country-edit'
            }
          },
          {
            path: 'city',
            component: () => import('@/views/TourInfo/City/AllPage.vue'),
            name: 'city',
            meta: {
              title: t('C.城市管理')
            }
          },
          {
            path: 'city-add',
            component: () => import('@/views/TourInfo/City/AddPage.vue'),
            name: 'CityAdd',
            meta: {
              title: t('新增'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/basic-info/tour-info/city-add'
            }
          },
          {
            path: 'city-edit',
            component: () => import('@/views/TourInfo/City/EditPage.vue'),
            name: 'CityEdit',
            meta: {
              title: t('編輯'),
              noTagsView: true,
              noCache: true,
              hidden: true,
              canTo: true,
              activeMenu: '/tourinfo/city-edit'
            }
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: constantRouterMap as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export const resetRouter = (): void => {
  const resetWhiteNameList = ['Redirect', 'Login', 'NoFind', 'Root']
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !resetWhiteNameList.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
