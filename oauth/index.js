const request = require('request-promise')

const AUTH_ENDPOINT = process.env.AUTH_ENDPOINT || `https://auth.touno.io`

module.exports = {
  AccessToken: async sender => {
    if (!sender.auth) throw new Error(`AccessToken require 'auth' name.`)
    if (!sender.uri) throw new Error(`AccessToken require 'uri' path.`)

    let item = await request({ method: 'POST', uri: `${AUTH_ENDPOINT}/${sender.auth}/accesstoken`, json: true })
    if (item.error) {
      throw new Error('Not oauth type, or please auth data from server.')
    } else {
      return request({
        method: sender.method || 'POST',
        headers: Object.assign({ 'Authorization': `Bearer ${item.token.access_token}` }, sender.headers),
        uri: sender.uri
      })
    }
  }
}
