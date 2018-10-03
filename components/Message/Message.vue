<template>
  <tr class="flex flex-col md:flex-row group hover:bg-grey-lighter hover:shadow cursor-pointer  border-b" @click.stop="goTo(message.id)">
    <td class="md:py-2 pr-3">
      <input v-model="message.isSelected" @click.stop="" type="checkbox" />
    </td>
    <td class="md:py-2 pr-6">
      {{ message.sender }}
    </td>
    <td class="md:py-2 pr-1 text-black" v-if="message.tags.length">
      <span v-if="message.tags.length" class="mr-1 px-1 bg-grey-light rounded-sm text-xs capitalize" :key="tag" v-for="tag in message.tags">
        {{tag}}
      </span>
    </td>
    <td class="md:py-2 pr-4 text-black font-medium">{{ message.subject }}</td>
    <td class="md:py-2 pr-2 flex-grow">{{ shortBody }}</td>
    <td class="md:py-2 pr-2 text-right">{{ new Date(message.date).toLocaleDateString() }}</td>
  </tr>
</template>

<script>
  import { strip } from '~/shared';
  import { mapActions } from 'vuex'

  export default {
    props: {
      message: {
        type: Object,
      }
    },
    computed: {
      shortBody() {
        return `${strip(this.message.body).substr(0, 50)}...`
      },
    },
    methods: {

      goTo(id) {
        this.$router.push({ path: `/${id}` })
      }
    }
  }
</script>
