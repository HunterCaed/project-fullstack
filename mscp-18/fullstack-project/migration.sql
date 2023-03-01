DROP TABLE IF EXISTS todo;

CREATE TABLE todo(
    id SERIAL PRIMARY KEY NOT NULL,
    name varchar,
    description TEXT,
    completed boolean
);