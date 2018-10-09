<template>
  <table class="text-sm text-grey-darker table-fixed w-full">
    <thead v-if="messages.length">
      <tr class="flex border-b text-2xl">
        <th class="pr-3 text-left font-normal">
          <input v-model="allSelected" type="checkbox" />
        </th>
        <th class="msg__col text-left font-normal pr-2 flex-grow">
          <div :class="[ selectedMessages.length ? 'hidden' : 'inline-block' ]">
            <a class="mr-1" href="#" title="Refresh">
              <svgicon icon="refresh" />
            </a>
          </div>
          <div class="inline-block" v-show="selectedMessages.length">
            <a href="#" title="Archive selected">
              <svgicon icon="archive" />
            </a>
            <a href="#" title="Report spam">
              <svgicon icon="alert-octagon" />
            </a>
            <a @click="removeMessages" href="#" title="Delete">
              <svgicon icon="delete" />
            </a>
            <a href="#" title="Mark as read">
              <svgicon icon="email-open" />
            </a>
            <a href="#" title="Snooze">
              <svgicon icon="clock" />
            </a>
          </div>
          <a class="mr-1" href="#" title="More">
            <svgicon icon="dots-vertical" />
          </a>
        </th>
        <th class="msg__col text-left font-normal">
          <a href="#" title="Settings">
            <svgicon icon="settings" />
          </a>
        </th>
      </tr>
    </thead>
    <tbody v-if="messages.length">
      <Message v-for="message in messages" :key="message.id" :message="message" />
    </tbody>
    <tbody v-else>
      <tr>
        <td class="p-10">No Messages in Inbox</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import { init, strip } from '~/shared'
  import Message from '~/components/Message'

  export default {
    components: {
      Message
    },
    fetch: init,
    computed: {
      allSelected: {
        get() {
          return this.$store.getters.allSelected
        },
        set() {
          this.$store.dispatch('toggleAll', this.messages)
        }
      },
      ...mapState(['messages']),
      ...mapGetters(['selectedMessages'])
    },
    methods: {
      ...mapActions(['toggleAll', 'removeMessages'])
    }
  }
</script>
