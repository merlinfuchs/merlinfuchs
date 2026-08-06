/**
 * Turns markdown images inside posts into the site's photo print: white margin,
 * soft shadow, handwritten caption on the bottom lip.
 *
 *   ![the intercom, open](placeholder:3-2 "everything fits, barely")
 *   ![the intercom, open](/photos/intercom.jpg "everything fits, barely")
 *
 * A `placeholder:<ratio>` source renders the striped placeholder box with the
 * alt text as its label. Any other source renders a real image in the same
 * frame, so swapping in photography is a one-line change per image.
 *
 * Frame heights are all ≡ 10 (mod 30) so that a print — 10px margin, the image,
 * a 30px caption line and 10px margin — always totals a multiple of the post
 * body's 30px ruled grid, and the copy after it stays on the lines. The frame
 * width comes from the ratio, so landscape prints fill the column while
 * portrait and square ones sit narrower and centred.
 *
 * This is a Sätteri hast plugin (Astro's default Markdown processor); it is
 * wired up in astro.config.mjs.
 */

/** ratio token → [frame height in px, width ÷ height]. */
const FRAMES = {
  "16-9": [340, 16 / 9],
  "3-2": [400, 3 / 2],
  "4-3": [460, 4 / 3],
  "5-4": [490, 5 / 4],
  "1-1": [580, 1],
  "4-5": [610, 4 / 5],
};

/** The white margin around the image, both sides. */
const FRAME_MARGIN = 20;

const DEFAULT_RATIO = "3-2";
const PLACEHOLDER = "placeholder:";

const element = (tagName, className, children, style) => ({
  type: "element",
  tagName,
  properties: { className: [className], ...(style ? { style } : {}) },
  children,
});

const span = (className, value) =>
  element("span", className, [{ type: "text", value: String(value) }]);

function toPrint(img) {
  const { src = "", alt = "", title } = img.properties ?? {};
  const isPlaceholder = String(src).startsWith(PLACEHOLDER);
  const ratio = isPlaceholder ? String(src).slice(PLACEHOLDER.length) : DEFAULT_RATIO;
  const [height, aspect] = FRAMES[ratio] ?? FRAMES[DEFAULT_RATIO];
  const width = Math.round(height * aspect) + FRAME_MARGIN;

  const frame = element(
    "div",
    "print__image",
    isPlaceholder
      ? [span("print__label", alt), span("print__ratio", ratio.replace("-", " : "))]
      : [{ type: "element", tagName: "img", properties: { src, alt }, children: [] }]
  );

  const print = [frame];
  if (title) print.push(element("figcaption", "print__caption", [{ type: "text", value: title }]));

  return element(
    "figure",
    "post-figure",
    [element("div", "print", print)],
    `--print-h:${height}px;--print-w:${width}px`
  );
}

/** A paragraph holding nothing but one image is really a figure. */
const loneImage = (node) => {
  const meaningful = (node.children ?? []).filter(
    (child) => !(child.type === "text" && !child.value.trim())
  );
  const [only] = meaningful;
  return meaningful.length === 1 && only?.type === "element" && only.tagName === "img"
    ? only
    : null;
};

export const printsPlugin = {
  name: "prints",
  element: {
    filter: ["p"],
    visit(node) {
      const img = loneImage(node);
      // Returning a node replaces the paragraph we were called with.
      return img ? toPrint(img) : undefined;
    },
  },
};
