<script setup>
import ClientNewForm from '@/views/pages/clients/ClientNewForm.vue'
import ClientShow from '@/views/pages/clients/ClientShow.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <!-- 👉 Multiple Column -->
        <VCard title="Nuevo usuario">
          <VCol
            cols="12"
            class="d-flex gap-4"
          >
            <VerticalNavLink
              :item="{
                title: 'CRM',
                href: 'new-client',
                badgeClass: 'bg-light-primary text-primary',
              }"
            />
          </VCol>
          <VCardText>
            <ClientShow />
            <ClientNewForm />
          </VCardText>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
