# 手写单链表
```c++
#include<iostream>

using namespace std;
const int N = 100010;

int head;//头指针，指向的下一个指针
int e[N];//节点i的值
int ne[N];//节点i的next指针是多少
int idx;//存储当前用到的哪个点

//初始化
void init() {
	head = -1;//-1为空集的指针，初始化将head -> -1
	idx = 0;
}

//将x插入头结点
void add_to_head(int x){
	e[idx] = x;//在当前节点存储x到e[idx]
	ne[idx] = head;//将插入的节点的next指针指向原本head指向的指针,即head -> next1中idx替代head的位置变为idx -> next1
	head = idx;//将头节点的指针指向存入的节点，即head -> next1中head指向变为head -> idx
	idx++;//此idx使用过了，指向下一个指针
}

//将x插入下标k节点之后
void add(int k, int x) {
	e[idx] = x;
	ne[idx] = ne[k];
	ne[k] = idx++;
}

//将下标是k的后面一个节点删除
void remove(int k) {
	ne[k] = ne[ne[k]];
}

int main()
{
    for(int i = head; i != -1; i = ne[i]) cout << e[i] << " ";//遍历链表
    return 0;
}
```