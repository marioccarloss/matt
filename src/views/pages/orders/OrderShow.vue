<script setup>
import FilterForm from '@/layouts/components/FilterForm.vue'

const select = ref('Acciones')

const products = [
  {
    id: 1,
    name: 'Product A',
    sku: 'SKU123',
    unitTypeId: 1,
    stockActually: 50,
    brandId: 1,
    statusId: 1,
  },
  {
    id: 2,
    name: 'Product B',
    sku: 'SKU456',
    unitTypeId: 2,
    stockActually: 100,
    brandId: 2,
    statusId: 1,
  },
  {
    id: 3,
    name: 'Product C',
    sku: 'SKU789',
    unitTypeId: 3,
    stockActually: 200,
    brandId: 3,
    statusId: 1,
  },
  {
    id: 4,
    name: 'Product D',
    sku: 'SKU012',
    unitTypeId: 4,
    stockActually: 300,
    brandId: 4,
    statusId: 1,
  },

  // Agrega más datos de productos según sea necesario
]
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard title="Órdenes">
          <VCol
            cols="12"
            class="v-cta-group d-flex gap-4"
          >
            <VBtn to="new-product">
              Nueva orden
            </VBtn>
          </VCol>
          <FilterForm />
          <VTable>
            <thead>
              <tr>
                <th class="text-uppercase">
                  <VSelect
                    v-model="select"
                    :items="['Acciones', 'Eliminar', 'Exportar', 'Imprimir', 'Enviar por correo electrónico', 'Mover a la papelera', 'Restaurar', 'Restaurar todo', 'Eliminar permanentemente']"
                  />
                </th>
                <th
                  class="
                    text-uppercase"
                >
                  ID
                </th>
                <th class="text-uppercase">
                  Nombre
                </th>
                <th class="text-uppercase">
                  SKU
                </th>
                <th class="text-uppercase">
                  Tipo de unidad
                </th>
                <th class="text-uppercase">
                  Stock actual
                </th>
                <th class="text-uppercase">
                  ID de marca
                </th>
                <th class="text-uppercase">
                  ID de estado
                </th>
                <th class="text-uppercase">
                  Acciones
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="product in products"
                :key="product.id"
              >
                <td>
                  <VCheckbox />
                </td>
                <td>
                  {{ product.id }}
                </td>
                <td>
                  {{ product.name }}
                </td>
                <td>
                  {{ product.sku }}
                </td>
                <td>
                  {{ product.unitTypeId }}
                </td>
                <td>
                  {{ product.stockActually }}
                </td>
                <td>
                  {{ product.brandId }}
                </td>
                <td>
                  {{ product.statusId }}
                </td>
                <td>
                  <VRow class="d-flex flex-nowrap gap-2">
                    <VBtn
                      to="edit-product/1"
                      size="small"
                    >
                      Editar
                    </VBtn>
                    <VBtn
                      color="error"
                      size="small"
                    >
                      Eliminar
                    </VBtn>
                  </VRow>
                </td>
              </tr>
            </tbody>
          </VTable>
          <VPagination />
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
