<template>
  <div class="posts">
    <h1>This is posts page</h1>
    <AddPost></AddPost>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Body</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <th>{{ post.id }}</th>
          <th>{{ post.title }}</th>
          <th>{{ post.body }}</th>
          <th>
            <router-link :to="{ name: 'postdetail', params: { id: post.id } }">
              <button>Edit</button></router-link
            >
            <button @click="deletePost(post.id)">Delete</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AddPost from "@/components/AddPost.vue";
export default {
  mounted() {
    this.getPosts();
  },
  components: {
    AddPost,
  },
  computed: {
    ...mapState(["posts"]),
  },
  methods: {
    ...mapActions(["getPosts", "deletePost"]),
  },
};
</script>

<style></style>
