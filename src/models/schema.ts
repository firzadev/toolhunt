import { client } from "./client";

client.exec(`
  CREATE TABLE IF NOT EXISTS toolhunts(
    id text primary key,
    name text not null,
    description text not null,
    url text not null,
    image text not null,
    category text not null,
    verified integer default 0,
    is_publiv integer default 0
  );

  create table if not exists analytics (
    id text primary key,
    tool_id text not null,
    visits integer default 1,
    foreign key (tool_id) references tools(id)
  );
  `);
