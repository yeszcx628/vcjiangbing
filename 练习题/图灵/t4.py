import requests
import time
import hashlib


cookies = {
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1744083841',
    'HMACCOUNT': '27BBB43D5CD292ED',
    'sessionid': 'w59w44rzboq39ufvcs7hoy132s0kct83',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1744084511',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'priority': 'u=1, i',
    'referer': 'https://stu.tulingpyton.cn/problem-detail/3/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1744083841; HMACCOUNT=27BBB43D5CD292ED; sessionid=w59w44rzboq39ufvcs7hoy132s0kct83; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1744084511',
}

def get_sign(page):
    timestamp = str(int(round(time.time() * 1000)))
    print(timestamp)
    text = "tuling" + str(timestamp) + str(page)
    return hashlib.md5(text.encode()).hexdigest(), timestamp



from Crypto.Cipher import AES
from Crypto.Util.Padding import pad
import base64

# sign = get_sign(7)
# z = 0
# for i in range(1,21):
#     print(i)
#     sign, timestamp = get_sign(i)
#     print(sign,timestamp)

#     params = {
#     'page': i,
#     'sign': sign,
#     '_ts': timestamp
#     }

#     response = requests.get('https://stu.tulingpyton.cn/api/problem-detail/4/data/', params=params, cookies=cookies, headers=headers)
#     arr = response.json()['current_array']
#     print(arr)
#     for j in arr:
#         z += j
# print(z)