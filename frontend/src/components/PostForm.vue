<template>
  <div class="post-form">
    <form>
      <label for="postContent">New post</label>
      <textarea
        name="postContent"
        id="postContent"
        cols="150"
        rows="10"
        placeholder="Write your text here"
      ></textarea>

      <label for="file">Add image (png, jpg, jpeg)</label>
      <input
        type="file"
        accept=".png, .jpg, .jpeg"
        id="file"
        name="image"
        @change="upload($event)"
        ref="fileupload"
      />

      <input type="submit" class="button" value="Publish" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'PostForm',
};
</script>

<style lang="scss" scoped>
.post-form {
  display: flex;
  flex-direction: column;
}
</style>
