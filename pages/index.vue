<template>
  <table>
    <tr class="flex flex-col md:flex-row" v-for="message in messages" :key="message.id">
      <td class="mr-4"><input type="checkbox" /></td>
      <td class="mr-4">
        {{message.sender}}
      </td>
      <td class="mr-4 flex-grow">
        <div class="md:inline">
          <span v-for="tag in message.tags" :key="tag">
            {{tag}}
          </span>
        </div>
        {{message.subject}}
      </td>
      <td class="mr-4">{{new Date(message.date).toLocaleDateString()}}</td>
    </tr>
  </table>
</template>

<script>
  export default {
    async asyncData({ app }) {
      let messages = await app.$axios.$get(`/api/messages`)
      return { messages: messages }
    }
  }
</script>
