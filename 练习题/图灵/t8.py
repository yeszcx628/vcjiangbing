import json
import time
import requests
import hashlib
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
import base64

# OOOoO函数实现
def OOOoO(text):
    """
    还原自混淆的JavaScript加密函数OOOoO
    用于生成cookie中的s值
    """
    # 分组大小
    chunk_size = 4
    
    # 将文本分组
    def group_message(text, size):
        chars = list(text)
        groups = []
        for i in range(0, len(chars), size):
            groups.append(chars[i:i+size])
        return groups
    
    # 加密每个字符
    def encrypt_group(group):
        result = []
        for char in group:
            code = ord(char)
            # 位运算加密
            code = ((code << 3) | (code >> 5)) & 0xFF
            code ^= 0x5A
            code = ((code << 2) | (code >> 6)) & 0xFF
            code ^= 0x3F
            code = code % 256
            result.append(chr(code))
        return result
    
    # 合并加密后的组
    def merge_groups(groups):
        return ''.join([''.join(group) for group in groups])
    
    # 转为十六进制
    def to_hex_string(text):
        return ''.join([format(ord(c), '02x') for c in text])
    
    # 执行加密流程
    groups = group_message(text, chunk_size)
    encrypted_groups = [encrypt_group(group) for group in groups]
    merged = merge_groups(encrypted_groups)
    hex_result = to_hex_string(merged)
    
    return hex_result

# 更新OOOoOo函数实现
def OOOoOo(text, key):
    """
    还原自混淆的JavaScript加密函数
    这个函数将文本和密钥进行特殊的加密处理
    """
    # 将文本和密钥转为字符数组
    text_chars = list(text)
    key_chars = list(key)
    chunk_size = 4
    
    result = []
    
    # 按每4个字符一组处理文本
    for i in range(0, len(text_chars), chunk_size):
        # 获取当前块
        chunk = text_chars[i:min(i+chunk_size, len(text_chars))]
        
        # 对块中的每个字符进行处理
        for j in range(len(chunk)):
            # 获取当前字符和对应的密钥字符的ASCII码
            char_code = ord(chunk[j])
            key_code = ord(key_chars[j % len(key_chars)])
            
            # 计算新的字符码（原始字符码+密钥字符码）% 256
            new_char_code = (char_code + key_code) % 256
            
            # 将新字符码转回字符
            chunk[j] = chr(new_char_code)
        
        # 将处理后的块添加到结果中
        result.extend(chunk)
    
    # 将结果连接为字符串，然后转为十六进制表示
    result_str = ''.join(result)
    hex_result = ''.join([format(ord(c), '02x') for c in result_str])
    
    return hex_result

# 生成s cookie值的函数
def generate_s_cookie():
    timestamp = str(int(time.time() * 1000))
    s_value = OOOoO("xoxoxoxo" + timestamp)
    cookie_str = f"s={s_value}; path=/; domain=.tulingpyton.cn"
    return cookie_str, timestamp

# 使用示例
s_cookie, timestamp = generate_s_cookie()
print(f"生成的s cookie: {s_cookie}")

# 在请求中使用
z = 0
for page in range(1,21):
    # 使用当前时间戳重新生成
    timestamp = str(int(time.time() * 1000))
    s_value = OOOoO("xoxoxoxo" + timestamp)
    
    # 生成请求头中需要的m和t值
    m_header = OOOoOo('oooooo' + timestamp + str(page), 'oooooo')
    t_header = base64.b64encode(timestamp.encode()).decode()
    
    cookies = {
        'sessionid': 'w59w44rzboq39ufvcs7hoy132s0kct83',
        'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1744613288,1744625778,1744687662,1744690823',
        'HMACCOUNT': '27BBB43D5CD292ED',
        'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1744690835',
        's': s_value,  # 使用生成的s值
    }

    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        'm': m_header,  # 使用生成的m值
        'origin': 'https://stu.tulingpyton.cn',
        'pragma': 'no-cache',
        'priority': 'u=1, i',
        'referer': 'https://stu.tulingpyton.cn/problem-detail/8/',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        't': t_header,  # 使用生成的t值
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    json_data = {
        'page': page,  # 使用循环中的页码
    }

    response = requests.post('https://stu.tulingpyton.cn/api/problem-detail/8/data/', cookies=cookies, headers=headers, json=json_data)
    
    response_data = response.json()
    current_array = response_data['current_array']
    for item in current_array:
        z += item


print(z)