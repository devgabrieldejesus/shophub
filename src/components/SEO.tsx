import Head from 'next/head';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    shouldExcludeTitleSuffix?: boolean;
    shouldIndexPage?: boolean;
}

export default function SEO({
    title,
    description,
    image,
    shouldExcludeTitleSuffix = false, // em páginas que precisam de sufixo ele coloca se não ele tira
    shouldIndexPage = true
}: SEOProps) {

    const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? 'DevCommerce': ''}`; // ? : se for false ele tira se for verdadeiro ele coloca
    const pageImage = image ? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}` : null
    return (
        <Head>
            <title>{pageTitle}</title>
            {description && <meta name="description" content={description}/>} {/*se tiver descrição ele coloca se não tiver ele não colocar*/}
            {pageImage && <meta name="image" content={pageImage}/>}
            

            { !shouldIndexPage && <meta name="robots" content="noindex,nofollow" />} {/* shouldIndexPage: como false evitar que essa página seja indexada pelo google */}

            {/* Outras meta tags */}
            <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
            <meta name="MobileOptimized" content="320" />
            <meta name="HandheldFriendly" content="True" />
            <meta name="theme-color" content="#FFEBC1" />
            <meta name="msapplication-TileColor" content="#FFEBC1" />
            <meta name="referrer" content="no-referrer-when-downgrade" />
            <meta name="google" content="notranslate" />

            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content={pageTitle} />
            <meta property="og:image" content={pageImage} />
            <meta property="og:image:secure_url" content={pageImage} />
            <meta property="og:image:alt" content="Thumbnail" />
            <meta property="og:image:type" content="image/png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@devgabrieldejesus" />
            <meta name="twitter:creator" content="@devgabrieldejesus" />
            <meta name="twitter:image" content={pageImage} />
            <meta name="twitter:image:src" content={pageImage} />
            <meta name="twitter:image:alt" content="Thumbnail" />
            <meta name="twitter:image:width" content="1200" />
            <meta name="twitter:image:height" content="620" />
        </Head>
    );
}