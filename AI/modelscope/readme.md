# 魔搭社区
> 国内最大AI模型开发平台

## 大模型 LLM（Large(参数规模) Language Model）
- 输入 -> code(编程) -> 输出            //传统的开发方式
- 输入(prompt) -> LLM(大模型) -> 输出   //最酷的开发方式
- 参数规模单位是？ LLM 训练出来参数 上百亿 全球的知识 72B（72 Billion 即720亿） 

- 首选大模型
    为了业务，选择合适的大模型
        openai （闭源大模型，花费比较高）
        coze 豆包模型， qwen ，kimi （开源大模型，free）
- 魔搭社区
    国内最大的开源大模型社区

- 云端AI环境
- 机器学习（NLP）
    情感分析例子
- python 的语法
   - module （模块化）复用、职责分离
        from modelscope.pipelines import pipeline
        modelscope 魔搭社区 功能很多  pipeline 管道（nlp 派出管道，就像水管一样）

- damo/nlp_structbert_sentiment-classification_chinese-base
    模型有很多种， 达摩院/ 情感分析/分类 支持中文 
    医疗模型/ 金融模型/ 法律模型/

    pipeline(Tasks.text_classification, 
    'damo/nlp_structbert_sentiment-classification_chinese-base')
        pipeline 打开管道
        Tasks.text_classification 选则一项任务
        damo/nlp_structbert_sentiment-classification_chinese-base 选择模型
   - 模型训练完后就不成长了，新的知识没有，所以可能不太准确
        微调大模型  喂一些数据，并对数据进行标注

- 前后端为何要学LLM？
   - 端模型的时代要到来了
        小尺寸模型越来越强  AI手机 AI汽车（Robotaxi） AI具身智能
   - Marscode 提升学习和开发效率
   - 很多工作可以交给大模型
        输入 -> LLM -> 输出

- LLM 需要算力，来自GPU（显存）