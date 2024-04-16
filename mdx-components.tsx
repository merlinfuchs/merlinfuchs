import type { MDXComponents } from "mdx/types";
import PostDate from "./app/components/PostDate";
import CodeCaption from "./app/components/CodeCaption";
import linkStyles from "./app/styles/Link.module.css";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: function H1(props) {
      return (
        <h1 className="text-4xl my-6 font-semibold tracking-wide" {...props} />
      );
    },
    h2: function H2(props) {
      return <h2 className="text-3xl font-semibold my-6" {...props} />;
    },
    h3: function H3(props) {
      return <h3 className="text-2xl font-semibold my-6" {...props} />;
    },
    p: function P(props) {
      return <p className="text-xl leading-9 font-light my-6" {...props} />;
    },
    a: function A(props) {
      return (
        <a
          className={linkStyles.link}
          {...(props.href?.indexOf("http") === 0 && {
            rel: "noopener",
            target: "_blank",
          })}
          {...props}
        />
      );
    },
    ul: function Ul(props) {
      return <ul className="pl-5 my-6 list-disc" {...props} />;
    },
    code: function Code(props) {
      return <code {...props} className="bg-[#06090E] p-1 rounded font-mono" />;
    },
    img: function Img(props) {
      return <img className="rounded-lg w-full" {...props} />;
    },
    PostDate,
    CodeCaption,
    ...components,
  };
}
