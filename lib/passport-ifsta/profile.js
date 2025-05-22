/**
 * Parse profile.
 *
 * @param {Object|String} json
 * @return {Object}
 * @api private
 */
function parse(json) {
    if ((typeof json) === 'string') json = JSON.parse(json);
    let profile = { };
    profile.id = json.id;
    profile.displayName = json.displayName;
    profile.family_name = json.family_name;
    profile.given_name = json.given_name;
    profile.name = json.name;
    profile.preferredUsername = json.preferredUsername;
    profile.username = json.username;
    profile.emails = json.emails;
    profile.groups = json.groups;
    profile.photos = json.photos;
    profile.apiToken = json.apiToken;
    profile.expires = json.expires;
    return profile;
}

module.exports = {
    parse,
};
