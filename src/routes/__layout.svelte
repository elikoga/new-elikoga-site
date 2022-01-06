<script context="module">
  import { browser } from '$app/env';
  import { register, init, getLocaleFromNavigator, locale } from 'svelte-i18n';

  register('en', () => import('$lib/i18n/en.json'));
  register('de', () => import('$lib/i18n/de.json'));

  const do_init = async () => {
    await init({
      fallbackLocale: 'en',
      initialLocale: getLocaleFromNavigator() || 'en'
    });
  };

  // if (browser) {
  //   // init on client side only
  //   // don't put this inside `load`, otherwise it will gets executed every time you changed route on client side
  //   do_init();
  // }

  /** @type {import('@sveltejs/kit').Load} */
  export const load = async ({ params, fetch, session, stuff }) => {
    // if (!browser) {
    // init on server side only
    await do_init();
    // }

    return {};
  };
</script>

<slot />
