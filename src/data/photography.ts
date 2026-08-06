/** Contact sheet and developing log for the photography drawer. */

export const roll = {
  id: "ROLL 041",
  stock: "PORTRA 400 · JULY 2026",
};

const captions = [
  "street, morning",
  "workshop bench",
  "bike, leaning",
  "a door",
  "friends, blurred",
  "window light",
  "train window",
  "the printer",
  "rain on glass",
  "empty square",
  "hands, soldering",
  "last frame",
];

export const frames = captions.map((label, i) => ({
  label,
  num: `${String(i + 1).padStart(2, "0")}A`,
}));

export const developingLog = [
  { roll: "roll 041", state: "drying" },
  { roll: "roll 040", state: "scanned" },
  { roll: "roll 039", state: "printed" },
  { roll: "roll 038", state: "lost, sadly" },
];

export const inTheBag = [
  "· 35mm body + 40mm",
  "· a very old rangefinder",
  "· digital, when it must be",
  "· two rolls, always expired",
];
