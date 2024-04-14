<script setup>
const nameOrder = ref('')
const dateOrder = ref('')
const clientOrder = ref('')
const productsOrder = ref('')
const quantityOrder = ref('')
const totalOrder = ref('')
const statusOrder = ref('')
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard title="Nueva orden">
          <div
            cols="12"
            class="px-4"
          >
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- 👉 Name Order -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="nameOrder"
                    label="Nombre"
                    placeholder="Nombre"
                  />
                </VCol>

                <!-- 👉 Date Order -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="dateOrder"
                    label="Fecha"
                    placeholder="Fecha"
                  />
                </VCol>

                <!-- 👉 Client Order -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="clientOrder"
                    :items="['items']"
                    label="Cliente"
                    placeholder="Cliente"
                  />
                </VCol>

                <!-- 👉 Products Order -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="productsOrder"
                    :items="['items']"
                    label="Productos"
                    placeholder="Productos"
                  />
                </VCol>

                <!-- 👉 Quantity Order -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="quantityOrder"
                    label="Cantidad"
                    placeholder="Cantidad"
                  />
                </VCol>

                <!-- 👉 Total Order -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="totalOrder"
                    label="Total"
                    placeholder="Total"
                  />
                </VCol>

                <!-- 👉 Status Order -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="statusOrder"
                    :items="['items']"
                    label="Estado"
                    placeholder="Estado"
                  />
                </VCol>

                <!-- 👉 Submit Button -->
                <VCol
                  cols="12"
                  class="d-flex justify-content-end"
                >
                  <VBtn
                    type="submit"
                    color="primary"
                  >
                    Guardar
                  </VBtn>
                </VCol>
              </VRow>
            </VForm>
          </div>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>
