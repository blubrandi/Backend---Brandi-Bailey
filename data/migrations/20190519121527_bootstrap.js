
exports.up = function (knex, Promise) {
    return knex.schema

        .createTable('volunteers', tbl => {
            tbl.increments()

            tbl.string('volunteer_username', 128).unique().notNullable()
            tbl.string('volunteer_password', 528).notNullable()
            tbl.string('volunteer_name', 128).notNullable()
            tbl.string('volunteer_email', 128).unique().notNullable()
            tbl.string('volunteer_phone', 128).unique().notNullable()
        })

        .createTable('businesses', tbl => {
            tbl.increments()

            tbl.string('business_username', 128).unique().notNullable()
            tbl.string('business_password', 528).notNullable()
            tbl.string('business_email', 128).unique()
            tbl.string('business_address', 528).notNullable()
            tbl.string('business_phone', 128).notNullable()
            tbl.string('business_contact_person', 128).notNullable()
        })

        .createTable('requests', tbl => {
            tbl.increments()

            tbl.timestamp('time_created', { useTZ: true })
            tbl.string('request_title', 256).notNullable()
            tbl.string('request_desc', 528).notNullable()
            tbl.boolean('completed').notNullable()
            tbl.string('request_expires_date').notNullable()
            tbl.string('request_expires_time').notNullable()

            tbl.string('volunteer_assigned').unsigned().references('id').inTable('volunteers').onDelete('RESTRICT').onUpdate('CASCADE')
            tbl.string('business_requesting').unsigned().references('id').inTable('businesses').onDelete('RESTRICT').onUpdate('CASCADE')

        })

};

exports.down = function (knex, Promise) {
    return knex.schema

        .dropTableIfExists('volunteers')
        .dropTableIfExists('requests')
        .dropTableIfExists('businesses')

};
