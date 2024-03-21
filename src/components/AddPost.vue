<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Add</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="ID"
          label-for="id-input"
          invalid-feedback="id is required"
        >
          <b-form-input
            id="id-input"
            v-model="posts.id"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Title"
          label-for="title-input"
          invalid-feedback="title is required"
        >
          <b-form-input
            id="title-input"
            v-model="posts.title"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Body"
          label-for="body-input"
          invalid-feedback="body is required"
        >
          <b-form-input
            id="body-input"
            v-model="posts.body"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      posts: {
        id: "",
        title: "",
        body: "",
      },
      nameState: null,
      submittedNames: [],
    };
  },
  methods: {
    ...mapActions(["addPost"]),
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.nameState = valid;
      return valid;
    },
    resetModal() {
      this.name = "";
      this.nameState = null;
    },
    resetForm() {
      this.posts = {
        id: "",
        title: "",
        body: "",
      };
    },
    handleOk(bvModalEvent) {
      this.addPost(this.posts);
      this.resetForm();
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>
