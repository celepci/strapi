'use strict';

/**
 * newss service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newss.newss');
