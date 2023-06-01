## 1.自动刷新nginx dns resolver

```dockfile
FROM ...

COPY ...

dns 脚本处理逻辑
1、复制挂载的nginx.conf到nginx-with-resolver.conf
2、判断nginx-with-resolver.conf中是否含有 ‘resolver’ 关键字指定了在这里修改为正确的resolver，如果有则替换。如果没有，则在每一个server块第一行
3、启动nginx
4、添加正确的resolver指定。

RUN  echo -e "#!/usr/bin/env bash \n\
    cp /opt/nginx/conf/nginx.conf /opt/nginx/conf/nginx-with-resolver.conf \n\
    set -e \n\
    dns=\`cat /etc/resolv.conf | grep nameserver | awk '{print\$2}'\` \n\
    if [ \$(grep -i resolver /opt/nginx/conf/nginx-with-resolver.conf | wc -l) -gt 0 ]; then \n\
    sed -i \"s/resolver/resolver \$dns valid=60s;/g\" /opt/nginx/conf/nginx-with-resolver.conf \n\
    else \n\
    sed -i \"/server {/a\    resolver \$dns valid=60s;\" /opt/nginx/conf/nginx-with-resolver.conf \n\
    fi \n\
    exec /opt/nginx/sbin/nginx -p /opt/nginx -c /opt/nginx/conf/nginx-with-resolver.conf"\
    >> /opt/nginx/start.sh

EXPOSE 8080

CMD ["bash", "/opt/nginx/start.sh"]
```

> 对应nginx更改

```yaml

    location /tset/ {
        set $testhost test.cn;
        rewrite /test/(.*) /$1 break;
        proxy_pass http://testhost/$1?$args;
    }

```