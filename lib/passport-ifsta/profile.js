/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
function parse(json) {
    if ((typeof json) === 'string') json = JSON.parse(json);
    return json;
}

module.exports = {
    parse,
};
