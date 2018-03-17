import { color } from "csx";

const FLOOANT_GREEN_1 = "#50b668";
const FLOOANT_GREY_1 = "#58595f";
const FLOOANT_WHITE_1 = "#ffffff";

export const theme = {
  FLOOANT_GREEN_1,
  FLOOANT_GREEN_2: color(FLOOANT_GREEN_1)
    .darken(0.1)
    .toString(),
  FLOOANT_GREEN_3: color(FLOOANT_GREEN_1)
    .darken(0.2)
    .toString(),
  FLOOANT_GREY_1,
  FLOOATN_GREY_2: color(FLOOANT_GREY_1)
    .darken(0.1)
    .toString(),
  FLOOATN_GREY_3: color(FLOOANT_GREY_1)
    .darken(0.2)
    .toString(),
  FLOOANT_WHITE_1,
  FLOOANT_WHITE_2: color(FLOOANT_WHITE_1)
    .darken(0.1)
    .toString(),
  FLOOANT_WHITE_3: color(FLOOANT_WHITE_1)
    .darken(0.2)
    .toString()
};
