import requests
import execjs
import json
import os

os.environ["PYTHONIOENCODING"] = "utf-8"

# 读取 JS 文件内容
with open('D:/video/daima/图灵/test2.js', 'r', encoding='utf-8') as f:
    js_code = f.read()

# 编译 JS 代码
ctx = execjs.compile(js_code)

cookies = {
    'sessionid': 'w59w44rzboq39ufvcs7hoy132s0kct83',
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1744174393,1744179109,1744201965,1744256821',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1744256821',
    'HMACCOUNT': '27BBB43D5CD292ED',
}


zz = 0
for i in range(1,21):


    s = ctx.call('s')
    headers = {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'referer': 'https://stu.tulingpyton.cn/problem-detail/6/',
        's': s['s'],
        'tt': str(s['tt']),
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    }
    params = {
        'page': str(i),
    }

    response = requests.get('https://stu.tulingpyton.cn/api/problem-detail/6/data/', params=params, headers=headers, cookies=cookies)
    encryptedHex = response.json()
    print(encryptedHex)
    encrypted_data = ctx.call('xxxxoooo', encryptedHex['t'])

    # 先进行编码处理
    # decoded_str = encrypted_data.encode('raw_unicode_escape').decode('unicode_escape')
    data = json.loads(encrypted_data)

    zong  =data['current_array']

    zz += sum(i for i in zong)  # 使用列表推导式和sum函数
print(zz)