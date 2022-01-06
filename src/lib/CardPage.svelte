<script lang="ts">
  import SocialCircle from './SocialCircle.svelte';
  import { SvelteToast } from '@zerodevx/svelte-toast';

  export let data: CardPageData;
</script>

<svelte:head>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
</svelte:head>

<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />

<div class="container">
  <div class="row align-items-center" style="min-height: 100vh">
    <div class="card mx-auto w-75 col">
      <div class="row no-gutters">
        <div class="col-md-7 d-flex flex-column">
          <div class="card-body">
            <h5 class="card-title">{data.title}</h5>
            <p class="card-text">{data.subtitle}</p>
            <p class="card-text">
              {data.description}
            </p>
          </div>
          <div class="card-body soc-list mr-auto">
            {#each data.socials as social}
              <SocialCircle data={social} />
            {/each}
          </div>
        </div>
        <div class="col-md-5">
          <div class="card-body">
            <img class="img-fluid rounded-circle" alt={data.image.alt} src={data.image.src} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .soc-list {
    display: flex;
    flex-wrap: wrap;
    align-items: end;
  }

  :root {
    --toastContainerTop: auto;
    --toastContainerRight: auto;
    --toastContainerBottom: 8rem;
    --toastContainerLeft: calc(50vw - 8rem);
  }
</style>
