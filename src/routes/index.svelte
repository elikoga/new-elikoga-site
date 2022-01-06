<script lang="ts">
  import CardPage from '$lib/CardPage.svelte';
  let data: CardPageData = {
    title: 'Eli Kogan-Wang // elikoga',
    subtitle: 'Ich baue Dinge. // I build things.',
    description: `I'm currently a Student at the University of Paderborn studying Computer Science as a Bachelor.

I'm working at the [Flying Circus](https://flyingcircus.io/) doing mainly [Nix/NixOS](https://nixos.org/) and some [Python](https://www.python.org/) development right now.

Outside of work I do Frontend Development with [Svelte](https://svelte.dev/) and backend development with [Node.js](https://nodejs.org/).

My Résumé is avaliable in [de](https://cv.eliko.ga/cv/de) and [en](https://cv.eliko.ga/cv/en).`,
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
