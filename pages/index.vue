<template>
  <table class="text-sm text-grey-darker table-fixed w-full">
    <thead>
      <tr class="flex border-b text-2xl">
        <th class="pr-3 text-left font-normal">
          <input @click.stop="$store.commit('TOGGLE_ALL', messages)" type="checkbox" />
        </th>
        <th class="text-left font-normal pr-2 flex-grow">
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="message in messages" :key="message.id" class="flex flex-col md:flex-row group hover:bg-grey-lighter hover:shadow cursor-pointer  border-b" @click.stop="goTo(message.id)">
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
        <td class="msg__col msg__col--body pr-2 flex-grow">{{ shortBody }}</td>
        <td class="md:py-2 pr-2 text-right">{{ new Date(message.date).toLocaleDateString() }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import { mapState } from 'vuex'
  import { init, strip } from '~/shared'

  export default {
    fetch: init,
    computed: {
      ...mapState({
        messages: state => state.messages
      })
    },
    methods: {
      goTo(id) {
        this.$router.push({ path: `/${id}` })
      }
    }
  }
</script>
