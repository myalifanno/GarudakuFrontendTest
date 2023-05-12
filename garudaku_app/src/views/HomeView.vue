<script>
import { mapActions, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  computed: {
    ...mapWritableState(useCounterStore, ['news', 'userPick'])
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchUsers', 'findUser']),
    articles(id){
      this.findUser(id)
    }
  },
  created(){
    this.fetchUsers()
  }
}
</script>

<template>
  <main>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No.</th>
          <th>Image</th>
          <th>News</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(el, index) in news" :key="index" :el="el" :index="index">
          <td>{{ index+1 }}</td>
          <td>
            <img :src="el.image" alt="Logo" style="height: 100px; width: 100;">
          </td>
          <td>{{ el.newsName }}</td>
          <td>
            <a href="" @click.prevent="articles(el.id)">View Article(s)</a>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
