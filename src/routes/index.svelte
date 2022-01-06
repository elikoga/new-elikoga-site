<script lang="ts">
  import CardPage from '$lib/CardPage.svelte';
  let data: CardPageData = {
    title: 'Eli Kogan-Wang // elikoga',
    subtitle: 'Ich baue Dinge. // I build things.',
    description: 'Mein Lebenslauf // My Résumé:',
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

<CardPage {data} />
