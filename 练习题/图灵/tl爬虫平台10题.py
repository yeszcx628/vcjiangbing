# t.10.py
import execjs
import os
import time
def get_js_result(url):

    try:
        current_dir = os.path.dirname(os.path.abspath(__file__))
        js_path = os.path.join(current_dir, 'tl爬虫平台10题.js')
        
        with open(js_path, 'r', encoding='utf-8') as f:
            js_code = f.read()
        
        ctx = execjs.compile(js_code)
        
        options = {
            "url": url,
            "headers": {}
        }
        
        result = ctx.call("generateParam", options)
        return result
        
    except Exception as e:
        print(f"发生错误: {str(e)}")
        return None

if __name__ == "__main__":
    import requests
    import re
    # 替换自己的cookie
    cookies = {

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
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }

    z = 0
    for i in range(1, 21):
        url="/api/problem-detail/10/data/?page={}".format(i)
        result = get_js_result(url)
        match = re.search(r't=([a-f0-9]+)', result)
        params = {
            'page': i,
            't': match.group(1),
        }
        time.sleep(1)
        response = requests.get('https://stu.tulingpyton.cn/api/problem-detail/10/data/', params=params, cookies=cookies, headers=headers)
        print(response.json())
        try:
            for j in response.json()['current_array']:
                z += j
        except KeyError:
            print("KeyError 发生，等待 10 秒后继续...")
            time.sleep(10)  # 等待 10 秒
            # 在这里可以继续尝试获取数据或其他逻辑
            print("继续执行后续逻辑...")
            
    print(z)