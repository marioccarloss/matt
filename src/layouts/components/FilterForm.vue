<script setup>
const search = ref('')
</script>

<template>
  <VCol
    cols="12"
    class="px-4 pb-6"
  >
    <VForm @submit.prevent="() => {}">
      <VRow>
        <!-- 👉 Filter -->
        <VCol
          cols="12"
          md="4"
        >
          <VTextField
            id="search"
            v-model="search"
            label="Buscar"
            placeholder="Buscar por palabras clave"
            prepend-inner-icon="ri-search-line"
            persistent-placeholder
          />
        </VCol>
        <VCol
          cols="12"
          md="2"
          class="v-ml-auto"
        >
          <VSelect
            label="Ordenar por"
            placeholder="Ordenar por"
            :items="['Estado', 'Fecha de creación', 'Fecha de modificación']"
          />
        </VCol>
        <VCol
          cols="12"
          md="1"
        >
          <VBtn
            color="primary"
            class="mb-4 mt-1"
            size="large"
          >
            Export
          </VBtn>
        </VCol>
      </VRow>
    </VForm>
  </VCol>
</template>
