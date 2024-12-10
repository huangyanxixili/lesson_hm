// 生成一个18~55岁的随机年龄
function getRandomAge(min, max){
    return Math.floor(Math.random()* (max-min+1) + min);
}

getRandomAge(18,55);