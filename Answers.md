answer 1:
Our database has 4 collections, wherein 2 of them are product collection and category collection. The product schema has a field named category_id which corresponds to the "id" field in the category schema. In mongoose we can use "ref" option for referencing the "id" field of the category schema in the product schema.


answer 2:
First can retrieve the category collection from the database and then obtain an array of category ids. After that we can utilize enum validation on the category_id field of the product schema and put the obtained category ids array against the enum validation to ensure that each product in the "Product" table has a valid category assigned to it.


