import Script from "next/script";

type Props = {
  url: string;
  videoId: string;
};

export default function TikTokEmbed({ url, videoId }: Props) {
  return (
    <div className="mx-auto w-full max-w-[325px]">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: "325px", minWidth: "260px" }}
      >
        <section />
      </blockquote>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}
