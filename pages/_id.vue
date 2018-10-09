<template>
  <div>
    <nuxt-link to="/">
      <svgicon icon="arrow" class="svg-left" />
    </nuxt-link>
    <h1 class="font-light">{{message.subject}}</h1>
    <span v-for="tag in message.tags" :key="tag" class="bg-grey-light rounded-sm text-xs mr-1 px-1 capitalize">
      {{ tag }}
    </span>
    <div v-html="message.body" />
  </div>
</template>

<script>
  import { init } from '~/shared'

  export default {
    fetch: init,
    data() {
      return {
        message: this.$store.getters.getMessageById(this.$route.params.id)
      }
    }
  }
</script>
