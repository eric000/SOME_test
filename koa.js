const http = require('http')

class Koa {
  constructor(option) {
    this.option = option
    this.middlewares = [];
    this.context = null
  }
  use(fn) {
    this.middlewares.push(fn)
  }
  listen(...arg) {
    let serve = http.createServer(async (req, res) => {
      this.context = new Context(req, res)
      let fn = compose(this.middlewares)
      await fn(this.context)


      // 设置返回
      this.context.res.end(this.context.body)
    })

    return serve.listen(...arg)
  }
}

class Context {
  constructor(req, res) {
    this.req = req
    this.res = res
  }
}

function compose (middlewares) {
  return ctx => {
    const dispatch = (i) => {
      const middleware = middlewares[i]
      if (i === middlewares.length) {
        return
      }
      return middleware(ctx, () => dispatch(i+1))
    }
    return dispatch(0)
  }
}

/////////////////////////////

let app = new Koa()

app.use(async (ctx, next) => {
  setTimeout(console.log, 1000, 1) // 没处理好宏任务呢
  next()
})

app.use(async (ctx, next) => {
  console.log('Middleware 1 Start')
  await next()
  console.log('Middleware 1 End')
})

app.use(async (ctx, next) => {
  console.log('Middleware 2 Start')
  await next()
  console.log('Middleware 2 End')
  ctx.body = 'hello world'
})

app.listen(8888)