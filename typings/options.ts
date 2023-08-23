import { Enum } from "../src/lib/primitives/enum";

export const Applicability = Enum("always", "never");

export type Applicability = Enum<typeof Applicability>;