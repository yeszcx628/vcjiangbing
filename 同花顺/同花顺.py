import requests
import execjs
import time
import os

def get_cookie():
    # 获取当前文件所在目录
    current_dir = os.path.dirname(os.path.abspath(__file__))
    # 读取 JavaScript 文件
    with open(os.path.join(current_dir, 'ths.js'), 'r', encoding='utf-8') as f:
        js_code = f.read()
    
    # 创建 JavaScript 环境
    ctx = execjs.compile(js_code)
    
    # 设置当前时间戳
    current_time = time.time()
    
    # 执行 JavaScript 代码
    cookie = ctx.call('window.kd')
    
    return cookie

if __name__ == '__main__':
    cookie = get_cookie()
    print(cookie)


    cookies = {
        'v': cookie,
    }

    headers = {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': 'no-cache',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        # 'Cookie': 'v=A40qYlNk2WR7U31I_oBcjjPQmqICasE8S54lEM8SySSTxqPcl7rRDNvuNexc',
    }

    response = requests.get('https://q.10jqka.com.cn/', cookies=cookies, headers=headers)
    print(response.text)