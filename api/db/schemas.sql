CREATE TABLE "users" (
	"_id" serial NOT NULL UNIQUE,
	"username" varchar(255) NOT NULL UNIQUE,
	"email" varchar(255) NOT NULL UNIQUE,
	"password" varchar(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "solutions" (
	"_id" serial NOT NULL UNIQUE,
	"title" varchar(255) NOT NULL UNIQUE,
	"user_id" integer NOT NULL,
	"completed" BOOLEAN NOT NULL,
	CONSTRAINT "solutions_pk" PRIMARY KEY ("_id")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "solutions" ADD CONSTRAINT "solutions_fk1" FOREIGN KEY ("user_id") REFERENCES "users"("_id");