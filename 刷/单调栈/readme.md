# 单调栈

这段时间在刷LeetCode，集中练习了一段时间单调栈，虽然有些难题还未解决，但是先简单记录一下一些常用的单调栈思想和心得。

个人认为比较有吸引力的题目：
- [接雨水](https://leetcode.cn/problems/trapping-rain-water/)
思路：
其实最开始的时候自己的思路是靠一行一行查找空余的位置，但是这种方法比较麻烦，而且不出所料，超时了。
然后就去学习了一下其他一些大佬的方法，个人觉得代码随想录的方法比较好理解，所以就记录一下。

其实也并不算难，主要是要理解如何使用单调栈。
可以思考一下，如何求一个位置的雨水，无非就是找这个位置左右两侧的高于此位置的最小高度，然后减去此位置的高度，就可以得到这个位置的雨水。
不妨假设左边柱子为：L，右边柱子为：R，那么雨水的高度就是：min(L, R) - height[mid]，宽度就是：R - L - 1。
而单调栈在此处的作用就是先进行递减栈，当遇到比栈顶元素大的元素时。（`R > st.top()`）
此时就将栈顶元素视为mid，然后将栈顶元素弹出，此时栈顶元素就是L，而当前元素就是R。

代码：
```c++
class Solution {
public:
    int trap(vector<int>& height) {
        stack<int> st;
        st.push(0);
        int sum = 0;
        for (int i = 1; i < height.size(); i++) {
            while (!st.empty() && height[i] > height[st.top()]) {
                int mid = st.top();
                st.pop();
                if (!st.empty()) {
                    int h = min(height[st.top()], height[i]) - height[mid];
                    int w = i - st.top() - 1;
                    sum += h * w;
                }
            }
            st.push(i);
        }
        return sum;
    }
};
```
- [柱状图中最大的矩形](https://leetcode.cn/problems/largest-rectangle-in-histogram/)

