<template>
	<button @click="onClicked">{{Title}}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VButton extends Vue {
	@Prop() public Title!: string;
	@Prop() private msg!: string;

	private onClicked(): void {
		window.alert(this.Title);
	}
}
</script>

<style>
</style>
