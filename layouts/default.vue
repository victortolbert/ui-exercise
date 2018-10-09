<template>
  <div>
    <nav class="shadow-md bg-grey-lightest text-white mb-8" role="navigation" aria-label="main navigation">
      <a class="inline-block text-red uppercase font-bold ml-4 py-4" href="/">
        <svgicon icon="logo-mark" />
        Mail
      </a>
    </nav>

    <main class="m-4 flex flex-col md:flex-row">
      <aside class="mr-6 w-full md:w-48">

        <a class="inline-block border border-grey-light text-black rounded-full shadow hover:shadow-md py-2 px-4 my-2 mb-4" href="#" title="Compose">
          <svgicon icon="plus" />
          Compose
        </a>

        <div class="-ml-2 text-xs">
          <nuxt-link v-for="(item, key) of items" :key="key" :to="item.to" exact class="nav-link flex items-center pr-4 hover:bg-grey-light rounded-r-full" :class="item.icon">
            <svgicon :icon="item.icon" width="24" height="24" /> {{ item.title }}
          </nuxt-link>
          <nuxt-link v-for="(value, key) in tags" :key="key" :to="`/tags/${key}`" class="nav-link flex items-center pr-4 hover:bg-grey-light rounded-r-full capitalize" :class="key">
            <svgicon icon="label" width="24" height="24" /> {{ key }}
          </nuxt-link>
        </div>
      </aside>

      <div class="flex-1">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
  import '@/components/Icons'
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        items: [
          { title: 'Inbox', to: { name: 'index' }, icon: 'inbox' }
        ]
      }
    },
    computed: {
      ...mapGetters([
        'tags'
      ]),
    }
  }
</script>

