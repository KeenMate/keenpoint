import Vue, { PluginObject } from "vue";

declare const SP: any;

declare module "vue/types/vue" {
	interface Vue {
		$spContext: any;
	}
}

export interface ISPContextOptions {
	siteUrl: string;
}

export function SPContext(vue: typeof Vue, options?: ISPContextOptions): void {
	Vue.prototype.$spContext = new SP.ClientContext(options ? options.siteUrl : "");
}
