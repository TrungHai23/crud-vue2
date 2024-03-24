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
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <router-link :to="{ name: 'postdetail', params: { id: post.id } }">
              <b-button variant="outline-info" class="btn btn-actions"
                >Edit</b-button
              >
            </router-link>
            <b-button
              variant="outline-danger"
              @click="deletePost(post.id)"
              class="btn btn-actions"
              >Delete</b-button
            >
          </td>
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

<style>
.btn {
  width: 80px;
  margin: 2px 0;
}
</style>
