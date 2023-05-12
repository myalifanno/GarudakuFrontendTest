<script>
import { mapActions, mapWritableState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  computed: {
    ...mapWritableState(useCounterStore, ['users', 'userPick'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchUsers'])
  },
  created() {
    this.fetchUsers()
  },
}
</script>

<template>
  <main>
    <RouterLink class="nav-link active link" aria-current="page" href="#" :to="'/'"><b>&#171; Home</b></RouterLink>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No.</th>
          <th>Image</th>
          <th>Headline</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, index) in userPick" :key="index" :el="el" :index="index">
            <td>{{ index + 1 }}</td>
            <td>
                <img :src="el.urlToImage" alt="image" style="height: 300px; width: auto;">
            </td>
            <td>
                <b>
                    {{ new Date(el.publishedAt).toLocaleString(undefined, { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric', 
                        hour: 'numeric', 
                        minute: 'numeric', 
                        second: 'numeric', 
                        timeZoneName: 'short' 
                    }) }}
                </b>
                <h3>
                    {{ el.title }}
                </h3>
                <p>{{ el.description }}</p>
                <p v-if="el.content !== null && el.content.includes('[')">{{ el.content.split('[')[0] }} <a :href="el.url" target="_blank">Read More</a></p>
                <p v-else-if="el.content !== null">{{ el.content }} <a :href="el.url" target="_blank">Read More</a></p>
                <p v-else>{{ el.content }} <a :href="el.url" target="_blank">Read More</a></p>
            </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
