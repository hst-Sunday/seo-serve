1. 服务器安装chrome```yum -y install chromium```
2. 安装依赖```yarn```
3. 启动服务```pm2 start server.js```
4. 配置nginx
   ```
    if ($http_user_agent ~* "baiduspider|Googlebot|360Spider|Bingbot|Sogou    Spider|Yahoo! Slurp China|Yahoo! Slurp|twitterbot|facebookexternalhit|rogerbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator") {
        proxy_pass http://127.0.0.1:3811;
    }
   ```