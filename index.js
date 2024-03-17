import path from 'path'
import fp from 'fastify-plugin'
import pug from 'pug'

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

export default fp(async function (fastify, opts = {}) {
  if (!opts?.rootDir && typeof opts.rootDir !== 'string') {
    throw new Error('Root directory of views is not found!!')
  }

  fastify.decorateReply('renderer', function(filename, data) {
    const compiler = pug.compileFile(
      path.join(
        ...path.normalize(opts.rootDir).split(path.sep), 
        ...path.normalize(filename).split(path.sep)
      )
    );
    this.type('text/html')
    this.send(compiler(data))
  })
}, {
  name: '@fastify/pug',
  fastify: '>=4.10'
})
