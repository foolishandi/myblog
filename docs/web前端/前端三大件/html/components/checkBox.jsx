import {
  Button,
  Checkbox,
  Input,
  message,
  Tag,
  InputNumber,
  Radio,
} from "antd";
import React, { useState } from "react";
import { useRef } from "react";

import fakeData from "./mock/checkBox";
import "./checkBox.css";

const cacheData = JSON.parse(JSON.stringify(fakeData));

export default function MyCheckBox() {
  const [state, setState] = useState(cacheData);
  const checkList = state.filter((itm) => itm.checked);
  const count = checkList.length;
  const rskDisabled =
    checkList.length == 2 &&
    checkList.filter((e) => e.rsk && e.rsk.replace("r", "") > 1).length;
  const TestCheckBox = ({ item }) => {
    const inputRef = useRef();
    const [value, setValue] = useState(item.input);

    const updateCheck = (item, checked, input) => {
      const count = checkList.length;
      //   勾选时，input空值判断与提醒
      const checkInputNull = () => {
        if (!input && checked) {
          message.warning("请输入正确金额！");
          checked = false;
        }
      };

      //   已选择4项，但是又勾选了一项
      if (count == 4 && checked) {
        message.warning("最多勾选4项");
        checked = false;
      }
      // 已选择2项，且包括高风险
      if (
        checkList.filter((e) => e.rsk && e.rsk.replace("r", "") > 1).length &&
        count == 2 &&
        checked
      ) {
        message.warning(
          `勾选包含高风险项，最多勾选2项，现已勾选${count}项，请先取消其他选项，再勾选本选项！`
        );
        checked = false;
      }
      //   当前选择的是高风险，且已选择2或3项
      if (
        item.rsk &&
        item.rsk.replace("r", "") > 1 &&
        (count == 3 || count == 2) &&
        checked
      ) {
        message.warning(
          `勾选包含高风险项，最多勾选2项，现已勾选${count}项，请先取消其他选项，再勾选本选项！`
        );
        checked = false;
      }

      checkInputNull();

      setState(() => {
        return state.map((currency) => {
          if (currency.id == item.id) {
            currency.checked = checked;
            currency.input = input;
          }
          return currency;
        });
      });
    };
    const handleChange = (e) => {
      updateCheck(item, !item.checked, value);
    };

    const inputChange = (value) => {
      const isNull = !!value;
      updateCheck(item, isNull, value);
    };
    return (
      <div
        className="opt"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "3px 5px",
        }}
      >
        <div className="info">
          <Checkbox
            checked={item.checked}
            onChange={handleChange}
            className={
              count == 4 || rskDisabled ? (!item.checked ? "diasbled" : "") : ""
            }
          ></Checkbox>
          <span>{item.name}</span>
          {item.rsk ? <Tag color="red">{item.rsk} </Tag> : null}
        </div>
        <div className="input">
          {!item.type ? (
            <div>
              <InputNumber
                ref={inputRef}
                style={{ width: "250px" }}
                placeholder={`最大金额${item.value}`}
                value={value}
                onChange={(e) => {
                  setValue(e);
                }}
                onBlur={() => {
                  inputChange(value);
                }}
                max={item.value}
              ></InputNumber>
              <Button
                type="link"
                onClick={() => {
                  setValue(item.value);
                  inputRef.current.focus();
                }}
              >
                最大
              </Button>
            </div>
          ) : (
            <div>
              <Radio
                onClick={() => {
                  // setValue(0);
                  inputChange(0);
                }}
                checked={!item.input}
              >
                0
              </Radio>
              <Radio
                onClick={() => {
                  // setValue(item.value);
                  inputChange(item.value);
                }}
                checked={!!item.input}
              >
                {item.value}
              </Radio>
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div>
        {cacheData.map((item) => (
          <TestCheckBox key={item.id} item={item}></TestCheckBox>
        ))}
      </div>
      <div className="toatl">
        <Tag color="red">已选择:{checkList.length || 0}项</Tag>
        <ol>
          {checkList.map((itm) => (
            <li key={Math.random()}>
              {itm.name}:{itm.input}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
