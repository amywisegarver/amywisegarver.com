import Script from "next/script";

type Props = {
  url: string;
  videoId: string;
};

export default function TikTokEmbed({ url, videoId }: Props) {
  return (
    <div className="mx-auto" style={{ zoom: 0.72, maxWidth: 325 }}>
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={videoId}
        style={{ maxWidth: "325px", minWidth: "325px" }}
      >
        <section />
      </blockquote>
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}
