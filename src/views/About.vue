<template>
  <div class="about">
    <h1>So this is the page about page - hroch</h1>
    <p><v-button title="We are the Kings of SharePoint!"></v-button></p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VButton from "@/components/v-button.vue"; // @ is an alias to /src

@Component({
  components: {
    VButton
  }
})
export default class About extends Vue {}
</script>