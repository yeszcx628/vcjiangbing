import json
import time
import requests
import hashlib
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad


cookies = {
    'sessionid': 'w59w44rzboq39ufvcs7hoy132s0kct83',
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1744289199,1744613288,1744625778,1744687662',
    'HMACCOUNT': '27BBB43D5CD292ED',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1744687714',
}

z = 0

timestamp = str(int(time.time() * 1000))
# 调用 JS 函数
m = hashlib.md5(("xialuo" + timestamp).encode()).hexdigest()
x = hashlib.sha256((m + "xxoo").encode()).hexdigest()
headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'm': m,
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://stu.tulingpyton.cn/problem-detail/7/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'ts': str(timestamp),
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    # 'cookie': 'sessionid=w59w44rzboq39ufvcs7hoy132s0kct83; Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1744289199,1744613288,1744625778,1744687662; HMACCOUNT=27BBB43D5CD292ED; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1744687714',
}

for i in range(1,21):
    params = {
        "page": str(i),
        "x": x,
    }

    response = requests.get(
        "https://stu.tulingpyton.cn/api/problem-detail/7/data/",
        params=params,
        cookies=cookies,
        headers=headers,
    )
    json_data = response.json()
    r = json_data['r']
    # hex to bytes
    r = bytes.fromhex(r)

    key = b"xxxxxxxxoooooooo"
    iv = b"0123456789ABCDEF"
    chiper = AES.new(key=key, mode=AES.MODE_CBC, iv=iv)
    result = unpad(chiper.decrypt(r), AES.block_size)
    result = json.loads(result)
    for i in result['current_array']:
        z += i
print(z)

