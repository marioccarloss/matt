<script setup>
const firstName = ref('')
const lastName = ref('')
const docType = ref('')
const docNumber = ref('')
const address = ref('')
const phone = ref('')
const company = ref('')
const email = ref('')
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard title="Nuevo cliente">
          <VCol
            cols="12"
            class="px-4"
          >
            <VForm @submit.prevent="() => {}">
              <VRow>
                <!-- 👉 First Name -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="firstName"
                    label="Nombre"
                    placeholder="Nombre"
                  />
                </VCol>

                <!-- 👉 Last Name -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="lastName"
                    label="Apellido"
                    placeholder="Apellido"
                  />
                </VCol>

                <!-- DNI -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VSelect
                    v-model="docType"
                    :items="items"
                    label="Tipo documento"
                    placeholder="Tipo de documento"
                  />
                </VCol>

                <!-- DNI Number -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="docNumber"
                    label="Número documento"
                    placeholder="Número de documento"
                  />
                </VCol>

                <!-- Company -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="company"
                    label="Compañía"
                    placeholder="Compañía"
                  />
                </VCol>

                <!-- 👉 Email -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="email"
                    label="Email"
                    placeholder="johndoe@email.com"
                    type="email"
                  />
                </VCol>

                <!-- Address -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="address"
                    label="Dirección"
                    placeholder="Dirección"
                  />
                </VCol>

                <!-- Phone -->
                <VCol
                  cols="12"
                  md="6"
                >
                  <VTextField
                    v-model="phone"
                    label="Teléfono"
                    placeholder="Teléfono"
                    type="phone"
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
