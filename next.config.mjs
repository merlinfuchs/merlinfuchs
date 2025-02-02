import withMDX from "@next/mdx";
import rehypePrism from "@mapbox/rehype-prism";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  redirects: async () => {
    return [
      {
        source: "/gallery",
        destination: "/gallery/2024-barcelona",
        permanent: true,
      },
    ];
  },
};

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
  },
};

export default withMDX(mdxConfig)(nextConfig);
