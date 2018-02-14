// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/Valimr/Sites/enviroalternatives/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/Valimr/Sites/enviroalternatives/.cache/dev-404-page.js")),
  "component---src-templates-product-page-js": preferDefault(require("/home/Valimr/Sites/enviroalternatives/src/templates/product-page.js")),
  "component---src-templates-about-page-js": preferDefault(require("/home/Valimr/Sites/enviroalternatives/src/templates/about-page.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/home/Valimr/Sites/enviroalternatives/src/templates/blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("/home/Valimr/Sites/enviroalternatives/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/Valimr/Sites/enviroalternatives/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "products.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/products.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "about.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/about.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "products-solarheaters.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/products-solarheaters.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "products-incineratingtoilets.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/products-incineratingtoilets.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "products-waterlesstoilets.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/products-waterlesstoilets.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "brewing-chemex.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/brewing-chemex.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "jamaica-blue.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/jamaica-blue.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "making-sense.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/making-sense.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "404.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/404.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/index.json"),
  "layout-index.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/layout-index.json"),
  "404-html.json": require("/home/Valimr/Sites/enviroalternatives/.cache/json/404-html.json")
}