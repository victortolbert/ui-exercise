<template>
  <table>
    <tr v-for="message in messages" :key="message.id">
      <td><input type="checkbox" /></td>
      <td>{{message.sender}}</td>
      <td>
        <span v-for="tag in message.tags" :key="tag">
          {{tag}}
        </span>
      </td>
      <td>{{message.subject}}</td>
      <td>{{new Date(message.date).toLocaleDateString()}}</td>
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


