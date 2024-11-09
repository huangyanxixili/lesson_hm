# talk in data 传统方式和Prompt方式比较

NBA 赛季统计投篮数据 设计一个shot表，设计哪些字段
## 数据化
player_id  player_name  shot_made(是否命中) shot_type(2nd|3rd)  game_id 

team_id  team_name  season_1(03~04)  
event_type Feed Throw 罚球  |  Rebound 篮板  | ....
action_type Layup 上篮  |  Dunk  扣篮  |  Jump 跳投  | Hook Shot 勾手  | Fadeway 后仰投篮  | ....

shotDate
distance(距离)
position(位置) 

## 赛季投篮

一切皆可数据化，细致的去数学表达主题（shot）
赛季、球队、队员、得分（分数、动作、原因、结果）、zone（区域、距离、坐标）、position（位置、投篮位置）、left（分、秒）重要性

## AI 如何帮助我们设计数据表呢？
- 数据助理
    prompt 提示词（提问）

- 吴恩达的`prompt` engineering 善于向AI提问
   - 1.给定一个角色 role
   - 2.指定明确的任务
   - 3.约束必须做什么，不能做什么
   - 4.一步步做，细化任务
- prompt过程其实也是coding的过程

- 我想要设计一张NBA赛季投篮数据表，请给出相关字段，字段尽可能详细。
- 假设你是一位数据库工程师，请你帮我设计一张NBA赛季投篮数据表shots，数据表需要满足mysql的约束，请包含赛季、球队、球员、得分（得分与否、投篮动作、得分原因）、投篮位置、球员位置（如SG）、比赛时间、距离结束时间（分、秒），其他字段不需要给出，请返回sql，并给出原因。 