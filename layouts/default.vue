<template>
  <div>
    <main class="m-4 flex flex-col md:flex-row">
      <aside class="mr-6">
        <div>
          <nuxt-link v-for="(item, key) of items" :key="key" :to="item.to" exact>
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
  export default {

    data() {
      return {
        items: [
          { title: 'Inbox', to: { name: 'index' } },
        ]
      }
    }
  }
</script>

