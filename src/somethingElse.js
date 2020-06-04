import { log } from "./logger";

export function whatever(x) {
    log("you passed in", x);
    return 2 ** x;
}
