<template>
  <div class="messages">
    <table class="msgs text-sm text-grey-darker w-full">
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
        <Message v-for="message in messages" :key="message.id" :message="message" />
      </tbody>
    </table>
  </div>
</template>

<script>
  import Message from '~/components/Message'

  export default {
    components: {
      Message
    },
    data() {
      return {
        messages: this.$store.getters.getMessageByTag(this.$route.params.tag)
      }
    }
  }
</script>
