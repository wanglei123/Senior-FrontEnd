## 3.1 常见网络安全防护

### 3.1.1 阻断服务攻击（DOS）

- 阻断服务攻击，想办法目标网络资源用尽
- 变种：分布式阻断服务攻击

影响：
   1. 宽带消耗性（消耗目标的带宽）
   2. 资源消耗型（消耗目标的计算资源）

解决方案：
   1. 防火墙
   2. 交换机（路由器）
   3. 流量清洗

### 3.1.2 跨站脚本攻击（xss）

  - 原理：将跨站脚本注入到被攻击的网页上，用户打开网页会执行跨站脚本。

  解决方案：
     1. 输入过滤（转义）
     2. 输出过滤（转义）

### 3.1.3 SQL注入

‘;update user set money=99999 where id=10025’

select *from user where user_name=';update user set money=99999 where id=10025'

解决方案：
  输入过滤（转义）
  数据库安全策略

### 3.1.4 跨站请求伪造（csrf）

假如你刚登录银行网站不久，cookie还没过期，黑客利用小广告之类让你点击，然后请求在程序中请求转账接口

解决方案：
   1. 验证referer字段
   2. 在请求地址添加token并验证

### 3.1.5  HTTPS 中间人攻击

    黑客在电脑上安装伪造的证书，拦截客户端的请求

