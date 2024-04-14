export const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: () => import('@/layouts/default.vue'),
    children: [
      {
        path: 'dashboard',
        component: () => import('@/pages/dashboard.vue'),
      },
      {
        path: 'account-settings',
        component: () => import('@/pages/account-settings.vue'),
      },
      {
        path: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue'),
      },
      {
        path: 'show-clients',
        component: () => import('@/views/pages/clients/ClientShow.vue'),
      },
      {
        path: 'new-client',
        component: () => import('@/views/pages/clients/ClientNewForm.vue'),
      },
      {
        path: 'edit-client/:id',
        component: () => import('@/views/pages/clients/ClientEditForm.vue'),
      },
      {
        path: 'show-products',
        component: () => import('@/views/pages/products/ProductShow.vue'),
      },
      {
        path: 'new-product',
        component: () => import('@/views/pages/products/ProductNewForm.vue'),
      },
      {
        path: 'edit-product/:id',
        component: () => import('@/views/pages/products/ProductEditForm.vue'),
      },
      {
        path: 'show-orders',
        component: () => import('@/views/pages/orders/OrderShow.vue'),
      },
      {
        path: 'new-order',
        component: () => import('@/views/pages/orders/OrderNewForm.vue'),
      },
      {
        path: 'form-layouts',
        component: () => import('@/pages/form-layouts.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/blank.vue'),
    children: [
      {
        path: 'login',
        component: () => import('@/pages/login.vue'),
      },
      {
        path: 'register',
        component: () => import('@/pages/register.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/[...error].vue'),
      },
    ],
  },
]
