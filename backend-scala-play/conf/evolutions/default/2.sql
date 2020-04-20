# --- !Ups

INSERT INTO "Categories"("name") VALUES("Fashion");
INSERT INTO "Categories"("name") VALUES("Books");
INSERT INTO "Categories"("name") VALUES("Technology");
INSERT INTO "Categories"("name") VALUES("Food");

INSERT INTO "Users"("password", "email") VALUES("1234", "jan@o2.pl");
INSERT INTO "Users"("password", "email") VALUES("1234", "kuba@o2.pl");
INSERT INTO "Users"("password", "email") VALUES("1234", "bartek@o2.pl");

INSERT INTO "Products"("name", "description", "idCategories", "price") VALUES("Samsung Galaxy S20", "Latest smasung flagship", 3, 3000);
INSERT INTO "Products"("name", "description", "idCategories", "price") VALUES("Bag", "Big leather bag", 1, 300);
INSERT INTO "Products"("name", "description", "idCategories", "price") VALUES("Blue bag", "Big blue leather bag", 1, 350);
INSERT INTO "Products"("name", "description", "idCategories", "price") VALUES("Wine", "Good Hungarian wine", 4, 150);
INSERT INTO "Products"("name", "description", "idCategories", "price") VALUES("Harry Potter", "First part of Harry Potter series", 2, 30);


# --- !Downs

DELETE FROM "Categories" WHERE name="Fashion";
DELETE FROM "Categories" WHERE name="Books";
DELETE FROM "Categories" WHERE name="Technology";
DELETE FROM "Categories" WHERE name="Food";

DELETE FROM "Users" WHERE email="jan@o2.pl";
DELETE FROM "Users" WHERE email="kuba@o2.pl";
DELETE FROM "Users" WHERE email="bartek@o2.pl";

DELETE FROM "Products" WHERE name="Samsung Galaxy S20";
DELETE FROM "Products" WHERE name="Blue bag";
DELETE FROM "Products" WHERE name="Bag";
DELETE FROM "Products" WHERE name="Wine";
DELETE FROM "Products" WHERE name="Harry Potter";


