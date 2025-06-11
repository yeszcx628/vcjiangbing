import execjs
import json

# 读取 JS 文件内容
with open('D:/video/daima/图灵/test5.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

# 编译 JS 代码
ctx = execjs.compile(js_code)



import requests

cookies = {
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1744083841',
    'HMACCOUNT': '27BBB43D5CD292ED',
    'sessionid': 'w59w44rzboq39ufvcs7hoy132s0kct83',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1744087184',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/json',
    'origin': 'https://stu.tulingpyton.cn',
    'priority': 'u=1, i',
    'referer': 'https://stu.tulingpyton.cn/problem-detail/5/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1744083841; HMACCOUNT=27BBB43D5CD292ED; sessionid=w59w44rzboq39ufvcs7hoy132s0kct83; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1744087184',
}


z = 0
for i in range(1,21):
    # 准备数据
    data = {
        "page": i,
        "_ts": 1744087890279
    }

    # 调用加密函数
    result = ctx.call('encrypt', json.dumps(data))

    json_data = {
    'xl': result,
    }

    response = requests.post('https://stu.tulingpyton.cn/api/problem-detail/5/data/', cookies=cookies, headers=headers, json=json_data)

    arr = response.json()['current_array']
    for i in arr:
        z+= i
print(z)