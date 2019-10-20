
// module.exports = {
//     devServer: {
//         proxy: {
//             '/api': {
//                 target: 'http://localhost:8080',
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': '/'
//                 }
//             }
//         },
//     },
//
//     // webpack自定义配置，配置获取本地数据接口，使用proxy解决数据接口的跨域问题
//     // configureWebpack: (config) => {
//     //     if (process.env.NODE_ENV === 'production') {
//     //         config.mode = 'production'
//     //     } else {
//     //         config.mode = 'development'
//     //         require('./data')
//     //         config.devServer = {
//     //             proxy:{//使用proxy解决跨域问题
//     //                 '/api': {// 以 “/api” 开头的 代理到 下边的 target 属性 的值 中
//     //                     target: 'http://localhost:8080',
//     //                     changeOrigin: true,
//     //                     pathRewrite: {// 路径重写
//     //                         '^/api': '/' // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
//     //                     }
//     //                 }
//     //             }
//     //         }
//     //     }
//     // }
// }



// const express = require('express')
// const webpack = require('webpack')
// const app = express()
// const appData = require('./public/data.json')
// const sellers = appData.sellers
// const goods = appData.goods
// const ratings = appData.ratings
// const apiRoutes = express.Router();
// app.use('/api', apiRoutes)
// module.exports = {
//     publicPath: './',
//     productionSourceMap: false,
//     devServer: {
//         before(app) {
//             // app.get('/api/region', (req, res) => {
//             //     res.json({
//             //         data: appData
//             //     })
//             // })
//             app.get('/sellers', (req,res) => {
//                 res.json({
//                     errno: 0,
//                     data: sellers
//                 })
//             })
//             app.get('/goods', (req,res) => {
//                 res.json({
//                     errno: 0,
//                     data: goods
//                 })
//             })
//             app.get('/ratings', (req,res) => {
//                 res.json({
//                     errno: 0,
//                     data: ratings
//                 })
//             })
//         },
//         proxy: {
//             '/test': {
//                 target: "http://localhost:8080",
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/api': '/'
//                 }
//             },
//         },
//     },
// }

const express = require('express')
// 创建express实例
const app = express()
// 读取json数据
// const goods = require('./public/data/goods.json')
// const ratings = require('./public/data/ratings.json')
// const seller = require('./public/data/seller.json')
module.exports = {
    // 根路径
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             'common': './src/common'
    //         }
    //     }
    // },
    runtimeCompiler: true,
    publicPath: './',
    outputDir: 'docs',
    // assetsDir: 'public',
    lintOnSave: false,
    // devServer: {
    //     open: false,
    //     // host: 'localhost',
    //     port: 8080,
    //     https: false,
    //     proxy:{
    //         'api':{
    //             target:'http//localhost:8080/api',
    //             ws:true,
    //             changOrigin:true,
    //             pathRewrite:{
    //                 '^/api':''
    //             }
    //         }
    //     },
    //     before(app){
    //         app.get('/api/goods',(req,res) =>{
    //             res.json(goods)
    //         })
    //         app.get('/api/ratings',(req,res) =>{
    //             res.json(ratings)
    //         })
    //         app.get('/api/seller',(req,res) =>{
    //             res.json(seller)
    //         })
    //     }
    // }
}