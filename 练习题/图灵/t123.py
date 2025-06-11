import requests

cookies = {
    'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183': '1744083841',
    'HMACCOUNT': '27BBB43D5CD292ED',
    'sessionid': 'w59w44rzboq39ufvcs7hoy132s0kct83',
    'Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183': '1744083867',
}

headers = {
    'accept': '*/*',
    'accept-language': 'zh-CN,zh;q=0.9',
    'priority': 'u=1, i',
    'referer': 'https://stu.tulingpyton.cn/problem-detail/1/',
    'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
    # 'cookie': 'Hm_lvt_b5d072258d61ab3cd6a9d485aac7f183=1744083841; HMACCOUNT=27BBB43D5CD292ED; sessionid=w59w44rzboq39ufvcs7hoy132s0kct83; Hm_lpvt_b5d072258d61ab3cd6a9d485aac7f183=1744083867',
}

z = 0
for i in range(1,21):
    print(i)

    params = {
        'page': str(i),
    }

    response = requests.get('https://stu.tulingpyton.cn/api/problem-detail/3/data/', params=params, cookies=cookies, headers=headers)
    arr = response.json()['current_array']
    for j in arr:
        z += j
print(z)


