import requests
import re
import json
import datetime
from collections import Counter
headers = {
    'Accept': '*/*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'Connection': 'keep-alive',
    'Referer': 'https://www.zhcw.com/',
    'Sec-Fetch-Dest': 'script',
    'Sec-Fetch-Mode': 'no-cors',
    'Sec-Fetch-Site': 'same-site',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0',
    'sec-ch-ua': '"Microsoft Edge";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
}
params = {
    'callback': 'jQuery11220974868044890091_1745392332459',
    'transactionType': '10001001',
    'lotteryId': '1',
    'issueCount': '30',
    'startIssue': '',
    'endIssue': '',
    'startDate': '',
    'endDate': '',
    'type': '0',
    'pageNum': '1',
    'pageSize': '30',
    'tt': '0.305275728691789',
    '_': '1745392332460',
}

response = requests.get('https://jc.zhcw.com/port/client_json.php', params=params,headers=headers)

match = re.search(r'\((\{.*\})\)$', response.text, re.DOTALL)

if match:

    json_str = match.group(1)
    json_data = json.loads(json_str)
    data_part = json_data['data']
else:
    print("未匹配到数据，请检查正则表达式或数据格式！")


# for item in data_part:
#     print(f"期号：{item['issue']}")
#     print(f"开奖时间：{item['openTime']}")
#     print(f"前区号码：{item['frontWinningNum']}")
#     print(f"后区号码：{item['backWinningNum']}")
#     print("----------")
#     # 期号：2025015
#     # 开奖时间：2025-02-13
#     # 前区号码：04 11 15 24 25 33
#     # 后区号码：15
#     # 当前日期

import random
from collections import Counter


# 获取前区和后区的热号和冷号
def get_hot_and_cold_numbers(data, num_count=6):
    all_numbers = []
    for item in data:
        all_numbers.extend(item['frontWinningNum'].split())
    count = Counter(all_numbers)
    hot_numbers = count.most_common(num_count)
    cold_numbers = count.most_common()[-num_count:]
    return hot_numbers, cold_numbers

# 获取前区和后区的热号和冷号
hot_front_numbers, cold_front_numbers = get_hot_and_cold_numbers(data_part, num_count=6)



# 轮回选择函数（确保前区号码没有重复）
def generate_cycle_numbers_based_on_history(data, front_count=6, back_count=1):
    # 获取最新一期的前区和后区号码
    latest_front_numbers = data[-1]['frontWinningNum'].split()
    latest_back_number = data[-1]['backWinningNum'].split()

    # 选择前区号码时：使用最新一期的前区号码作为基础
    selected_front = set(latest_front_numbers[:4])  # 选择最新一期的前4个号码，并确保唯一性
    selected_back = set(latest_back_number[:1])  # 选择最新一期的后区号码，并确保唯一性

    # 从历史数据中随机选取其他号码
    all_front_numbers = [item['frontWinningNum'].split() for item in data]
    all_front_numbers = [num for sublist in all_front_numbers for num in sublist]  # 合并所有前区号码
    
    # 过滤掉已经选择的号码，确保没有重复
    all_front_numbers = [num for num in all_front_numbers if num not in selected_front]

    # 随机选择剩余的号码，直到达到前区需要的数量
    random_selected_front = random.sample(all_front_numbers, front_count - len(selected_front))  # 选取剩余号码
    selected_front.update(random_selected_front)  # 更新选中的前区号码

    # 从历史数据中选择后区号码，避免重复
    all_back_numbers = [item['backWinningNum'].split() for item in data]
    all_back_numbers = [num for sublist in all_back_numbers for num in sublist]  # 合并所有后区号码

    # 过滤掉已经选择的号码，确保没有重复
    all_back_numbers = [num for num in all_back_numbers if num not in selected_back]

    random_selected_back = random.sample(all_back_numbers, back_count - len(selected_back))  # 选取剩余号码
    selected_back.update(random_selected_back)  # 更新选中的后区号码

    # 转换为列表，并进行排序
    return sorted(list(selected_front)), sorted(list(selected_back))

# 使用轮回选择生成一组号码（基于历史数据）
front_numbers, back_numbers = generate_cycle_numbers_based_on_history(data_part)

# 输出最终生成的号码
print("生成的前区号码:", front_numbers)
print("生成的后区号码:", back_numbers)