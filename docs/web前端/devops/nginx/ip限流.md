
[参考文章](https://blog.csdn.net/u010227042/article/details/130299367?spm=1001.2101.3001.6650.2&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-130299367-blog-73301850.235%5Ev36%5Epc_relevant_default_base&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EYuanLiJiHua%7EPosition-2-130299367-blog-73301850.235%5Ev36%5Epc_relevant_default_base&utm_relevant_index=5)

```yaml

    http {
        # 定义一个key为$binary_remote_addr、名字为one、空间大小为10M、速度限制为1次每秒的limit_req_zone
        limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;
 
   	    ...
 
    	server {
 
            ...
 
            location /search/ {
                # 定义当前location请求受名为one的limit_req_zone限制，令牌数为5，请求溢出后直接报错
                limit_req zone=one burst=5 nodelay;
                ···
            }
	    }
	}

```