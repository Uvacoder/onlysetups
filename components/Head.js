import NextHead from 'next/head';

export default function Head({ title }) {
   const description = "Easily view workstations and gaming setups from reddit";

    return (
      <NextHead>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} key="title" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://og-image.vercel.app/OnlySetups.png" />
      </NextHead>
    )
}