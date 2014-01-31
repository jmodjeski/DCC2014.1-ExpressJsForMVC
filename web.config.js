
// process.env.XXX is the pattern used for importing
// environment specific settings.  Cloud providers like
// azure websites give you the ability to set values from
// the management console.
var exports = module.exports = {
  connectionStrings: {

  },
  webServer: {
    //logging: {},
    port: process.env.port || 3000
  }

};