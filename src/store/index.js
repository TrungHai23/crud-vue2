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
      state.posts = state.posts.filter((post) => post.id !== postId);
      if (state === 200) {
        alert("Xoa thang cong");
      } else {
        alert("xoa that bai");
      }
    },
    ADD_POST(state, newPost) {
      state.posts.unshift(newPost);
    },
    GET_POST(state, posts) {
      state.posts = posts;
    },
    EDIT_POST(state, editedPost) {
      const index = state.posts.findIndex((post) => post.id === editedPost.id);
      if (index !== -1) {
        state.posts.splice(index, 1, editedPost);
      }
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
