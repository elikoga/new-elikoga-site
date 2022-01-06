<script lang="ts">
  export let data: SocialData;

  import '@fortawesome/fontawesome-free/css/all.css';

  import { toast } from '@zerodevx/svelte-toast';

  const copyToClipboard = (text: string) => () => {
    navigator.clipboard.writeText(text);
    toast.push(`Copied ${text} to clipboard`);
  };
</script>

{#if data.type === 'link'}
  <a
    class="border m-1 border-dark rounded-circle soc-circ text-center align-middle bg-light"
    href={data.url}
    target="_blank"
  >
    <i class={data.icon} />
  </a>
{:else if data.type === 'copy'}
  <span
    class="border m-1 border-dark rounded-circle soc-circ text-center align-middle bg-light"
    data-tooltip="Copies {data.tooltip} to your Clipboard"
    on:click={copyToClipboard(data.text)}
  >
    <i class={data.icon} />
  </span>
{/if}

<style>
  a,
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    color: #444;
  }

  span {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  a:hover,
  span:hover {
    background-color: #dae0e5 !important;
  }

  i {
    font-size: x-large;
  }
  [data-tooltip] {
    position: relative;
    z-index: 2;
  }

  [data-tooltip]:before,
  [data-tooltip]:after {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease-out;
    transform: translate(-50%, 5px);
  }

  [data-tooltip]:before {
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-bottom: 5px;
    padding: 7px;
    min-width: 200px;
    max-width: 250px;
    width: min-content;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    background-color: #000;
    background-color: hsla(0, 0%, 20%, 0.9);
    color: #fff;
    content: attr(data-tooltip);
    text-align: center;
    font-size: 14px;
    line-height: 1.2;
    transition: 0.2s ease-out;
  }

  [data-tooltip]:after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    border-top: 5px solid #000;
    border-top: 5px solid hsla(0, 0%, 20%, 0.9);
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
    content: ' ';
    font-size: 0;
    line-height: 0;
  }

  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0);
  }
</style>
