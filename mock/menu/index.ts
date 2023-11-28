import config from '@/config/axios/config'
import { MockMethod } from 'vite-plugin-mock'
// import Mock from 'mockjs'

const { code } = config

const timeout = 1000

export default [
  {
    url: '/menu/list',
    method: 'get',
    timeout,
    response: () => {
      return {
        code: code,
        data: {
          list: [
            {
              path: '/website-setting',
              component: '#',
              name: 'Website-Setting',
              meta: {
                title: 'F.網站管理',
                icon: 'bx:bxs-component',
                alwaysShow: true
              },
              children: [
                {
                  path: 'menu',
                  component: 'views/Authorization/Menu/Menu',
                  name: 'Menu',
                  meta: {
                    title: 'A.菜單管理'
                  }
                }
              ]
            },
            {
              path: '/basic-info',
              component: '#',
              name: 'BasicInfo',
              meta: {
                title: 'A.基本資料',
                icon: 'bx:bxs-component',
                alwaysShow: true
              },
              children: [
                {
                  path: 'company-employee',
                  component: '##',
                  name: 'CompanyEmployee',
                  meta: {
                    title: 'B.公司部門員工管理',
                    alwaysShow: true
                  },
                  children: [
                    {
                      path: 'headquarter',
                      component: 'views/BasicInfo/CompanyEmployee/Headquarter/AllPage',
                      name: 'Headquarter',
                      meta: {
                        title: 'A.總公司管理'
                      }
                    },
                    {
                      path: 'headquarter-add',
                      component: 'views/BasicInfo/CompanyEmployee/Headquarter/AddPage',
                      name: 'HeadquarterAdd',
                      meta: {
                        title: '新增',
                        noTagsView: true,
                        noCache: true,
                        hidden: true,
                        canTo: true,
                        activeMenu: '/basic-info/company-employee/headquarter-add'
                      }
                    },
                    {
                      path: 'headquarter-edit',
                      component: () => 'views/BasicInfo/CompanyEmployee/Headquarter/EditPage',
                      name: 'HeadquarterEdit',
                      meta: {
                        title: '編輯',
                        noTagsView: true,
                        noCache: true,
                        hidden: true,
                        canTo: true,
                        activeMenu: '/basic-info/company-employee/headquarter-edit'
                      }
                    },
                    {
                      path: 'branchoffice',
                      component: 'views/BasicInfo/CompanyEmployee/BranchOffice/AllPage',
                      name: 'BranchOffice',
                      meta: {
                        title: 'B.分公司管理'
                      }
                    },
                    {
                      path: 'branchoffice-add',
                      component: 'views/BasicInfo/CompanyEmployee/BranchOffice/AddPage',
                      name: 'BranchOfficeAdd',
                      meta: {
                        title: '新增',
                        noTagsView: true,
                        noCache: true,
                        hidden: true,
                        canTo: true,
                        activeMenu: '/basic-info/company-employee/branchoffice-add'
                      }
                    },
                    {
                      path: 'branchoffice-edit',
                      component: 'views/BasicInfo/CompanyEmployee/BranchOffice/EditPage',
                      name: 'BranchOfficeEdit',
                      meta: {
                        title: '編輯',
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
                  component: '##',
                  name: 'TourInfo',
                  meta: {
                    title: 'C.旅遊資訊管理',
                    alwaysShow: true
                  },
                  children: [
                    {
                      path: 'continent',
                      component: 'views/TourInfo/Continent/AllPage',
                      name: 'continent',
                      meta: {
                        title: 'A.洲別管理'
                      }
                    },
                    {
                      path: 'continent-add',
                      component: 'views/TourInfo/Continent/AddPage',
                      name: 'ContinentAdd',
                      meta: {
                        title: '新增',
                        noTagsView: true,
                        noCache: true,
                        hidden: true,
                        canTo: true,
                        activeMenu: '/basic-info/tour-info/continent-add'
                      }
                    },
                    {
                      path: 'continent-edit',
                      component: 'views/TourInfo/Continent/EditPage',
                      name: 'ContinentEdit',
                      meta: {
                        title: '編輯',
                        noTagsView: true,
                        noCache: true,
                        hidden: true,
                        canTo: true,
                        activeMenu: '/tourinfo/continent-edit'
                      }
                    },
                    {
                      path: 'country',
                      component: 'views/TourInfo/Country/AllPage',
                      name: 'country',
                      meta: {
                        title: 'B.國家管理'
                      }
                    },
                    {
                      path: 'country-add',
                      component: 'views/TourInfo/Country/AddPage',
                      name: 'CountryAdd',
                      meta: {
                        title: '新增',
                        noTagsView: true,
                        noCache: true,
                        hidden: true,
                        canTo: true,
                        activeMenu: '/basic-info/tour-info/country-add'
                      }
                    },
                    {
                      path: 'country-edit',
                      component: 'views/TourInfo/Country/EditPage',
                      name: 'CountryEdit',
                      meta: {
                        title: '編輯',
                        noTagsView: true,
                        noCache: true,
                        hidden: true,
                        canTo: true,
                        activeMenu: '/tourinfo/country-edit'
                      }
                    },
                    {
                      path: 'city',
                      component: 'views/TourInfo/City/AllPage',
                      name: 'city',
                      meta: {
                        title: 'C.城市管理'
                      }
                    },
                    {
                      path: 'city-add',
                      component: 'views/TourInfo/City/AddPage',
                      name: 'CityAdd',
                      meta: {
                        title: '新增',
                        noTagsView: true,
                        noCache: true,
                        hidden: true,
                        canTo: true,
                        activeMenu: '/basic-info/tour-info/city-add'
                      }
                    },
                    {
                      path: 'city-edit',
                      component: 'views/TourInfo/City/EditPage',
                      name: 'CityEdit',
                      meta: {
                        title: '編輯',
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
        }
      }
    }
  }
] as MockMethod[]

// {
//   path: '/basic-info',
//   component: Layout,
//   name: 'BasicInfo',
//   meta: {
//     title: t('A.基本資料'),
//     icon: 'bx:bxs-component',
//     alwaysShow: true
//   },
//   children: [
//     {
//       path: 'company-employee',
//       component: getParentLayout(),
//       name: 'CompanyEmployee',
//       meta: {
//         title: t('B.公司部門員工管理'),
//         alwaysShow: true
//       },
//       children: [
//         {
//           path: 'headquarter',
//           component: () => import('@/views/BasicInfo/CompanyEmployee/Headquarter/AllPage.vue'),
//           name: 'Headquarter',
//           meta: {
//             title: t('A.總公司管理')
//           }
//         },
//         {
//           path: 'headquarter-add',
//           component: () => import('@/views/BasicInfo/CompanyEmployee/Headquarter/AddPage.vue'),
//           name: 'HeadquarterAdd',
//           meta: {
//             title: t('新增'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/basic-info/company-employee/headquarter-add'
//           }
//         },
//         {
//           path: 'headquarter-edit',
//           component: () => import('@/views/BasicInfo/CompanyEmployee/Headquarter/EditPage.vue'),
//           name: 'HeadquarterEdit',
//           meta: {
//             title: t('編輯'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/basic-info/company-employee/headquarter-edit'
//           }
//         },
//         {
//           path: 'branchoffice',
//           component: () => import('@/views/BasicInfo/CompanyEmployee/BranchOffice/AllPage.vue'),
//           name: 'BranchOffice',
//           meta: {
//             title: t('B.分公司管理')
//           }
//         },
//         {
//           path: 'branchoffice-add',
//           component: () => import('@/views/BasicInfo/CompanyEmployee/BranchOffice/AddPage.vue'),
//           name: 'BranchOfficeAdd',
//           meta: {
//             title: t('新增'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/basic-info/company-employee/branchoffice-add'
//           }
//         },
//         {
//           path: 'branchoffice-edit',
//           component: () => import('@/views/BasicInfo/CompanyEmployee/BranchOffice/EditPage.vue'),
//           name: 'BranchOfficeEdit',
//           meta: {
//             title: t('編輯'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/basic-info/company-employee/branchoffice-edit'
//           }
//         }
//       ]
//     },
//     {
//       path: 'tour-info',
//       component: getParentLayout(),
//       name: 'TourInfo',
//       meta: {
//         title: t('C.旅遊資訊管理'),
//         alwaysShow: true
//       },
//       children: [
//         {
//           path: 'continent',
//           component: () => import('@/views/TourInfo/Continent/AllPage.vue'),
//           name: 'continent',
//           meta: {
//             title: t('A.洲別管理')
//           }
//         },
//         {
//           path: 'continent-add',
//           component: () => import('@/views/TourInfo/Continent/AddPage.vue'),
//           name: 'ContinentAdd',
//           meta: {
//             title: t('新增'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/basic-info/tour-info/continent-add'
//           }
//         },
//         {
//           path: 'continent-edit',
//           component: () => import('@/views/TourInfo/Continent/EditPage.vue'),
//           name: 'ContinentEdit',
//           meta: {
//             title: t('編輯'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/tourinfo/continent-edit'
//           }
//         },
//         {
//           path: 'country',
//           component: () => import('@/views/TourInfo/Country/AllPage.vue'),
//           name: 'country',
//           meta: {
//             title: t('B.國家管理')
//           }
//         },
//         {
//           path: 'country-add',
//           component: () => import('@/views/TourInfo/Country/AddPage.vue'),
//           name: 'CountryAdd',
//           meta: {
//             title: t('新增'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/basic-info/tour-info/country-add'
//           }
//         },
//         {
//           path: 'country-edit',
//           component: () => import('@/views/TourInfo/Country/EditPage.vue'),
//           name: 'CountryEdit',
//           meta: {
//             title: t('編輯'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/tourinfo/country-edit'
//           }
//         },
//         {
//           path: 'city',
//           component: () => import('@/views/TourInfo/City/AllPage.vue'),
//           name: 'city',
//           meta: {
//             title: t('C.城市管理')
//           }
//         },
//         {
//           path: 'city-add',
//           component: () => import('@/views/TourInfo/City/AddPage.vue'),
//           name: 'CityAdd',
//           meta: {
//             title: t('新增'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/basic-info/tour-info/city-add'
//           }
//         },
//         {
//           path: 'city-edit',
//           component: () => import('@/views/TourInfo/City/EditPage.vue'),
//           name: 'CityEdit',
//           meta: {
//             title: t('編輯'),
//             noTagsView: true,
//             noCache: true,
//             hidden: true,
//             canTo: true,
//             activeMenu: '/tourinfo/city-edit'
//           }
//         }
//       ]
//     }
//   ]
// }
