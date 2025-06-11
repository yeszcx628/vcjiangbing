# NCSS金价数据获取程序

## 功能概述
这是一个用于获取NCSS金价数据的WebSocket客户端程序。该程序通过WebSocket连接到NCSS金价API，实时接收并解析金价数据。

## 主要功能
1. WebSocket连接建立
2. Base64数据解码
3. JSON数据解析
4. 实时数据接收和处理

## 实现细节

### 1. Base64解码实现
- 自定义了Base64解码函数 `decode_base64`
- 支持标准Base64字符集
- 处理了填充字符和空白字符
- 实现了错误处理机制

### 2. WebSocket连接
- 连接到 `ws://api.ncssjj.cn:2346/`
- 实现了自动重连机制
- 处理连接异常情况

### 3. 数据处理流程
1. 接收WebSocket消息
2. 解析JSON格式数据
3. 对Base64编码的数据进行解码
4. 解析解码后的JSON数据
5. 输出处理后的市场数据

### 4. 错误处理
- JSON解析错误处理
- Base64解码错误处理
- WebSocket连接异常处理
- 通用异常处理

## 使用方法
直接运行 `ncssjj.py` 文件即可：
```bash
python ncssjj.py
```

## 依赖库
- websockets
- asyncio
- json

## 注意事项
- 确保网络连接正常
- 需要稳定的网络环境
- 建议在异常情况下实现重连机制 