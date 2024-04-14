<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavGroup from '@layouts/components/VerticalNavGroup.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!-- 👉 Dashboards -->
  <VerticalNavGroup
    :item="{
      title: 'Clientes',
      icon: 'ri-group-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Ver clientes',
        icon: 'ri-team-line',
        to: '/show-clients',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Nuevo cliente',
        icon: 'ri-sticky-note-add-line',
        to: '/new-client',
      }"
    />
  </VerticalNavGroup>
  <VerticalNavGroup
    :item="{
      title: 'Productos',
      icon: 'ri-file-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Ver productos',
        icon: 'ri-eye-line',
        to: '/show-products',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Nuevo producto',
        icon: 'ri-sticky-note-add-line',
        to: '/new-product',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavGroup
    :item="{
      title: 'Ordenes',
      icon: 'ri-shopping-cart-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Ver ordenes',
        icon: 'ri-eye-line',
        to: '/show-orders',
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Nueva orden',
        icon: 'ri-sticky-note-add-line',
        to: '/new-order',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavGroup
    :item="{
      title: 'Dashboards',
      badgeContent: '5',
      badgeClass: 'bg-error',
      icon: 'ri-home-smile-line',
    }"
  >
    <VerticalNavLink
      :item="{
        title: 'Analytics',
        to: '/dashboard',
      }"
    />
  </VerticalNavGroup>

  <VerticalNavLink
    :item="{
      title: 'Form Layouts',
      icon: 'ri-layout-4-line',
      to: '/form-layouts',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Cuenta',
      icon: 'ri-user-settings-line',
      to: '/account-settings',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Login',
      icon: 'ri-login-box-line',
      to: '/login',
    }"
  />
  <VerticalNavLink
    :item="{
      title: 'Register',
      icon: 'ri-user-add-line',
      to: '/register',
    }"
  />
</template>
