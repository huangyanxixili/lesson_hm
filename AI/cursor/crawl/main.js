const request = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
const fastCsv = require('fast-csv');

// 目标URL
const url = 'https://tophub.today/n/KqndgxeLl9';

// 发送HTTP请求获取网页内容
request(url)
    .then(html => {
        // 使用cheerio加载HTML
        const $ = cheerio.load(html);
        const hotList = [];

        // 解析表格中的每一行
        $('table tr').each((index, element) => {
            if (index === 0) return; // 跳过表头

            const rank = $(element).find('td:nth-child(1)').text().trim();
            const title = $(element).find('td:nth-child(2) a').text().trim();
            const heat = $(element).find('td:nth-child(3)').text().trim();
            const link = 'https://tophub.today' + $(element).find('td:nth-child(2) a').attr('href');

            hotList.push({ rank, title, heat, link });
        });

        // 将数据写入CSV文件
        const ws = fs.createWriteStream('hotlist.csv');
        fastCsv
            .write(hotList, { headers: true })
            .pipe(ws);

        console.log('数据已保存到 hotlist.csv');
    })
    .catch(err => {
        console.error(err);
    });