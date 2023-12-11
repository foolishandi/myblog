## nginx常规配置

```yaml
    server {
        listen 80 ;
        listen [::]:80 ;

        root /var/www/shop/dist;

        index index.html index.htm index.nginx-debian.html;

        server_name _;

        location / {
            try_files $uri $uri/ /index;
        }
        location ^~/api/ {
            proxy_pass https://api.shop.eduwork.cn;  # 后端接口地址
            add_header 'Access-Control-Allow-Origin' '*'; # 跨域
            # rewrite ^/api/(.*)$ /$1 break; # 删除配置规则
        }

    }
```
