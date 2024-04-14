<script setup>
const name = ref('')
const sku = ref('')
const unitTypeId = ref('')
const stockActually = ref('')
const brandId = ref('')
const statusId = ref('')

const items = ref([ 'product 1', 'product 2', 'product 3' ])
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard title="Editar Producto">
          <VCol
            cols="12"
            class="px-4"
          >
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- Nombre -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="name"
                    label="Nombre"
                    placeholder="Nombre del producto"
                  />
                </VCol>

                <!-- SKU -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="sku"
                    label="SKU"
                    placeholder="Código SKU del producto"
                  />
                </VCol>

                <!-- Tipo de Unidad -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <!-- Aquí deberías reemplazar items con tu lista de tipos de unidad -->
                  <VSelect
                    v-model="unitTypeId"
                    :items="items"
                    label="Tipo de Unidad"
                    placeholder="Selecciona el tipo de unidad"
                  />
                </VCol>

                <!-- Stock Actual -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="stockActually"
                    label="Stock Actual"
                    placeholder="Cantidad actual en stock"
                    type="number"
                  />
                </VCol>

                <!-- ID de Marca -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="brandId"
                    label="ID de Marca"
                    placeholder="ID de la marca del producto"
                    type="text"
                  />
                </VCol>

                <!-- ID de Estado -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="statusId"
                    label="ID de Estado"
                    placeholder="ID de estado del producto"
                    type="text"
                  />
                </VCol>

                <VCol
                  cols="12"
                  class="d-flex gap-4"
                >
                  <VBtn type="submit">
                    Guardar
                  </VBtn>

                  <VBtn
                    type="reset"
                    color="secondary"
                    variant="outlined"
                  >
                    Limpiar
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </VCol>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
