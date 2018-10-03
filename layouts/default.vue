<template>
  <div>
    <nav class="shadow-md bg-grey-lightest text-white mb-8" role="navigation" aria-label="main navigation">
      <a class="inline-block text-red uppercase font-bold ml-4 py-4" href="/">
        <svgicon icon="logo-mark" />
        Mail
      </a>
    </nav>

    <main class="m-4 flex flex-col md:flex-row">
      <aside class="mr-6">
        <div>
          <nuxt-link v-for="(item, key) of items" :key="key" :to="item.to" exact>
            <svgicon :icon="item.icon" />
            {{ item.title }}
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

  export default {
    data() {
      return {
        items: [
          { title: 'Inbox', to: { name: 'index' }, icon: 'inbox' }
        ]
      }
    }
  }
</script>

