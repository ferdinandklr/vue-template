/**
 * SETUP SERVER
 */
// import needed libraries
const express = require('express')
const cors = require('cors')
const path = require('path')
const rest = require('./rest')
const misc = require('./misc')

const app = express()

// get environment constants
const port = process.env.PORT
const isProduction = process.env.NODE_ENV === 'production'
const frontendLocation = process.env.FRONTEND_LOC
const frontendFilesUrl = misc.GetFrontendFilesUrl(frontendLocation)

/*
 * Define routes
 *
 * VueJS creates a SPA, so it possesses its own routing mecanism
 * ExpressJS just has to serve some files statiscally, and respond
 * to REST requests
 */
app.get('*', cors(), (req, res, next) => {
  var subdomains = misc.GetReqSubdomains(req)

  if (subdomains[subdomains.length - 1] === 'api') {
    // if request is for the rest api, direct it toward rest.js
    res.set({ 'content-type': 'application/json; charset=utf-8' })
    res.end(rest(req), 'utf-8')
  } else {
    // else serve the requested file if it exists (or index.html if not)
    if (frontendFilesUrl.includes(req.url)) {
      res.sendFile(path.resolve(frontendLocation + req.url))
    } else {
      res.sendFile(path.resolve(frontendLocation + '/index.html'))
    }
  }
})

// start the server
app.listen(port, (params) => {
  if (!isProduction) {
    misc.Compiled()
  }
})
