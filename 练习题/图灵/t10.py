import time
import hashlib


import requests

cookies = {
    'sessionid': 'w59w44rzboq39ufvcs7hoy132s0kct83',
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1744938601,1745064588,1745296540,1745297661',
    'HMACCOUNT': '27BBB43D5CD292ED',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1745298956',
}

headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=1, i',
    'referer': 'https://stu.tulingpyton.cn/problem-detail/10/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    # 'cookie': 'sessionid=w59w44rzboq39ufvcs7hoy132s0kct83; Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1744938601,1745064588,1745296540,1745297661; HMACCOUNT=27BBB43D5CD292ED; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1745298956',
}



import hashlib

def encrypt_url(url):
    salt = "bsbsbsbsbl"
    combined = url + salt
    md5_hash = hashlib.md5(combined.encode()).hexdigest()
    sha256_hash = hashlib.sha256(md5_hash.encode()).hexdigest()
    return f"{url}&t={sha256_hash}"
test_url = "/api/data?page=1"
T = encrypt_url(test_url)
params = {
    'page': '1',
    't': T,
}

response = requests.get('https://stu.tulingpyton.cn/api/problem-detail/10/data/', params=params, cookies=cookies, headers=headers)
print(response.text)