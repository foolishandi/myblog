[时间日期相关](https://blog.csdn.net/Rita_2017/article/details/124015352?ops_request_misc=&request_id=&biz_id=102&utm_term=c++%20%E6%97%A5%E6%9C%9F&utm_medium=distribute.pc_search_result.none-task-blog-2~blog~sobaiduweb~default-1-124015352.268^v1^koosearch&spm=1018.2226.3001.4450)

```
两个类型：
time_t：表示距离 UTC 时间 1970-01-01 00:00:00 的秒数。也叫做日历时，类型是  long
clock_t: 只用于程序计时，貌似其他的没它什么事。
struct tm：通常用于存储本地时。
```
## 主要知识点
1.Coordinated Universal Time(UTC)：

协调世界时，又称世界标准时间，也即格林威治标准时间(Greenwich Mean Time,GMT)，中国内地的时间与UTC得时差为+8，也即UTC+8，美国为UTC-5。

2.Calendar Time：

日历时间，是用“从一个标准时间点到此时的时间经过的秒数”来表示的时间。标准时间点对不同编译器可能会不同，但对一个编译系统来说，标准时间是不变的。

3.epoch：时间点。

在标准c/c++中是一个整数，用此时的时间和标准时间点相差的秒数（即日历时间）来表示

4.clock tick：

时钟计时单元（而不叫做时钟滴答次数），一个时钟计时单元的时间长短是由cpu控制的，一个clock tick不是cpu的一个时钟周期，而是c/c++的一个基本计时单位。

## 常用函数
```c++
clock:        获取程序开始执行后占用的处理器时间，返回值clock_t。
// 函数原型: clock_t clcok()
// 函数功能: 获取程序开始执行后占用的处理器时间
// 函数返回: 一般 返回值/CLOCK_PER_SEC 来已秒来表示时间

time：       获取当前系统时间（UTC时间）的time_t值。
// 函数原型: time_t time(time_t *timer)
// 函数功能: 得到机器的日历时间或者设置日历时间
// 函数返回: 机器日历时间
// 参数说明: timer=NULL时得到机器日历时间，timer=时间数值时，用于设置日历时间，time_t是一个long类型
#include <time.h>
#include <stdio.h>
#include <dos.h>
int main()
{
    time_t t;
    t=time(NULL);
    printf("The number of seconds since January 1,1970 is %ld\n",t);
    return 0;
}


ctime：     将time_t值转换为表示本地时间的字符串。
// 函数原型: char *ctime(const time_t *tp)
// 函数功能: 得到日历时间
// 函数返回: 返回字符串格式：星期,月,日,小时:分:秒,年
// 参数说明: time-该参数应由函数time获得 等同于 astime( localtime(tp) )
#include <stdio.h>
#include <time.h>
int main()
{
    time_t t;
    time(&t);
    printf("Today's date and time: %s",ctime(&t));
    return 0;
}

gmttime： 将time_t值转换为表示GMT时间的字符串。

localtime：将time_t转换为表示本地时间的strunct tm结构。
struct tm
{
    int	tm_sec;	/* Seconds: 0-59 (K&R says 0-61?) */
    int	tm_min;	/* Minutes: 0-59 */
    int	tm_hour;	/* Hours since midnight: 0-23 */
    int	tm_mday;	/* Day of the month: 1-31 */
    int	tm_mon;	/* Months *since* january: 0-11 */
    int	tm_year;	/* Years since 1900 */
    int	tm_wday;	/* Days since Sunday (0-6) */
    int	tm_yday;	/* Days since Jan. 1: 0-365 */
    int	tm_isdst;	/* +1 Daylight Savings Time, 0 No DST,* -1 don't know */
};

#include <time.h>
#include <stdio.h>
#include <dos.h>
int main()
{
    time_t timer;
    struct tm *tblock;
    timer=time(NULL);
    tblock=localtime(&timer);
    printf("Local time is: %s",asctime(tblock));
    return 0;
}

mktime：  将表示本地时间的struct tm转换为time_t。

asctime： 将struct tm转换为字符串形式。
// 函数原型: char* asctime(struct tm * ptr)
// 函数功能: 得到机器时间(日期时间转换为ASCII码)
// 函数返回: 返回的时间字符串格式为：星期,月,日,小时：分：秒,年
// 参数说明: 结构指针ptr应通过函数localtime()和gmtime()得到

difftime：  得到两个日历时之间的差值。
// 函数原型: double difftime(time_t time2, time_t time1)
// 函数功能: 得到两次机器时间差，单位为秒
// 函数返回: 时间差，单位为秒
// 参数说明: time1-机器时间一,time2-机器时间二.该参数应使用time函数获得
#include <time.h>
#include <stdio.h>
#include <dos.h>
#include <conio.h>
#include<cmath>
#include<windows.h>

int main()
{
	time_t first, second;
	system("cls");
	first = time(NULL);
	Sleep(1000);
	second = time(NULL);
	printf("The difference is: %f seconds", difftime(second, first));

	return 0;
}


strftime：  自定义把结构体tm的日期与时间信息转换为制定的格式。
```