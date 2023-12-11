```yaml
listen 443 ssl default_server;
ssl_certificate /etc/nginx/ssl/full_chain.pem;
ssl_certificate_key /etc/nginx/ssl/private.key;
ssl_session_timeout 5m;
ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4; #表示使用的加密套件的类型。
ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3; #表示使用的 TLS 协议的类型。
ssl_prefer_server_ciphers on;
```