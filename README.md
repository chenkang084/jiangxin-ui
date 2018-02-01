## webpack dev server
```
devServer: {
    host: "0.0.0.0",
    port: 9002,
    proxy: {
        "/api": {
        target: "http://10.96.199.28:9001/",
        changeOrigin: true,
        // secure: true
        }
    }
}
```
dev server将监听127.0.0.1下面host为9002的request请求，拦截请求，将127.0.0.1:9002/api/xxx代理到http://10.96.199.28:9001/api/xxx。  
支持localhost和本机ip的写法，代理可以携带cookie信息，可以在set cookie 到client。