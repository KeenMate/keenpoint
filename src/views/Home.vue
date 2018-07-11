<template>
	<div class="home">
		<img src="../assets/logo.png">
		{{ siteName }}
		<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
	components: {
		HelloWorld,
	},
})

export default class Home extends Vue {
	private siteName: string = "";

	private created() {
		this.loadName();
	}

	private loadName(): string {
		const web = this.$spContext.get_web();

		this.$spContext.load(web);
		this.$spContext.executeQueryAsync(
			() => this.siteName = web.get_title(),
			() => console.log("Couldn't get web title"),
		);

		return name;
	}
}
</script>
