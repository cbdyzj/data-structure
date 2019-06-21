/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
    var ipv4re = /^(((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])|([1-9][0-9])|([1-9])|0)\.){3}((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])|([1-9][0-9])|([1-9])|0)$/
    var ipv6re = /^(([0-9a-fA-F]{1,4}):){7}([0-9a-fA-F]{1,4})$/
    if (ipv4re.test(IP)) {
        return 'IPv4'
    }
    if (ipv6re.test(IP)) {
        return 'IPv6'
    }
    return 'Neither'
};