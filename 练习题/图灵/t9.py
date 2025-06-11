import time
import hashlib
import base64
import hmac, hashlib;
def generate_request_config(problem_id, page):
    # 获取当前时间戳（毫秒级）
    timestamp = int(time.time() * 1000)
    
    # 构建请求数据
    data = {
        "page": page
    }
    
    # 对数据进行处理
    # 1. MD5加密
    
    data["m"] = hmac.new("xxxooo".encode(), ("9527" + str(timestamp)).encode(), hashlib.sha1).hexdigest()

    # 2. Base64编码
    data["tt"] = base64.b64encode(str(timestamp).encode()).decode()
    

    
    return data




import requests

cookies = {
    'sessionid': 'w59w44rzboq39ufvcs7hoy132s0kct83',
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1744690823,1744786699,1744890398,1744932510',
    'HMACCOUNT': '27BBB43D5CD292ED',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1744935134',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'content-type': 'application/json',
    'origin': 'https://stu.tulingpyton.cn',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://stu.tulingpyton.cn/problem-detail/9/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    # 'cookie': 'sessionid=w59w44rzboq39ufvcs7hoy132s0kct83; Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1744690823,1744786699,1744890398,1744932510; HMACCOUNT=27BBB43D5CD292ED; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1744935134',
}





# 测试代码
if __name__ == "__main__":
    z = 0
    # 测试生成配置
    for i in range(1,21):
        data = generate_request_config(2825, i)
        json_data = {
            'page': i,
            'm': data['m'],
            'tt': data['tt'],
        }

        response = requests.post('https://stu.tulingpyton.cn/api/problem-detail/9/data/', cookies=cookies, headers=headers, json=json_data)
        d = response.json()
        for item in d['current_array']:
            z += item
    print(z)

