# 黄佳老师AI课

- 直播预测

- 魔搭社区
    大模型中国社区，免费的，上传微调的模型
       - 阿里云提供的虚拟机
        python + ai 机器学习环境
           - python 的 notebook（.ipynb 后缀）
       - 机器学习线上实验室
           - 本地电脑带不动
           - 简单，方便 

- python 和 js
   - python 同步  js 异步 
   - 都是脚本语言

- pandas
   - 数据分析库
   - read_csv() 读取各种格式的文件
   - head(n) 读取前n条

- matplotlib
   - 数据可视化 

   - plt.plot(df_ads['转发量'], df_ads['成交额'], 'r.', label='data dot')
       - plt.plot()：这是 matplotlib.pyplot 模块中的一个函数，用于绘制折线图或散点图。
       - df_ads['转发量']：这是 pandas 数据框 df_ads 中的 转发量 列，作为散点图的 x 轴数据。
       - df_ads['成交额']：这是 pandas 数据框 df_ads 中的 成交额 列，作为散点图的 y 轴数据。
       - 'r.'：这是一个格式字符串，用于指定绘制的点的颜色和样式。r 表示红色（red），. 表示绘制的点为小圆点。
       - label='data dot'：这是一个可选参数，用于为绘制的点添加图例标签。在绘制图形时，可以使用 plt.legend() 函数显示图例。
   - 直观分析数据 

- sklearn
    python 流行的机器学习库
    LinearRegression() y = ax + b
    训练 容错
   - sklearn 和 逻辑区别
        选择模型，模型需要的数据，训练模型，测试模型
        train_test_split 训练和测试 数据集的划分