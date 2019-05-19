
exports.up = function (knex, Promise) {
    return knex.schema

        .createTable('volunteers', tbl => {
            tbl.increments()

            tbl
                .string('volunteer_username', 128).unique().notNullable()
                .string('volunteer_password', 528).notNullable()
                .string('volunteer_name', 128).notNullable()
                .string('volunteer_email', 128).unique().notNullable()
                .string('volunteer_phone', 128).unique().notNullable()
        })

        .createTable('businesses', tbl => {
            tbl.increments()

            tbl
                .string('business_username', 128).unique().notNullable()
                .string('business_password', 528).notNullable()
                .string('business_email', 128).unique()
                .string('business_address', 528).notNullable()
                .string('business_phone', 128).notNullable()
                .string('business_contact_person', 128).notNullable()
        })

        .create('requests', tbl => {
            tbl.increments()

            tbl
                .timestamp('time_created', { useTZ: true }, { precision: 6 }).defaultTo(knex.fn.now(6))
                .string('request_title', 256).notNullable()
                .string('request_desc', 528).notNullable()
                .boolean('completed').notNullable()
                .string('request_expires_date').notNullable()
                .date('request_expires_date').notNullable()
                .time('request_expires_time').notNullable()

            tbl
                .string('volunteer_assigned').unsigned().references('id').inTable('volunteers').onDelete('RESTRICT').onUpdate('CASCADE')

            tbl
                .string('business_requesting').unsigned().references('id').inTable('businesses').onDelete('RESTRICT').onUpdate('CASCADE')

        })

};

exports.down = function (knex, Promise) {
    return knex.schema

        .dropTableIfExists('volunteers')
        .dropTableIfExists('requests')
        .dropTableIfExists('businesses')

};
