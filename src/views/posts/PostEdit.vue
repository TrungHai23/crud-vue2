<template>
  <div class="postdetail">
    <h1>This is post edit</h1>
    <h3>id: {{ this.$route.params.id }}</h3>
    <b-container fluid>
      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-large">Title:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-large"
            size="lg"
            v-model="editedPost.title"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-large">Body:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            id="input-large"
            size="lg"
            v-model="editedPost.body"
          ></b-form-input>
        </b-col>
      </b-row>
    </b-container>
    <b-button class="btn" @click="saveEdit" variant="outline-success"
      >Save</b-button
    >
    <b-button class="btn" @click="back" variant="outline-dark">Back</b-button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import axios from "axios";
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
      this.$router.push("/posts");
    },
    saveEdit() {
      this.editPost(this.editedPost);
      this.back();
    },
    ...mapActions(["editPost"]),
    async fetchPostData() {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
        );
        this.editedPost = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchPostData();
  },
};
</script>

<style scoped>
.btn {
  margin: 2px 4px;
}
</style>
