import type { MDXComponents } from "mdx/types";
import PostDate from "./app/components/PostDate";
import CodeCaption from "./app/components/CodeCaption";
import JournalMap from "./app/components/JournalMap";
import JournalGallery from "./app/components/JournalGallery";
import JournalDate from "./app/components/JournalDate";
import OtherJournals from "./app/components/OtherJournals";
import MadeByHumanBadge from "./app/components/MadeByHumanBadge";
import linkStyles from "./app/styles/Link.module.css";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: function H1(props) {
      return (
        <h1 className="text-4xl my-6 font-semibold tracking-wide" {...props} />
      );
    },
    h2: function H2(props) {
      return (
        <h2
          className="text-3xl font-semibold mt-10 border-b border-gray-800 pb-3 mb-4"
          {...props}
        />
      );
    },
    h3: function H3(props) {
      return <h3 className="text-2xl font-semibold mt-10 mb-4" {...props} />;
    },
    h4: function H4(props) {
      return <h4 className="text-xl font-semibold mt-8 mb-4" {...props} />;
    },
    p: function P(props) {
      return <p className="text-xl leading-9 font-light mb-6" {...props} />;
    },
    strong: function Strong(props) {
      return <strong className="font-semibold" {...props} />;
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
      return <ul className="pl-5 mb-6 list-disc" {...props} />;
    },
    ol: function Ul(props) {
      return <ul className="pl-5 mb-6 list-decimal" {...props} />;
    },
    code: function Code(props) {
      return <code {...props} className="bg-[#06090E] p-1 rounded font-mono" />;
    },
    img: function Img(props) {
      return (
        <>
          <img className="rounded-lg w-full" {...props} />
          {props.alt && (
            <span className="block text-sm italic mt-1.5" aria-hidden>
              {props.alt}
            </span>
          )}
        </>
      );
    },
    blockquote: function Quote(props) {
      return (
        <blockquote className="border-l-2 border-gray-500 pl-5" {...props} />
      );
    },
    PostDate,
    CodeCaption,
    JournalMap,
    JournalDate,
    JournalGallery,
    OtherJournals,
    MadeByHumanBadge,
    ...components,
  };
}
