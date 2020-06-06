# --- !Ups

INSERT INTO "Categories"("name") VALUES("Fashion");
INSERT INTO "Categories"("name") VALUES("Books");
INSERT INTO "Categories"("name") VALUES("Technology");
INSERT INTO "Categories"("name") VALUES("Food");

INSERT INTO "Delivery"("type", "price") VALUES("Inpost", 10);
INSERT INTO "Delivery"("type", "price") VALUES("DHL", 12);

INSERT INTO "Photos"("path") VALUES("https://img.icons8.com/carbon-copy/2x/no-image.png");

INSERT INTO "Products"("name", "description", "idCategories", "price", "idDelivery", "idPhotos") VALUES("Samsung Galaxy S20", "Latest smasung flagship", 3, 3000, 1, 1);
INSERT INTO "Products"("name", "description", "idCategories", "price", "idDelivery", "idPhotos") VALUES("Bag", "Big leather bag", 1, 300, 2, 1);
INSERT INTO "Products"("name", "description", "idCategories", "price", "idDelivery", "idPhotos") VALUES("Blue bag", "Big blue leather bag", 1, 350, 1, 1);
INSERT INTO "Products"("name", "description", "idCategories", "price", "idDelivery", "idPhotos") VALUES("Wine", "Good Hungarian wine", 4, 150, 1, 1);
INSERT INTO "Products"("name", "description", "idCategories", "price", "idDelivery", "idPhotos") VALUES("Harry Potter", "First part of Harry Potter series", 2, 30, 2, 1);


# --- !Downs

DELETE FROM "Categories" WHERE name="Fashion";
DELETE FROM "Categories" WHERE name="Books";
DELETE FROM "Categories" WHERE name="Technology";
DELETE FROM "Categories" WHERE name="Food";

DELETE FROM "Delivery" WHERE type="Inpost";
DELETE FROM "Delivery" WHERE type="DHL";

DELETE FROM "Photos" WHERE path="https://img.icons8.com/carbon-copy/2x/no-image.png";

DELETE FROM "Products" WHERE name="Samsung Galaxy S20";
DELETE FROM "Products" WHERE name="Blue bag";
DELETE FROM "Products" WHERE name="Bag";
DELETE FROM "Products" WHERE name="Wine";
DELETE FROM "Products" WHERE name="Harry Potter";


