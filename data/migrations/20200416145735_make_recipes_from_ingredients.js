
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('name', 128)
            .notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.text('name', 128).notNullable();
        tbl.text('quantity', 128).notNullable();
    })
    .createTable('recipeIngredients', tbl => {
        
        tbl.integer('recipeId', 128)
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.integer('ingredientsId', 128)
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipeIngredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
