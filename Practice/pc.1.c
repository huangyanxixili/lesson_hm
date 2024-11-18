#include <stdio.h>
#include <stdlib.h>

#define OVERFLOW 0
#define MAXSIZE 100

typedef struct {
    char* base;
    int front;
    int rear;
} SqQueue;

SqQueue Q, Q1, Q2, Q3;

void InitSqQueue(SqQueue *Q) {
    Q->base = (char*)malloc(sizeof(char) * MAXSIZE);
    if (!Q->base) {
        printf("存储分配失败\n");
        exit(OVERFLOW);
    }
    Q->front = Q->rear = 0;
}

void PrintQueue(SqQueue Q) {
    if (Q.rear == Q.front) {
        printf("队空\n");
        return;
    }
    int flag = Q.front;
    while (Q.rear != flag) {
        printf("%c ", Q.base[flag]);
        flag = (flag + 1) % MAXSIZE;
    }
    printf("\n");
}

void EnQueue(SqQueue *Q, char elem) {
    if ((Q->rear + 1) % MAXSIZE == Q->front) {
        printf("队满\n");
        exit(OVERFLOW);
    }
    Q->base[Q->rear] = elem;
    Q->rear = (Q->rear + 1) % MAXSIZE;
}

void OutQueue(SqQueue *Q, char *e) {
    if (Q->front == Q->rear) {
        printf("队空\n");
        exit(OVERFLOW);
        return;
    }
    *e = Q->base[Q->front];
    Q->front = (Q->front + 1) % MAXSIZE;
}

int CountQueue(SqQueue Q) {
    return (Q.rear - Q.front + MAXSIZE) % MAXSIZE;
}

int EmptyQueue(SqQueue Q) {
    return Q.front == Q.rear;
}

void FerryCars10(SqQueue *Q, SqQueue *Q1, SqQueue *Q2, SqQueue *Q3) {
    int i = 0, j = 0; // i记录连续上车客车数，j记录船上车数
    while (j < 10) {
        if (i < 4 && !EmptyQueue(*Q1)) {
            char e;
            OutQueue(Q1, &e);
            EnQueue(Q, e);
            i++;
            j++;
        } else if (i == 4 && !EmptyQueue(*Q2)) {
            char e;
            OutQueue(Q2, &e);
            EnQueue(Q, e);
            j++;
            i = 0;
        } else {
            while (i < 4 && !EmptyQueue(*Q2)) {
                char e;
                OutQueue(Q2, &e);
                EnQueue(Q, e);
                i++;
                j++;
            }
            i = 0;
        }
        if (EmptyQueue(*Q1) && EmptyQueue(*Q2)) {
            break;
        }
    }
}

void FerryCars10_Menu() {
    SqQueue Q, Q1, Q2, Q3;
    InitSqQueue(&Q);
    InitSqQueue(&Q1);
    InitSqQueue(&Q2);
    InitSqQueue(&Q3);
    printf("*************************\n");
    printf("* 1:客车入队 *\n");
    printf("* 2:货车入队 *\n");
    printf("*************************\n");
    printf("请输入来车序列:\n");
    int choose;
    while (scanf("%d", &choose) && choose != 0) {
        if (choose == 1) {
            EnQueue(&Q1, 'A');
        } else if (choose == 2) {
            EnQueue(&Q2, 'B');
        } else {
            printf("无效的选择！请重新输入。\n");
        }
    }
    printf("客车队列:\n");
    PrintQueue(Q1);
    printf("货车队列:\n");
    PrintQueue(Q2);
    FerryCars10(&Q, &Q1, &Q2, &Q3);
    while (!EmptyQueue(Q)) {
        char elem;
        OutQueue(&Q, &elem);
        EnQueue(&Q3, elem);
    }
    printf("渡船队列:\n");
    PrintQueue(Q3);
    free(Q.base);
    free(Q1.base);
    free(Q2.base);
    free(Q3.base);
}

void FerryCars_over10(SqQueue *Q, SqQueue *Q1, SqQueue *Q2, SqQueue *Q3) {
    while (!EmptyQueue(*Q1) || !EmptyQueue(*Q2)) {
        FerryCars10(Q, Q1, Q2, Q3);
        while (!EmptyQueue(*Q)) {
            char elem;
            OutQueue(Q, &elem);
            EnQueue(Q3, elem);
        }
    }
}

void FerryCars_over10_Menu() {
    SqQueue Q, Q1, Q2, Q3;
    InitSqQueue(&Q);
    InitSqQueue(&Q1);
    InitSqQueue(&Q2);
    InitSqQueue(&Q3);
    printf("*************************\n");
    printf("* 1:客车入队 *\n");
    printf("* 2:货车入队 *\n");
    printf("* 0:停止入队 *\n");
    printf("*************************\n");
    int choose;
    while (scanf("%d", &choose) && choose != 0) {
        if (choose == 1) {
            EnQueue(&Q1, 'A');
        } else if (choose == 2) {
            EnQueue(&Q2, 'B');
        } else {
            printf("无效的选择！请重新输入。\n");
        }
    }
    printf("客车队列:\n");
    PrintQueue(Q1);
    printf("货车队列:\n");
    PrintQueue(Q2);
    FerryCars_over10(&Q, &Q1, &Q2, &Q3);
    printf("渡江队列:\n");
    PrintQueue(Q3);
    free(Q.base);
    free(Q1.base);
    free(Q2.base);
    free(Q3.base);
}

void FerryCars(SqQueue *Q, SqQueue *Q1, SqQueue *Q2, SqQueue *Q3) {
    FerryCars10(Q, Q1, Q2, Q3);
}

void FerryCars_Menu() {
    SqQueue Q, Q1, Q2, Q3;
    InitSqQueue(&Q);
    InitSqQueue(&Q1);
    InitSqQueue(&Q2);
    InitSqQueue(&Q3);
    printf("*************************\n");
    printf("* 0:停止入队 *\n");
    printf("* 1:客车入队 *\n");
    printf("* 2:货车入队 *\n");
    printf("* Y:继续来车 *\n");
    printf("* N:结束来车 *\n");
    printf("*************************\n");
    char Inquiry;
    while (1) {
        printf("是否来车(Y/N): ");
        scanf(" %c", &Inquiry); // 注意这里加了一个空格以忽略之前的换行符
        if (Inquiry == 'Y') {
            int choose;
            printf("请输入来车序列(0表示停止):\n");
            while (scanf("%d", &choose) && choose != 0) {
                if (choose == 1) {
                    EnQueue(&Q1, 'A');
                } else if (choose == 2) {
                    EnQueue(&Q2, 'B');
                } else {
                    printf("无效的选择！请重新输入。\n");
                }
            }
            printf("客车队列:\n");
            PrintQueue(Q1);
            printf("货车队列:\n");
            PrintQueue(Q2);
            FerryCars(&Q, &Q1, &Q2, &Q3);
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
            printf("客车队列:\n");
            PrintQueue(Q1);
            printf("货车队列:\n");
            PrintQueue(Q2);
            printf("渡船队列:\n");
            PrintQueue(Q);
            printf("渡江队列:\n");
            PrintQueue(Q3);
        } else if (Inquiry == 'N') {
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
    free(Q.base);
    free(Q1.base);
    free(Q2.base);
    free(Q3.base);
}

void Menu() {
    printf("*************************\n");
    printf("* 1:10辆车过江 *\n");
    printf("* 2:10辆车以上过江 *\n");
    printf("* 3:车辆随时过江 *\n");
    printf("* 0:退出 *\n");
    printf("*************************\n");
}

int Choose_Menu() {
    int function;
    do {
        Menu();
        printf("请输入功能: ");
        scanf("%d", &function);
        switch (function) {
            case 1:
                FerryCars10_Menu();
                printf("是否继续使用？请选择功能（0退出）：");
                scanf("%d", &function);
                break;
            case 2:
                FerryCars_over10_Menu();
                printf("是否继续使用？请选择功能（0退出）：");
                scanf("%d", &function);
                break;
            case 3:
                FerryCars_Menu();
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

int main() {
    Choose_Menu();
    return 0;
}