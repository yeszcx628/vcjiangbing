import requests
from common import get_timestamp

cookies = {
    'sessionid': 'f2opcnem8lqeekui5vi4nqqq4gm32d45',
    'Hm_lvt_c99546cf032aaa5a679230de9a95c7db': '1744016410',
    'HMACCOUNT': 'C29011FDD9B41540',
    'qpfccr': 'true',
    'no-alert3': 'true',
    'tk': '-4217413872723957306',
    'Hm_lvt_9bcbda9cbf86757998a2339a0437208e': '1744016536',
    'Hm_lpvt_9bcbda9cbf86757998a2339a0437208e': '1744016536',
    'Hm_lpvt_c99546cf032aaa5a679230de9a95c7db': '1744016555',
}

headers = {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'priority': 'u=0, i',
    'referer': 'https://match.yuanrenxue.cn/match/1',
    'sec-ch-ua': '"Microsoft Edge";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0',
    'x-requested-with': 'XMLHttpRequest',
    # 'cookie': 'sessionid=f2opcnem8lqeekui5vi4nqqq4gm32d45; Hm_lvt_c99546cf032aaa5a679230de9a95c7db=1744016410; HMACCOUNT=C29011FDD9B41540; qpfccr=true; no-alert3=true; tk=-4217413872723957306; Hm_lvt_9bcbda9cbf86757998a2339a0437208e=1744016536; Hm_lpvt_9bcbda9cbf86757998a2339a0437208e=1744016536; Hm_lpvt_c99546cf032aaa5a679230de9a95c7db=1744016555',
}
timestamp = get_timestamp()
params = {
    'page': '2',
    'm': '8c71973a52c1b13a94fe26291428dda1丨{}'.format(timestamp),
}   

response = requests.get('https://match.yuanrenxue.cn/api/match/1', params=params, cookies=cookies, headers=headers)


