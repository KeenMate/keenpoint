<template>
	<div>
		<h1>Structure</h1>
		<hr>
		<router-view></router-view>		
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
	// components: {
	//   HelloWorld,
	// },
})
export default class Webparts extends Vue {}
</script>

<style>

</style>
