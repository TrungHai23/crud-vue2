import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  getters: {},
  mutations: {
    DELETE_POST(state, postId) {
      if ((state.posts = state.posts.filter((post) => post.id !== postId))) {
        alert("Xóa thành công");
      } else {
        alert("Xóa thất bại");
      }
    },
    ADD_POST(state, newPost) {
      if (state.posts.unshift(newPost)) {
        alert("Thêm thành công");
      } else {
        alert("Thêm thất bại");
      }
    },
    GET_POST(state, posts) {
      state.posts = posts;
    },
    EDIT_POST(state, editedPost) {
      state.posts = state.posts.map((post) => {
        if (post.id === editedPost.id) {
          alert("Sửa thành công");
          return editedPost;
        } else {
          return post;
        }
      });
      // state.posts = editedPost;
    },
  },
  actions: {
    async deletePost({ commit }, postId) {
      try {
        await axios.delete(
          `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        commit("DELETE_POST", postId);
      } catch (error) {
        console.log(error);
      }
    },
    async addPost({ commit }, newPost) {
      try {
        await axios.post(`https://jsonplaceholder.typicode.com/posts`, newPost);
        commit("ADD_POST", newPost);
      } catch (error) {
        console.log(error);
      }
    },
    async getPosts({ commit }) {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        commit("GET_POST", response.data);
      } catch (error) {
        console.log(error);
      }
    },
    async editPost({ commit }, editedPost) {
      try {
        await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${editedPost.id}`,
          editedPost
        );
        commit("EDIT_POST", editedPost);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
