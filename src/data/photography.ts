/** Contact sheet and developing log for the photography drawer. */

export const roll = {
  id: "ROLL 041",
  stock: "PORTRA 400 · JULY 2026",
};

const captions = [
  "the doorstep regular",
  "loaf, morning light",
  "off somewhere",
  "one eye open",
  "the radiator",
  "warm brick",
  "crossing",
  "waiting for the tin",
  "the good chair",
  "eye contact",
  "thoroughly unimpressed",
  "last frame, asleep",
];

export const frames = captions.map((label, i) => ({
  label,
  num: `${String(i + 1).padStart(2, "0")}A`,
  src: `/cats/roll-${String(i + 1).padStart(2, "0")}.svg`,
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
