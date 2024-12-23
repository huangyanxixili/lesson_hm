<template>
    <div class="container">
        <!-- 导航 -->
        <nav class="nav"><!-- html5 语义化标签 nav -->
            <div class="time">{{ localTime }}</div>
            <div class="city">切换城市</div>
        </nav>
        <!-- 天气 -->
        <main class="city-info">
            <div class="city-name">{{ weatherData.city }}</div>
            <div class="weather">{{ weatherData.weather }}</div>
            <h2 class="temp">
                <em>{{ weatherData.temperature }}</em>℃
            </h2>
            <div class="detail">
                <span>风力：{{ weatherData.windPower }}级</span>
                <span>风向：{{ weatherData.windDirection }}</span>
                <span>空气湿度：{{ weatherData.humidity }}</span>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// 第三步：引入高德地图
import AMapLoader from '@amap/amap-jsapi-loader';

const localTime = ref("00:00")

const weatherData = ref({
    city: "广州",
    weather: "多云",
    temperature: 20,
    windPower: 1,
    windDirection: "东北风",
    humidity: 60
})

const init_map = () => {
    AMapLoader.load({
        key: '',
        version: '2.0',
        plugins: ['AMap.CitySearch']
    }).then(AMap => {
        AMap.plugin('AMap.CitySearch', function () {
            var citySearch = new AMap.CitySearch();
            citySearch.getLocalCity(function (status, result) {
                if (status === 'complete' && result.info === 'OK') {
                    console.log(result.city);
                }
            })
        })
    })
}

// init_map();
// 当组件挂载完成再执行，确保地图的初始化操作在组件已经被渲染到页面上之后执行。
// 因为init_map会很耗时，可能会因为DOM元素还未完全准备好而导致无法正确渲染，导致页面卡住
onMounted(() => {
    init_map();
    setInterval(() => {
        localTime.value = new Date().toLocaleString();
    },1000)
})
</script>

<style scoped>
.container {
    min-height: 100vh;
    background-color: #000;
    opacity: 0.6;
    color: #fff;
}
.nav {
    overflow: auto;
    padding: 10px;
}
.city {
    float: right;
}
.time {
    float: left;
}
.city-info {
    text-align: center;
}
.temp {
    font-size: 26px;
}
.temp em {
    font-size: 34px;
}
</style>