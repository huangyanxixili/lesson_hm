// 不用 import request from ''，而是使用 node 早期的 commonjs 模块化

// request-promise 负责发送请求的包
const request = require('request-promise')
// 解析request 拿到的html 字符串
const cheerio = require('cheerio')
const createCsvWriter = require('csv-writer').createObjectCsvWriter

// 常量 大写（不会发生改变） 配置项
const HOT_URL = 'https://tophub.today/n/KqndgxeLl9';
// network http 请求
request(HOT_URL)
    .then(html => {
    // 请求完成了
        // console.log(html); 打印出页面的html

    // 解析html 得到热榜   ? 
    // html 字符串 -> tr
    // 内存里模拟一个浏览器 cheerio
        const $ = cheerio.load(html);
        const hotList = [];
        $('.jc table tr').each((index,element) => {
            // console.log(index,element);
            // ${node}.find(querySelector)、
            const rank = 
                $(element).find('td:nth-child(1)').text().trim()
            const title = 
                $(element).find('td:nth-child(2)').text().trim()
            const heat = 
                $(element).find('td:nth-child(3)').text().trim()
            const link = 
                $(element).find('td:nth-child(2) a').attr('href').trim()
            hotList.push({
                rank,
                title,
                heat,
                link
            })
            // console.log(title);
        })

        const csvWriter = createCsvWriter({
            path: 'hot_list2.csv',
            header: [
                { id: 'rank',title: '排序' },
                { id: 'title',title: '标题' },
                { id: 'heat',title: '热度' },
                { id: 'link',title: '链接' },
            ]
        })

        csvWriter
            .writeRecords(hotList)
            .then(() => console.log('CSV file has been saved.'))
    })