import websockets
import asyncio
import json

class Base64Error(Exception):
    pass

def raise_error(message):
    raise Base64Error(message)

BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
WHITESPACE = '\t\n\f\r '

def decode_base64(m):
    # 去除空白字符
    m = str(m)
    for char in WHITESPACE:
        m = m.replace(char, '')
    
    p = len(m)
    
    # 处理填充
    if p % 4 == 0:
        m = m.rstrip('=')
        p = len(m)
    
    # 验证输入
    if p % 4 == 1 or any(c not in BASE64_CHARS for c in m):
        raise_error("Invalid character: the string to be decoded is not correctly encoded.")
    
    result = ''
    bits = 0
    buffer = 0
    
    for char in m:
        value = BASE64_CHARS.index(char)
        if bits % 4:
            buffer = buffer * 64 + value
        else:
            buffer = value
        bits += 1
        if bits % 4 == 0:
            result += chr(255 & (buffer >> 16))
            result += chr(255 & (buffer >> 8))
            result += chr(255 & buffer)
    
    # 处理末尾
    if bits % 4 == 2:
        result = result[:-2]
    elif bits % 4 == 3:
        result = result[:-1]
    
    return result

async def connect_websocket():
    uri = "ws://api.ncssjj.cn:2346/"
    try:
        async with websockets.connect(uri) as websocket:
            print(f"已连接到 {uri}")
            
            while True:
                response = await websocket.recv()
                try:
                    # 解析JSON消息
                    data = json.loads(response)
                    if data["type"] == "data":
                        # 解码Base64数据
                        decoded_data = decode_base64(data["data"])
                        # 解析解码后的JSON数据
                        market_data = json.loads(decoded_data)
                        print("解码后的数据:", market_data)
                except json.JSONDecodeError as e:
                    print(f"JSON解析错误: {str(e)}")
                except Base64Error as e:
                    print(f"Base64解码错误: {str(e)}")
                except Exception as e:
                    print(f"处理数据时发生错误: {str(e)}")
                
    except websockets.exceptions.ConnectionClosed:
        print("WebSocket连接已关闭")
    except Exception as e:
        print(f"发生错误: {str(e)}")

# 运行WebSocket客户端
if __name__ == "__main__":
    asyncio.run(connect_websocket())


    # 获取websockets数据后找到jsonparsher解析 使用base64解码 解析数据