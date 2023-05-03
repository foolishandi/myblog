import React, { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import locale from "@fullcalendar/core/locales/zh-cn";

export default function Fullcalendar() {
  const handleDateClick = (e) => {
    console.log(e);
  };
  const calendar = useRef(null);
  useEffect(() => {
    // 选择需要观察变动的节点
    const targetNode = document.getElementsByClassName(
      "fc-view-harness fc-view-harness-active"
    )[0];

    // 观察器的配置（需要观察什么变动）
    const config = { childList: true };

    // 当观察到变动时执行的回调函数
    const callback = function (mutationsList, observer) {
      // Use traditional 'for loops' for IE 11
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const addEle = mutation.addedNodes[0] ;
          if (addEle && addEle.classList.contains("fc-popover")) {
            const date = addEle.getAttribute("data-date");
            const parentEle = document.querySelector(
              `td[data-date="${date}"]`
            ) ;
            addEle.style.top = "0";
            addEle.style.left = "0";
            parentEle.style.position = "relative";
            parentEle?.appendChild(addEle);
          }
        }
      }
    };

    // 创建一个观察器实例并传入回调函数
    const observer = new MutationObserver(callback);

    // 以上述配置开始观察目标节点
    observer.observe(targetNode, config);

    return () => {
      // 之后，可停止观察
      observer.disconnect();
    };
  }, []);
  return (
    <div style={{ margin: 20 }}>
      <FullCalendar
        ref={calendar}
        plugins={[dayGridPlugin]}
        // 头部展示
        headerToolbar={{
          //  默认显示当前年月
          left: "title",
          // 设置中间显示的内容
        //   center: "title",
          // 右侧上一月，下一月，今天(逗号为紧相邻，空格为有间隙，不写哪个就不展示哪个按钮)
          right: "prev,next today",
        }}
        // 设置可以编辑：拖动，缩放
        // editable={true}
        initialView="dayGridMonth"
        // 空白点击事件
        dateClick={handleDateClick}
        // 这个中文显示
        locale={locale}
        // 设置可丢弃
        // droppable={true}
        // 事件数据
        dayMaxEvents={5}
        eventContent={(e) => {
          // console.log((e.view as any).getCurrentData());
          return e.event._def.title;
        }}
        moreLinkClassNames={"test"}
        moreLinkClick={(e) => {
          console.log(e);
          const events = e.allSegs.map((item) => item.event.toJSON()); //当前日期的所有事件

        }}
        dayPopoverFormat={{
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }}
        // expandRows
        events={[
          // display: 'background',
          {
            title: "女神节",
            start: "2023-04-14",
            end: "2023-04-16",
            backgroundColor: "green",
            id: "1",
            textColor: "white",
            cs: "4554",
          },
          {
            title: "女神节",
            start: "2023-04-14",
            end: "2023-04-14",
            backgroundColor: "green",
            id: "2",
            textColor: "white",
          },
          {
            title: "女神节",
            start: "2023-04-14",
            end: "2023-04-16",
            backgroundColor: "green",
            id: "23",
            textColor: "white",
          },
          {
            title: "女神节",
            start: "2023-04-14",
            end: "2023-04-14",
            backgroundColor: "green",
            id: "233",
            textColor: "white",
          },
          {
            title: "女神节",
            start: "2023-04-14",
            end: "2023-04-14",
            backgroundColor: "green",
            id: "2333",
            textColor: "white",
          },
          {
            title: "女神节",
            start: "2023-04-14",
            end: "2023-04-16",
            backgroundColor: "green",
            id: "23333",
            textColor: "white",
          },
          {
            title: "女神节2",
            start: "2023-04-07",
            end: "2023-04-09",
            backgroundColor: "Orange",
            id: "233333",
            textColor: "white",
          },
          {
            title: "女神节1",
            start: "2023-04-16",
            end: "2023-04-20",
            backgroundColor: "red",
            id: "4",
            textColor: "white",
          },
          {
            title: "99活动 甲乙丙",
            start: "2023-04-14",
            end: "2023-04-15",
            backgroundColor: "blue",
            id: "2",
            textColor: "white",
            display: "list-item",
          },
          {
            title: "99活动1",
            start: "2023-04-14",
            end: "2023-04-15",
            backgroundColor: "blue",
            id: "23333423",
            textColor: "white",
            display: "list-item",
          },
          {
            title: "99活动2",
            start: "2023-04-14",
            end: "2023-04-15",
            backgroundColor: "blue",
            id: "3",
            textColor: "white",
            display: "list-item",
          },
          {
            title: "99活动3",
            start: "2023-04-14",
            end: "2023-04-15",
            backgroundColor: "blue",
            id: "2333323",
            textColor: "white",
            display: "list-item",
          },
        ]}
      />
    </div>
  );
}