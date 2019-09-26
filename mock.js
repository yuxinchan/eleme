// const express = require('express')
// const app = express()
// const appData = require('./data/data.json')
// const sellers = appData.sellers
// const goods = appData.goods
// const ratings = appData.ratings
// const apiRouters = express.Router()
// //使用express路由获得本地数据
// apiRouters.get('/sellers',(req,res) => {
//     res.json({
//         stu: 0,
//         data: sellers
//     })
// })
// apiRouters.get('/goods',(req,res) => {
//     res.json({
//         stu: 0,
//         data: goods
//     })
// })
// apiRouters.get('/ratings',(req,res) => {
//     res.json({
//         stu: 0,
//         data: ratings
//     })
// })
// app.use('/data',apiRouters)
// module.exports = apiRouters
// app.listen(3000)

// const express = require('express')
// const app = express()
// const appData = require('./data/data.json')
// const sellers = appData.sellers
// const goods = appData.goods
// const ratings = appData.ratings
// const apiRoutes = express.Router()
// //使用express路由获得本地数据
//
// app.use('/api',apiRoutes)
//
// module.exports = {
//     devServer: {
//         before(app) {
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
//         }
//     }
// }


// 导入express
// const express = require('express');
//
// // 创建express实例
// const app = express();
//
// // 读取json数据
// const goods = require('./data/goods');
// const ratings = require('./data/ratings');
// const seller = require('./data/seller');
//
// module.exports = {
//     // 根路径
//     publicPath: '/',
//
//     outputDir: 'dist',
//
//     assetsDir: 'assets',
//
//     lintOnSave: false,
//
//     devServer: {
//         open: false,
//         // host: 'localhost',
//         port: 8080,
//         https: false,
//
//         proxy:{
//             'api':{
//                 target:'http//localhost:8080/api',
//                 ws:true,
//                 changOrigin:true,
//                 pathRewrite:{
//                     '^/api':''
//                 }
//             }
//         },
//
//         before(app){
//
//             app.get('/api/goods',(req,res) =>{
//                 res.json(goods)
//             });
//
//             app.get('/api/ratings',(req,res) =>{
//                 res.json(ratings)
//             });
//
//             app.get('/api/seller',(req,res) =>{
//                 res.json(seller)
//             });
//         }
//
//     }
//
// }