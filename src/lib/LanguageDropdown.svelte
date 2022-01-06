<script lang="ts">
  import { browser } from '$app/env';
  import { locale } from 'svelte-i18n';
  export let language = undefined;
  language = $locale;
  // get language from localStorage
  if (browser && localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  }
  // set language to localStorage

  $: {
    $locale = language;
    // save to localStorage
    browser && localStorage.setItem('language', language);
  }
</script>

<select id="language" bind:value={language} class="form-select" arial-label="Language selection">
  <option value="en">English</option>
  <option value="de">Deutsch</option>
</select>
