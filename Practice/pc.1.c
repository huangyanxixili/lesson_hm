#include <stdio.h>
#include <stdlib.h>

// 定义队列满或溢出的状态码
#define OVERFLOW 0
// 定义队列的最大容量
#define MAXSIZE 100

// 定义顺序队列结构体
typedef struct {
    char* base; // 队列基地址
    int front;  // 队头指针
    int rear;   // 队尾指针
} SqQueue;

// 全局队列变量
SqQueue Q, Q1, Q2, Q3;

// 初始化队列
void InitSqQueue(SqQueue *Q) {
    Q->base = (char*)malloc(sizeof(char) * MAXSIZE); // 分配内存
    if (!Q->base) { // 检查内存是否分配成功
        printf("存储分配失败\n");
        exit(OVERFLOW);
    }
    Q->front = Q->rear = 0; // 初始化队头队尾指针
}

// 打印队列
void PrintQueue(SqQueue Q) {
    if (Q.rear == Q.front) { // 判断队列是否为空
        printf("队空\n");
        return;
    }
    int flag = Q.front;
    while (Q.rear != flag) { // 遍历队列元素并打印
        printf("%c ", Q.base[flag]);
        flag = (flag + 1) % MAXSIZE; // 循环队列处理
    }
    printf("\n");
}

// 入队操作
void EnQueue(SqQueue *Q, char elem) {
    if ((Q->rear + 1) % MAXSIZE == Q->front) { // 检查队列是否已满
        printf("队满\n");
        exit(OVERFLOW);
    }
    Q->base[Q->rear] = elem; // 将元素加入队尾
    Q->rear = (Q->rear + 1) % MAXSIZE; // 更新队尾指针
}

// 出队操作
void OutQueue(SqQueue *Q, char *e) {
    if (Q->front == Q->rear) { // 检查队列是否为空
        printf("队空\n");
        exit(OVERFLOW);
        return;
    }
    *e = Q->base[Q->front]; // 取出队头元素
    Q->front = (Q->front + 1) % MAXSIZE; // 更新队头指针
}

// 计算队列中的元素个数
int CountQueue(SqQueue Q) {
    return (Q.rear - Q.front + MAXSIZE) % MAXSIZE;
}

// 判断队列是否为空
int EmptyQueue(SqQueue Q) {
    return Q.front == Q.rear;
}

// 处理10辆车过江的情况
void FerryCars10(SqQueue *Q, SqQueue *Q1, SqQueue *Q2, SqQueue *Q3) {
    int i = 0, j = 0; // i记录连续上车客车数，j记录船上车数
    while (j < 10) { // 循环直到装满10辆车
        if (i < 4 && !EmptyQueue(*Q1)) { // 如果客车队列不为空且连续上车的客车少于4辆
            char e;
            OutQueue(Q1, &e); // 客车上船
            EnQueue(Q, e);
            i++;
            j++;
        } else if (i == 4 && !EmptyQueue(*Q2)) { // 连续上车的客车已达4辆，且货车队列不为空
            char e;
            OutQueue(Q2, &e); // 货车上船
            EnQueue(Q, e);
            j++;
            i = 0; // 重置连续上车的客车计数器
        } else { // 如果客车和货车队列均为空或已达到条件限制
            while (i < 4 && !EmptyQueue(*Q2)) {
                char e;
                OutQueue(Q2, &e); // 继续装载货车直到满足条件
                EnQueue(Q, e);
                i++;
                j++;
            }
            i = 0;
        }
        if (EmptyQueue(*Q1) && EmptyQueue(*Q2)) { // 如果所有车都已上船
            break;
        }
    }
}

// 10辆车过江菜单
void FerryCars10_Menu() {
    // 初始化队列
    SqQueue Q, Q1, Q2, Q3;
    InitSqQueue(&Q);
    InitSqQueue(&Q1);
    InitSqQueue(&Q2);
    InitSqQueue(&Q3);

    // 显示菜单并读取用户输入
    printf("*************************\n");
    printf("* 1:客车入队 *\n");
    printf("* 2:货车入队 *\n");
    printf("*************************\n");
    printf("请输入来车序列:\n");
    int choose;
    while (scanf("%d", &choose) && choose != 0) {
        if (choose == 1) {
            EnQueue(&Q1, 'A'); // 客车上队
        } else if (choose == 2) {
            EnQueue(&Q2, 'B'); // 货车上队
        } else {
            printf("无效的选择！请重新输入。\n");
        }
    }

    // 打印队列状态
    printf("客车队列:\n");
    PrintQueue(Q1);
    printf("货车队列:\n");
    PrintQueue(Q2);

    // 调用函数处理10辆车过江
    FerryCars10(&Q, &Q1, &Q2, &Q3);

    // 将渡船队列中的车辆转移到渡江队列中
    while (!EmptyQueue(Q)) {
        char elem;
        OutQueue(&Q, &elem);
        EnQueue(&Q3, elem);
    }

    // 打印最终队列状态
    printf("渡船队列:\n");
    PrintQueue(Q3);

    // 释放队列内存
    free(Q.base);
    free(Q1.base);
    free(Q2.base);
    free(Q3.base);
}

// 处理10辆车以上过江的情况
void FerryCars_over10(SqQueue *Q, SqQueue *Q1, SqQueue *Q2, SqQueue *Q3) {
    while (!EmptyQueue(*Q1) || !EmptyQueue(*Q2)) { // 循环直到所有车都过江
        FerryCars10(Q, Q1, Q2, Q3); // 每次处理10辆车
        while (!EmptyQueue(*Q)) { // 将渡船队列中的车辆转移到渡江队列中
            char elem;
            OutQueue(Q, &elem);
            EnQueue(Q3, elem);
        }
    }
}

// 10辆车以上过江菜单
void FerryCars_over10_Menu() {
    // 初始化队列
    SqQueue Q, Q1, Q2, Q3;
    InitSqQueue(&Q);
    InitSqQueue(&Q1);
    InitSqQueue(&Q2);
    InitSqQueue(&Q3);

    // 显示菜单并读取用户输入
    printf("*************************\n");
    printf("* 1:客车入队 *\n");
    printf("* 2:货车入队 *\n");
    printf("* 0:停止入队 *\n");
    printf("*************************\n");
    int choose;
    while (scanf("%d", &choose) && choose != 0) {
        if (choose == 1) {
            EnQueue(&Q1, 'A'); // 客车上队
        } else if (choose == 2) {
            EnQueue(&Q2, 'B'); // 货车上队
        } else {
            printf("无效的选择！请重新输入。\n");
        }
    }

    // 打印队列状态
    printf("客车队列:\n");
    PrintQueue(Q1);
    printf("货车队列:\n");
    PrintQueue(Q2);

    // 调用函数处理超过10辆车过江
    FerryCars_over10(&Q, &Q1, &Q2, &Q3);

    // 打印最终队列状态
    printf("渡江队列:\n");
    PrintQueue(Q3);

    // 释放队列内存
    free(Q.base);
    free(Q1.base);
    free(Q2.base);
    free(Q3.base);
}

// 处理车辆随时过江的情况
void FerryCars(SqQueue *Q, SqQueue *Q1, SqQueue *Q2, SqQueue *Q3) {
    FerryCars10(Q, Q1, Q2, Q3); // 调用处理10辆车过江的函数
}

// 车辆随时过江菜单
void FerryCars_Menu() {
    // 初始化队列
    SqQueue Q, Q1, Q2, Q3;
    InitSqQueue(&Q);
    InitSqQueue(&Q1);
    InitSqQueue(&Q2);
    InitSqQueue(&Q3);

    // 显示菜单
    printf("*************************\n");
    printf("* 0:停止入队 *\n");
    printf("* 1:客车入队 *\n");
    printf("* 2:货车入队 *\n");
    printf("* Y:继续来车 *\n");
    printf("* N:结束来车 *\n");
    printf("*************************\n");

    // 主循环
    char Inquiry;
    while (1) {
        printf("是否来车(Y/N): ");
        scanf(" %c", &Inquiry); // 注意这里加了一个空格以忽略之前的换行符
        if (Inquiry == 'Y') {
            int choose;
            printf("请输入来车序列(0表示停止):\n");
            while (scanf("%d", &choose) && choose != 0) {
                if (choose == 1) {
                    EnQueue(&Q1, 'A'); // 客车上队
                } else if (choose == 2) {
                    EnQueue(&Q2, 'B'); // 货车上队
                } else {
                    printf("无效的选择！请重新输入。\n");
                }
            }

            // 打印队列状态
            printf("客车队列:\n");
            PrintQueue(Q1);
            printf("货车队列:\n");
            PrintQueue(Q2);

            // 处理车辆过江
            FerryCars(&Q, &Q1, &Q2, &Q3);

            // 处理渡船队列
            if (CountQueue(Q) == 10) {
                printf("渡船队列:\n");
                PrintQueue(Q);
                printf("船满自动发船\n");
                while (!EmptyQueue(Q)) {
                    char elem;
                    OutQueue(&Q, &elem);
                    EnQueue(&Q3, elem);
                }
            } else if (CountQueue(Q) < 10) {
                if (EmptyQueue(Q1) && EmptyQueue(Q2)) {
                    printf("船未满，但岸上已无车等待，是否发船（Y/N）:");
                    char iq;
                    scanf(" %c", &iq);
                    if (iq == 'Y') {
                        printf("渡船队列:\n");
                        PrintQueue(Q);
                        while (!EmptyQueue(Q)) {
                            char elem;
                            OutQueue(&Q, &elem);
                            EnQueue(&Q3, elem);
                        }
                    }
                }
            }

            // 打印最终队列状态
            printf("客车队列:\n");
            PrintQueue(Q1);
            printf("货车队列:\n");
            PrintQueue(Q2);
            printf("渡船队列:\n");
            PrintQueue(Q);
            printf("渡江队列:\n");
            PrintQueue(Q3);
        } else if (Inquiry == 'N') {
            // 打印最终队列状态
            printf("客车队列:\n");
            PrintQueue(Q1);
            printf("货车队列:\n");
            PrintQueue(Q2);
            printf("渡船队列:\n");
            PrintQueue(Q);
            printf("渡江队列:\n");
            PrintQueue(Q3);
            break;
        } else {
            printf("输入错误，请重新输入(Y/N):");
        }
    }

    // 释放队列内存
    free(Q.base);
    free(Q1.base);
    free(Q2.base);
    free(Q3.base);
}

// 显示主菜单
void Menu() {
    printf("*************************\n");
    printf("* 1:10辆车过江 *\n");
    printf("* 2:10辆车以上过江 *\n");
    printf("* 3:车辆随时过江 *\n");
    printf("* 0:退出 *\n");
    printf("*************************\n");
}

// 选择菜单项
int Choose_Menu() {
    int function;
    do {
        Menu(); // 显示菜单
        printf("请输入功能: ");
        scanf("%d", &function);
        switch (function) {
            case 1:
                FerryCars10_Menu(); // 10辆车过江
                printf("是否继续使用？请选择功能（0退出）：");
                scanf("%d", &function);
                break;
            case 2:
                FerryCars_over10_Menu(); // 10辆车以上过江
                printf("是否继续使用？请选择功能（0退出）：");
                scanf("%d", &function);
                break;
            case 3:
                FerryCars_Menu(); // 车辆随时过江
                printf("是否继续使用？请选择功能（0退出）：");
                scanf("%d", &function);
                break;
            case 0:
                printf("退出程序...\n");
                break;
            default:
                printf("无效的功能选择！请重新输入。\n");
        }
    } while (function != 0);
    return 0;
}

// 主函数
int main() {
    Choose_Menu(); // 调用菜单选择函数
    return 0;
}