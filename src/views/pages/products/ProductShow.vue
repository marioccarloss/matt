<script setup>
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

  // Agrega más datos de productos según sea necesario
]
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard title="Listado de Productos">
          <VCol
            cols="12"
            class="d-flex gap-4"
          >
            <VBtn to="new-product">
              Nuevo producto
            </VBtn>
          </VCol>
          <VTable>
            <thead>
              <tr>
                <th class="text-uppercase">
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
                    <VBtn to="edit-product">
                      Editar
                    </VBtn>
                    <VBtn color="error">
                      Eliminar
                    </VBtn>
                  </VRow>
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
