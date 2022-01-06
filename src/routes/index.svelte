<script lang="ts">
  import CardPage from '$lib/CardPage.svelte';
  import LanguageDropdown from '$lib/LanguageDropdown.svelte';
  import { _ } from 'svelte-i18n';
  let data: CardPageData;
  $: data = {
    title: 'Eli Kogan-Wang // elikoga',
    subtitle: $_('subtitle'),
    description: $_('description'),
    image: {
      src: '/PortraitSmall.jpg',
      alt: 'Picture of Eli Kogan-Wang'
    },
    socials: [
      {
        type: 'link',
        icon: 'fab fa-github',
        url: 'https://github.com/elikoga'
      },
      {
        type: 'link',
        icon: 'fab fa-gitlab',
        url: 'https://gitlab.com/elikoga'
      },
      {
        type: 'link',
        icon: 'fab fa-twitter',
        url: 'https://twitter.com/elikoga'
      },
      {
        type: 'link',
        icon: 'fab fa-instagram',
        url: 'https://instagram.com/elikoga'
      },
      {
        type: 'link',
        icon: 'fab fa-reddit',
        url: 'https://reddit.com/u/elikoga'
      },
      {
        type: 'link',
        icon: 'fab fa-telegram',
        url: 'https://t.me/coafin'
      },
      {
        type: 'copy',
        icon: 'fab fa-discord',
        text: 'elikoga#1802',
        tooltip: 'my Discord Tag'
      },
      {
        type: 'copy',
        icon: 'fas fa-envelope',
        text: 'elikowa@gmail.com',
        tooltip: 'my Email'
      }
    ]
  };
</script>

<div class="language-dropdown"><LanguageDropdown /></div>

<CardPage {data} />

<style>
  .language-dropdown {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 0.5rem;
  }
</style>
