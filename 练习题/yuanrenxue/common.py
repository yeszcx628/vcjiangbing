import time
import hashlib

def get_timestamp():
    """生成10位时间戳"""
    return str(int(time.time()))

def get_md5(text):
    """生成MD5"""
    return hashlib.md5(text.encode()).hexdigest()