<template>
  <tr class="flex flex-col md:flex-row group hover:bg-grey-lighter hover:shadow cursor-pointer  border-b">
    <td class="md:py-2 pr-3">
      <input v-model="message.isSelected" @click.stop="" type="checkbox" />
    </td>
    <td class="md:py-2 pr-6" @click.stop="goTo(message.id)">
      {{ message.sender }}
    </td>
    <td class="md:py-2 pr-1 text-black" v-if="message.tags.length" @click.stop="goTo(message.id)">
      <span v-if="message.tags.length" class="mr-1 px-1 bg-grey-light rounded-sm text-xs capitalize" :key="tag" v-for="tag in message.tags">
        {{tag}}
      </span>
    </td>
    <td class="md:py-2 pr-4 text-black font-medium" @click.stop="goTo(message.id)">{{ message.subject }}</td>
    <td class="md:py-2 pr-2 flex-grow" @click.stop="goTo(message.id)">{{ shortBody }}</td>
    <td class="md:py-2 pr-2 text-right" @click.stop="goTo(message.id)">{{ new Date(message.date).toLocaleDateString() }}</td>
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
