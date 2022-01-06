/// <reference types="@sveltejs/kit" />

type CardPageData = {
  title: string;
  subtitle: string;
  description: string;
  image?: {
    src: string;
    alt: string;
  }
  socials: SocialData[];
}

type SocialData = ({
  type: "link",
  icon: string,
  url: string,
} | {
  type: "copy",
  icon: string,
  text: string,
  tooltip: string,
})
