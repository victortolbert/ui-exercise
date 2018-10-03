<template>
  <div>
    <nuxt-link to="/">
      <svgicon icon="arrow" class="svg-left" />
    </nuxt-link>
    <h1>{{message.subject}}</h1>
    <span v-for="tag in message.tags" :key="tag" class="bg-grey-light rounded-sm text-xs mr-1 px-1 capitalize">{{ tag }}</span>
    <div v-html="message.body" />
  </div>
</template>

<script>
  export default {
    async asyncData({ app, route }) {
      const message = await app.$axios.$get(`${process.env.baseURL}/api/messages/${route.params.id}`)
      return { message: message }
    }
  }
</script>
