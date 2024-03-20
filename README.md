# @fastify/pug

This is a small wrapper around [pug](https://pugjs.org/api/getting-started.html).

## Install
```
npm i @isekaimaouyoki-sama/fastify-pug
```

## Usage

Easy to use require/import this plugin as below

```js
const path = require('path')
const fastify = require('fastify')()

fastify.register(
  require('@isekaimaouyoki-sama/fastify-pug'),
  { 
    // root directory for view
    rootDir: path.join(__dirname, "views")
  }
)

fastify.get("/", async function(request, reply) {
  reply.renderer(
    'home.pug', // path to pug template
    { name: 'toni' } // data to pass into template
  )
})

fastify.listen({ port: 3000 }, err => {
  if (err) throw err
})
```