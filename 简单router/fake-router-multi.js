class VueRouter {
    constructor({routes}) {
        this.routes = routes
        this.history = new History()
        this.path = window.location.hash
        this.history.listen(path => {
            this.path = path
            this.vm.$forceUpdate()
        })
    }

    init(vm) {
        this.vm = vm
    }
}

class History {
    listen(callback) {
        window.addEventListener('hashchange', function () {
            console.log('hash-change!', window.location.hash)
            callback && callback(window.location.hash)
        })
    }
}

function matcher (routes, path, index) {
    let paths = path.split('/')
    for (let routeName in routes) {
        let route = routes[routeName]
        const equalPath = route.path.replace(/^\//, '') == paths[index].replace(/^\//, '')
        if (equalPath) {
            if (route.children) {
                let components = matcher(route.children, path, index + 1)
                if (!components) {
                    continue
                }
                return [route.component, ...components]
            } else if (index>=paths.length - 1) {
                return [route.component]
            } else {
                continue
            }
        }
    }
    return false
}


function getMatchedComponent  (routes, path, matchIndex) {
    let matchRes = matcher(routes, path, 0)
    if (!matchRes) {
        return null
    }
    return {
        ...matchRes[matchIndex - 1]
    }
}

VueRouter.install = function (Vue) {

    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                this.$options.router.init(this)
                this.routeRoot = true
            } else {
                this.routeRoot = (this.$parent && this.$parent.routeRoot) || false
            }
        }
    })

    Vue.component('router-view', {
        functional: true,
        render(createElement, {props, children, parent, data}) {
            parent.isRouterView = true
            let depth = 1
            let searchedParent = parent
            while(searchedParent
                && searchedParent.$parent
                && searchedParent.routeRoot !== searchedParent) {
                if (searchedParent.isRouterView) {
                    depth ++
                }
                searchedParent = searchedParent.$parent
            }

            const router = searchedParent.$options.router
            const path = router.path.replace(/^#\//, '')

            const matchedComponent = getMatchedComponent(router.routes, path, depth)

            // const matchedRoute = router.routes.find(route => {
            //     return route.path.replace(/^\//, '') === path.replace(/^#\//, '')
            // })

            // const matchedComponent = matchedRoute.component
            // console.log(router, matchedRoute)
            let comp = {
                template: '<div>I am router-view</div>'
            }
            return createElement(matchedComponent || comp, props)
        }
    })

    Vue.component('router-link', {
        functional: true,
        render(createElement, {props, children, parent, data}) {
            return createElement('div', {class: ''})
        }
    })
}