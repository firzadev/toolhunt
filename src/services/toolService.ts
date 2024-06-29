import { createId } from "@paralleldrive/cuid2";
import { client } from "../models/client";
import { ITool } from "../types/entity";

export const toolService = {
  getData: () => {
    const allTools = client
      .query(
        `
      SELECT
        t.id AS id,
        t.name AS name,
        t.description AS description,
        t.image AS image,
        t.url AS url,
        a.visits AS visits
      FROM
        toolhunts t
      JOIN
        analytics a ON a.tool_id = t.id
      `
      )
      .all() as ITool[];

    return allTools;
  },

  createData: ({
    name,
    description,
    image,
    url,
    category,
  }: Omit<ITool, "id" | "visits" | "verified" | "isPublic">) => {
    const toolId = createId();
    const analyticId = createId();

    client
      .query(
        `INSERT INTO toolhunts (id, name, description, image, url, category) VALUES (?,?,?,?,?,?)`
      )
      .run(toolId, name, description, image, url, category);
    client
      .query(`INSERT INTO analytics (id, tool_id) VALUES (?,?) `)
      .run(analyticId, toolId);

    const currentTools = client
      .query(
        `
      SELECT
        t.id AS id,
        t.name AS name,
        t.description AS description,
        t.image AS image,
        t.url AS url,
        a.visits AS visits
      FROM
        toolhunts t
      JOIN
        analytics a ON a.tool_id = t.id
      WHERE 
        t.id = ?
      `
      )
      .all(toolId) as ITool[];

    return currentTools[0];
  },
};
