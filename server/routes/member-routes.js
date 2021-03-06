'use strict';

const express = require('express');
const router = express.Router();
const jsonResponse = require('./../utils/json-response');
const cache = require('./../db/cache');
const logger = require('./../utils/logger');


router.get('/get-members/:searchTerm', function(req, res) {
    cache.filterMembersByName(req.params.searchTerm, function(filteredMembers) {
        jsonResponse(res, 200, null, filteredMembers);
    });
});

router.get('/member-analytics/:party', function(req, res) {
    const values = cache.runAnalytics(null, req.params.party);
    logger('generated values:', values);
    jsonResponse(res, 200, null, values);
});

module.exports = router;
