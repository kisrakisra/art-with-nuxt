<template>
  <div>
    <img class="random-art" :src="source" />
    <button class="btn-randomize" @click="changeSource">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  props: ["buttonText"],
  data() {
    return {
      sources: [
        "https://picsum.photos/200",
        "https://picsum.photos/id/237/200/300",
        "https://picsum.photos/seed/picsum/200/300",
        "https://picsum.photos/200/300",
        "https://picsum.photos/id/870/200/300"
      ],
      source: "https://picsum.photos/200",
      index: 0
    };
  },
  methods: {
    changeSource() {
      this.index = this.getRandom();
      this.source = this.sources[this.index];
    },
    getRandom() {
      return Math.floor((Math.random() * 10) % this.sources.length);
    }
  }
};
</script>

<style lang="css">
.btn-randomize,
.btn-randomize:hover,
.btn-randomize:focus {
  width: 100px;
  height: 30px;
  border: 1px solid #5e5e5e;
  box-sizing: unset !important;
  outline: none !important;
  cursor: pointer;
  transition: all ease 300ms;
}
.btn-randomize:hover {
  background-color: #f0f0f0;
}
img {
  height: 200px !important;
  max-width: 100%;
  display: flex;
  margin: 0 auto;
}
</style>