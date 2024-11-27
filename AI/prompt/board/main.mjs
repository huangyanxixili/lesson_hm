import OpenAI from "openai";
import dotenv from "dotenv";

// 将.env 读入process.env 对象中
dotenv.config();

// 实例化大模型对象
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_BASE_URL
})

// 封装了一个LLM的通用接口函数
const getCompletion = async (prompt, model="gpt-3.5-turbo") => {
    // 模拟用户提出的问题
    const messages = [{
        role: "user",
        content: prompt
    }];
    // AIGC chat 接口
    const response = await client.chat.completions.create({
        model: model,
        messages: messages,
        // LLM 生成内容的文本的随机性 0-1 越大越随机，越小越严格
        temperature: 0.1,
    });
    // 解析返回结果
    return response.choices[0].message.content;
}

const main = async () => {
    const user_messages = [
        "La performance du système est plus lente que d'habitude.",  //系统的性能比平时慢         
        "Mi monitor tiene píxeles que no se iluminan.",              //我的显示器有些像素点不亮。
        "Il mio mouse non funziona",                                // 我的鼠标坏了
        "Mój klawisz Ctrl jest zepsuty",                            // 我的Ctrl键坏了
        "我的屏幕在闪烁"                    
    ]
    // for of es6的遍历
    // 技术循环 有什么好的地方？ 
    for(let issue of user_messages) {
        // 简洁 + 代码可读性的提升
        console.log(issue);
        const prompt = `
        Tell me what language this is: "${issue}" 
        `
        const countryLanguage = await getCompletion(prompt);
        const resultPrompt = `
            帮我翻译以下的文字到中文，"${issue}"
        `   

        const result = await getCompletion(resultPrompt);
        console.log(`${countryLanguage},翻译结果是：${result}`)
    }// 在词法环境中创建一个小的调用栈
}

main();

