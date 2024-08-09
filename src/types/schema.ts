import { artSchema } from "@utils/api/ApiSchema";
import { z } from "zod";

export type Art = z.infer<typeof artSchema>;
