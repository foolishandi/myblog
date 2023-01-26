import { envUrl } from "/src/utils/env";
const iframe1 = envUrl() + "/html/drop/drop.html";
const iframe2 = envUrl() + "/html/vertificationCode1";


- 动态水滴 
<a href={iframe1} target='_blank'>见测试页面</a> 

- 图片验证码
<a href={iframe2} target='_blank'>见测试页面</a> 
