import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";

import BootstrapVue from "bootstrap-vue";
import { SPContext } from "./plugins/SPContext";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

const init = () => {
	Vue.use(SPContext, { siteUrl: "/" });
	Vue.use(BootstrapVue);

	new Vue({
		router,
		store,
		render: h => h(App),
	}).$mount("#app");
};

type IExecuteOrDelayUntilScriptLoaded = (
	callback: () => void,
	name: string,
) => void;
declare const ExecuteOrDelayUntilScriptLoaded: IExecuteOrDelayUntilScriptLoaded;

ExecuteOrDelayUntilScriptLoaded(init, "sp.js");
