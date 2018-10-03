<template>
  <table class="text-sm text-grey-darker table-fixed w-full">
    <tr v-for="message in messages" :key="message.id" class="group hover:bg-grey-lighter hover:shadow cursor-pointer flex border-b" @click.stop="goTo(message.id)">
      <td class="py-2 invisible group-hover:visible">
        <a class="mr-1" href="#" title="More">
          <svgicon icon="drag-vertical" />
        </a>
      </td>
      <td class="py-2 pr-3">
        <input @click.stop="" type="checkbox" />
      </td>
      <td class="py-2 pr-6">
        {{ message.sender }}
      </td>
      <td class="py-2 pr-1 text-black" v-if="message.tags.length">
        <span v-if="message.tags.length" class="mr-1 px-1 bg-grey-light rounded-sm text-xs capitalize" :key="tag" v-for="tag in message.tags">
          {{tag}}
        </span>
      </td>
      <td class="py-2 pr-4 text-black font-medium">{{ message.subject }}</td>
      <td class="py-2 pr-2 flex-grow">{{ shortBody }}</td>
      <td class="py-2 pr-2 text-right">{{ new Date(message.date).toLocaleDateString() }}</td>
    </tr>
  </table>
</template>

<script>
  export default {
    async asyncData({ app }) {
      let messages = await app.$axios.$get(`${process.env.baseURL}/api/messages`)
      return { messages: messages }
    },
    methods: {
      goTo(id) {
        this.$router.push({ path: `/${id}` })
      }
    }
  }
</script>
