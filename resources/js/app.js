import { createApp, h } from "vue";
import store from "./store/";
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";
import Default from "@/layout/Default.vue";

createInertiaApp({
    resolve: async (name) => {
        let page = await import(`@/Pages/${name}`);

        page = page.default;

        if (page.layout === undefined) {
            page.layout = Default;
        }
        // page.layout ??= Layout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(store)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el);
    },
    title: (title) => `${title} - My App`,
});

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 250,

    // The color of the progress bar.
    color: "red",

    // Whether to include the default NProgress styles.
    includeCSS: true,

    // Whether the NProgress spinner will be shown.
    showSpinner: true,
});
