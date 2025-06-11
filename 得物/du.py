import hashlib
import json
import requests




headers = {
        'Accept': '*/*',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'Origin': 'https://dewu.com',
        'Pragma': 'no-cache',
        'Referer': 'https://dewu.com/',
        'SK': '',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36',
        'ltk': 'e8Kuw7XDmsOvO8O1w5jCoMO5JcKNwpbCqsOQe8OmwpbCncKmMDTCk3jDk8OqX8K8Lg/DggDDnCfDhMOHwqIbcsKUNB3CrsKAw5bCj8O/w7jDlsOP',
        'sec-ch-ua': '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sessionid': '1mxfch07-72gp-ihcn-3eoy-5v6aoi9zdbezilwm',
        'shumeiId': '2025041511402022ca134c04e947b21bfcde522622951000c0443a5a9049f6',
        'traceparent': '00-f50cca5767ff517c8247e102dca2abf7-cd80bab4869bf49d-01',
    }

def u(string):
    """MD5加密函数"""
    return hashlib.md5(string.encode('utf-8')).hexdigest()

def c(t):
    """参数签名函数"""
    if not t:
        return u("")
    
    # 对字典的键进行排序
    sorted_keys = sorted(t.keys())
    
    # 处理参数拼接
    result = ""
    for key in sorted_keys:
        value = t[key]
        
        # 处理undefined
        if value is None:
            continue
            
        # 处理NaN
        if isinstance(value, float) and value != value:  # Python中判断NaN
            value = ""
            
        # 处理数组
        if isinstance(value, list):
            if len(value) == 0:
                result += key
                continue
                
            # 处理数组元素
            array_values = []
            for item in value:
                if isinstance(item, (dict, list)):
                    array_values.append(json.dumps(item))
                else:
                    array_values.append(str(item))
            
            # 数组排序并用逗号连接
            array_str = ",".join(sorted(array_values))
            result += key + array_str
            continue
            
        # 处理对象
        if isinstance(value, dict):
            result += key + json.dumps(value)
            continue
            
        # 处理其他类型
        result += key + str(value)
    
    # 添加密钥
    result += "048a9c4943398714b356a696503d2d36"
    
    # 返回MD5加密结果
    return u(result)

# 测试代码
if __name__ == "__main__":
    # 测试数据
    t = {
        "pickRuleId": 644458,
        "pageNum": 1,
        "pageSize": 24,
        "filterUnbid": "true",
        "showCspu": "true"
    }
    


    json_data = {
        'sign': c(t),
        'pickRuleId': 644458,
        'pageNum': 1,
        'pageSize': 24,
        'filterUnbid': True,
        'showCspu': True,
    }

    response = requests.post(
        'https://app.dewu.com/api/v1/h5/commodity-pick-interfaces/pc/pick-rule-result/feeds/info',
        
        headers=headers,
        json=json_data,
    )

    # 打印结果
    print(response.json())