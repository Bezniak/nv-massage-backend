'use strict';

/**
 * massage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::massage.massage');
