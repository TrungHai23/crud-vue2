<template>
  <div class="postdetail">
    <h1>This is post detail</h1>
    <h3>id: {{ this.$route.params.id }}</h3>
    <template>
      <div>
        <b-form-input v-model="editedPost.title"></b-form-input>
        <b-form-input v-model="editedPost.body"></b-form-input>
        <p>{{ editedPost.title }}</p>
      </div>
      <button @click="saveEdit">Save</button>
      <button @click="back">Back</button>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      editedPost: {
        id: null,
        title: "",
        body: "",
      },
    };
  },
  computed: {
    ...mapState(["posts"]),
    post() {
      return this.posts.find((post) => post.id === this.$route.params.id);
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    saveEdit() {
      this.editPost(this.editedPost);
      this.back();
    },
    ...mapActions(["editPost"]),
  },
  mounted() {
    this.editedPost.id = this.post.id;
    this.editedPost.title = this.post.title;
    this.editedPost.body = this.post.body;
  },
};
</script>
