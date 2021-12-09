CREATE DATABASE "giphy_search_favorites";

-- You'll need a table for storing each giphy image favorite
-- Each favorite image can be assigned 1 of the following categories as a Foreign Key

CREATE TABLE "category" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL
);
CREATE TABLE "favorites" (
	"id" SERIAL PRIMARY KEY,
	"url" TEXT NOT NULL,
	"category_id" INT REFERENCES category(id)
);
INSERT INTO "category" ("name")
    VALUES ('funny'), ('cohort'), ('cartoon'), ('nsfw'), ('meme');

INSERT INTO "favorites" ("url", "category_id")
	VALUES ('https://media.giphy.com/media/12d135APsgPfO0/giphy.gif', '2');