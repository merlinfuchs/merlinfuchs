import withMDX from "@next/mdx";
import rehypePrism from "@mapbox/rehype-prism";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
  },
};

export default withMDX(mdxConfig)(nextConfig);
