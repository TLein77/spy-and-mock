import { Thing } from "./thing";

export interface Stuff {
  uuid: string;
  name: string;
  things: Thing[];
}
