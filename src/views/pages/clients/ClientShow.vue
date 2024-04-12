<script setup>
const clients = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    documentType: 'Passport',
    documentNumber: 'AB123456',
    address: '123 Main St',
    company: 'ABC Inc.',
    phone: '1234567890',
    email: 'john@example.com',
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Smith',
    documentType: 'Driver\'s License',
    documentNumber: 'CD789012',
    address: '456 Elm St',
    company: 'XYZ Corp.',
    phone: '9876543210',
    email: 'jane@example.com',
  },
  {
    id: 3,
    firstName: 'Alice',
    lastName: 'Wonderland',
    documentType: 'National ID',
    documentNumber: 'EF345678',
    address: '789 Oak St',
    company: 'Wonderland Ltd.',
    phone: '4567890123',
    email: 'alice@example.com',
  },
  {
    id: 4,
    firstName: 'Bob',
    lastName: 'Builder',
    documentType: 'Social Security',
    documentNumber: 'GH901234',
    address: '012 Pine St',
    company: 'Builder Co.',
    phone: '7890123456',
    email: 'bob@example.es',
  },

  // Add more client data as needed
]
</script>

<template>
  <div>
    <VRow>
      <VCol cols="12">
        <VCard title="Listado de clientes">
          <VCol
            cols="12"
            class="d-flex gap-4"
          >
            <VBtn to="new-client">
              Nuevo cliente
            </VBtn>
          </VCol>
          <VTable>
            <thead>
              <tr>
                <th class="text-uppercase">
                  ID
                </th>
                <th class="text-uppercase">
                  First Name
                </th>
                <th class="text-uppercase">
                  Last Name
                </th>
                <th class="text-uppercase">
                  Doc Type
                </th>
                <th class="text-uppercase">
                  Doc Number
                </th>
                <th class="text-uppercase">
                  Address
                </th>
                <th class="text-uppercase">
                  Company
                </th>
                <th class="text-uppercase">
                  Phone
                </th>
                <th class="text-uppercase">
                  Email
                </th>
                <th class="text-uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="client in clients"
                :key="client.id"
              >
                <td>
                  {{ client.id }}
                </td>
                <td>
                  {{ client.firstName }}
                </td>
                <td>
                  {{ client.lastName }}
                </td>
                <td>
                  {{ client.documentType }}
                </td>
                <td>
                  {{ client.documentNumber }}
                </td>
                <td>
                  {{ client.address }}
                </td>
                <td>
                  {{ client.company }}
                </td>
                <td>
                  {{ client.phone }}
                </td>
                <td>
                  {{ client.email }}
                </td>
                <td>
                  <VRow class="d-flex flex-nowrap gap-2">
                    <VBtn to="/edit-client/1">
                      Edit
                    </VBtn>
                    <VBtn color="error">
                      Delete
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
