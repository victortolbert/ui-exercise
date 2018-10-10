<template>
  <table class="table-fixed w-full">
    <thead>
      <tr class="flex border-b text-grey-darker text-2xl">
        <th class="msg__col text-left font-normal pr-2 flex-grow">
          <div class="inline-block">
            <nuxt-link to="/">
              <svgicon icon="arrow" class="svg-left" />
            </nuxt-link>
            <a href="#" title="Archive selected">
              <svgicon icon="archive" />
            </a>
            <a href="#" title="Report spam">
              <svgicon icon="alert-octagon" />
            </a>
            <a href="#" title="Delete">
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
    <tbody>
      <tr>
        <td class="p-6">
          <div>
            <h1 class="font-light flex items-center mb-4">
              <span class="pr-2">{{message.subject}}</span>
              <span v-for="tag in message.tags" :key="tag" class="bg-grey-light rounded text-xs mr-1 p-1 capitalize" :class="tag">
                {{ tag }}
              </span>
            </h1>
            <span class="text-grey-darkest">{{message.sender}}</span>
            <div class="max-w-lg" v-html="message.body" />
          </div>

        </td>
      </tr>
    </tbody>
  </table>
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
