
exports.up = function (knex, Promise) {
    return knex.schema

        .createTable("users", tbl => {
            tbl.increments("id")

            tbl.string("username", 128).unique().notNullable()
            tbl.string("password", 528).notNullable()
            tbl.string("business_name")
            tbl.string("contact_name", 128).notNullable()
            tbl.string("address", 528)
            tbl.string("email", 128).unique().notNullable()
            tbl.string("phone", 128).unique().notNullable()
            tbl.string("user_type", 128).notNullable()
        })


        .createTable("requests", tbl => {
            tbl.increments("id")

            tbl.string("request_title", 256).notNullable()
            tbl.string("request_desc", 528).notNullable()
            tbl.integer("volunteer_assigned").unsigned().references("id").inTable("users").onDelete("RESTRICT").onUpdate("CASCADE")
            tbl.integer("business_requesting").unsigned().references("id").inTable("users").onDelete("RESTRICT").onUpdate("CASCADE")
            tbl.boolean("completed").notNullable()
            tbl.string("request_expires_date").notNullable()
            tbl.string("request_expires_time").notNullable()


        })

};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists("users")
        .dropTableIfExists("requests")

};
