
## 1. classnames
```js
npm i classnames
```
```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'

// basic
var classNames = require('classnames');

class Button extends React.Component {
  // ...
  render () {
    var btnClass = classNames({
      btn: true,
      'btn-pressed': this.state.isPressed,
      'btn-over': !this.state.isPressed && this.state.isHovered
    });
    return <button className={btnClass}>{this.props.label}</button>;
  }
}

//  css-modules
/* components/submit-button.js */
import { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './submit-button.css';

let cx = classNames.bind(styles);

export default class SubmitButton extends Component {
  render () {
    let text = this.props.store.submissionInProgress ? 'Processing...' : 'Submit';
    let className = cx({
      base: true,
      inProgress: this.props.store.submissionInProgress,
      error: this.props.store.errorOccurred,
      disabled: this.props.form.valid,
    });
    return <button className={className}>{text}</button>;
  }
};
```

## 2.[lodash](https://lodash.com/)


> Tested in Chrome 74-75, Firefox 66-67, IE 11, Edge 18, Safari 11-12, & Node.js 8-12.

### array

```js title='array'
// array
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]

_.difference([2, 1], [2, 3]);
// => [1]
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]

_.drop([1, 2, 3], 2);
// => [3]
var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
_.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']

// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3

_.intersection([2, 1], [2, 3]);
// => [2]
// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']

// The `_.property` iteratee shorthand.
_.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]

```

### collection

```js title='Collection'
// Collection
_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
// The `_.property` iteratee shorthand.
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }

_.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }
// The `_.property` iteratee shorthand.
_.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }

var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 }
];
_.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }

_.size([1, 2, 3]);
// => 3
_.size({ 'a': 1, 'b': 2 });
// => 2
_.size('pebbles');
// => 7
```
### object

```js title='object'
var object = { 'a': 1, 'b': 2, 'c': 1 };
_.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }
_.invertBy(object, function(value) {
  return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }
```

### string

```js title='string'
_.capitalize('FRED');
// => 'Fred'

_.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'
_.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'
```
## 3.[ahook](https://ahooks.js.org/zh-CN/)
### 请求

```js
// 请求
import { message } from 'antd';
import React, { useState } from 'react';
import { useRequest } from 'ahooks';

function editUsername(username: string): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject(new Error('Failed to modify username'));
      }
    }, 1000);
  });
}

export default () => {
  const [state, setState] = useState('');

  const { loading, run, cancel } = useRequest(editUsername, {
    manual: true,
    onSuccess: (result, params) => {
      setState('');
      message.success(`The username was changed to "${params[0]}" !`);
    },
    onError: (error) => {
      message.error(error.message);
    },
  });

  return (
    <div>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button disabled={loading} type="button" onClick={() => run(state)}>
        {loading ? 'Loading' : 'Edit'}
      </button>
      <button type="button" onClick={cancel} style={{ marginLeft: 16 }}>
        Cancel
      </button>
    </div>
  );
};

// 轮询
import { useRequest } from 'ahooks';
import React from 'react';
import Mock from 'mockjs';
import { message } from 'antd';

function getUsername() {
  console.log('polling getUsername Error');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(Mock.mock('@name')));
    }, 1000);
  });
}

export default () => {
  const { data, loading, run, cancel } = useRequest(getUsername, {
    pollingInterval: 1000,
    pollingWhenHidden: false,
    pollingErrorRetryCount: 3,
    manual: true,
    onError: (error) => {
      message.error(error.message);
    },
  });

  return (
    <>
      <p>Username: {loading ? 'Loading' : data}</p>
      <button type="button" onClick={run}>
        start
      </button>
      <button type="button" onClick={cancel} style={{ marginLeft: 16 }}>
        stop
      </button>
    </>
  );
};
```

### DOM
```js
// 组件外点击事件
import React, { useState, useRef } from 'react';
import { useClickAway } from 'ahooks';

export default () => {
  const [counter, setCounter] = useState(0);
  const ref = useRef<HTMLButtonElement>(null);
  useClickAway(() => {
    setCounter((s) => s + 1);
  }, 
  ref, //() => document.getElementById('use-click-away-button'),
  //  ['click', 'contextmenu'], //监听事件
  );

  return (
    <div>
      <button ref={ref} type="button">
        box
      </button>
      <p>counter: {counter}</p>
    </div>
  );
};
```
```js
// 拖拽
import React, { useRef, useState } from 'react';
import { useDrop, useDrag } from 'ahooks';

const DragItem = ({ data }) => {
  const dragRef = useRef(null);

  const [dragging, setDragging] = useState(false);

  useDrag(data, dragRef, {
    onDragStart: () => {
      setDragging(true);
    },
    onDragEnd: () => {
      setDragging(false);
    },
  });

  return (
    <div
      ref={dragRef}
      style={{
        border: '1px solid #e8e8e8',
        padding: 16,
        width: 80,
        textAlign: 'center',
        marginRight: 16,
      }}
    >
      {dragging ? 'dragging' : `box-${data}`}
    </div>
  );
};

export default () => {
  const [isHovering, setIsHovering] = useState(false);

  const dropRef = useRef(null);

  useDrop(dropRef, {
    onText: (text, e) => {
      console.log(e);
      alert(`'text: ${text}' dropped`);
    },
    onFiles: (files, e) => {
      console.log(e, files);
      alert(`${files.length} file dropped`);
    },
    onUri: (uri, e) => {
      console.log(e);
      alert(`uri: ${uri} dropped`);
    },
    onDom: (content: string, e) => {
      alert(`custom: ${content} dropped`);
    },
    onDragEnter: () => setIsHovering(true),
    onDragLeave: () => setIsHovering(false),
  });

  return (
    <div>
      <div ref={dropRef} style={{ border: '1px dashed #e8e8e8', padding: 16, textAlign: 'center' }}>
        {isHovering ? 'release here' : 'drop here'}
      </div>

      <div style={{ display: 'flex', marginTop: 8 }}>
        {['1', '2', '3', '4', '5'].map((e, i) => (
          <DragItem key={e} data={e} />
        ))}
      </div>
    </div>
  );
};
```

### 全屏
```js
import React, { useRef } from 'react';
import { useFullscreen } from 'ahooks';

export default () => {
  const ref = useRef(null);
  const [isFullscreen, { enterFullscreen, exitFullscreen, toggleFullscreen }] = useFullscreen(ref);
  return (
    <div ref={ref} style={{ background: 'white' }}>
      <div style={{ marginBottom: 16 }}>{isFullscreen ? 'Fullscreen' : 'Not fullscreen'}</div>
      <div>
        <button type="button" onClick={enterFullscreen}>
          enterFullscreen
        </button>
        <button type="button" onClick={exitFullscreen} style={{ margin: '0 8px' }}>
          exitFullscreen
        </button>
        <button type="button" onClick={toggleFullscreen}>
          toggleFullscreen
        </button>
      </div>
    </div>
  );
};
```
### mutation

```js
import { useMutationObserver } from 'ahooks';
import React, { useRef, useState } from 'react';

const App: React.FC = () => {
  const [width, setWidth] = useState(200);
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLDivElement>(null);

  useMutationObserver(
    (mutationsList) => {
      mutationsList.forEach(() => setCount((c) => c + 1));
    },
    ref,
    { attributes: true },
  );

  return (
    <div>
      <div ref={ref} style={{ width, padding: 12, border: '1px solid #000', marginBottom: 8 }}>
        current width：{width}
      </div>
      <button onClick={() => setWidth((w) => w + 10)}>widening</button>
      <p>Mutation count {count}</p>
    </div>
  );
};

export default App;
```
### 监听元素可见区域比例

```js
import React from 'react';
import { useInViewport } from 'ahooks';

export default () => {
  const [inViewport, ratio] = useInViewport(() => document.getElementById('children'), {
    threshold: [0, 0.25, 0.5, 0.75, 1],
    root: () => document.getElementById('parent'),
  });
  return (
    <div>
      <div style={{ width: 300, height: 300, overflow: 'scroll', border: '1px solid' }} id="parent">
        scroll here
        <div style={{ height: 800 }}>
          <div
            id="children"
            style={{
              border: '1px solid',
              height: 100,
              width: 100,
              textAlign: 'center',
              marginTop: 80,
            }}
          >
            observer dom
          </div>
        </div>
      </div>
      <div style={{ marginTop: 16, color: inViewport ? '#87d068' : '#f50' }}>
        <p>inViewport: {inViewport ? 'visible' : 'hidden'}</p>
        <p>ratio: {ratio}</p>
      </div>
    </div>
  );
};
```

### size改变

```js
import React from 'react';
import { useSize } from 'ahooks';

export default () => {
  const size = useSize(document.querySelector('body'));
  return (
    <div>
      <p>Try to resize the preview window </p>
      <p>
        width: {size?.width}px, height: {size?.height}px
      </p>
    </div>
  );
};
```

### useReactive

```js
import React from 'react';
import { useReactive } from 'ahooks';

export default () => {
  const state = useReactive({
    count: 0,
    inputVal: '',
    obj: {
      value: '',
    },
  });

  return (
    <div>
      <p> state.count：{state.count}</p>

      <button style={{ marginRight: 8 }} onClick={() => state.count++}>
        state.count++
      </button>
      <button onClick={() => state.count--}>state.count--</button>

      <p style={{ marginTop: 20 }}> state.inputVal: {state.inputVal}</p>
      <input onChange={(e) => (state.inputVal = e.target.value)} />

      <p style={{ marginTop: 20 }}> state.obj.value: {state.obj.value}</p>
      <input onChange={(e) => (state.obj.value = e.target.value)} />
    </div>
  );
};
```