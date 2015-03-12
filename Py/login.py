#!/usr/bin/env python
# -*- coding: utf-8 -*-
#login.py
import pycurl
import pyquery
import datetime
import urllib
import StringIO
import re
import datetime
import StringIO
import json
import unittest
#TODO:cookie有问题
def main(userName1, password1):
    buf=StringIO.StringIO()
    buf2 = StringIO.StringIO()
    c=pycurl.Curl()
    url=r'http://enet.10000.gd.cn:10001/?wlanuserip=113.76.160.188&wlanacip=119.146.247.2'
   
    c.setopt(pycurl.CONNECTTIMEOUT,5)
    c.setopt(pycurl.TIMEOUT,8)
    c.setopt(pycurl.PROXY, '127.0.0.1:8888')
    c.setopt(pycurl.COOKIEFILE,'')
    c.setopt(pycurl.FAILONERROR,True)
    c.setopt(pycurl.URL, url)
    c.setopt(pycurl.WRITEFUNCTION, buf.write)#设置回调
    

    c.perform()
    url=r'http://enet.10000.gd.cn:10001/login.jsp?wlanuserip=113.76.162.171&amp;wlanacip=119.146.247.2'
    c.setopt(pycurl.URL, url)
    c.perform()
    html=buf.getvalue()

    pq=pyquery.PyQuery(html)
    eduuser=pq('#eduuser').val()
    edubas=pq('#edubas').val()
    checkbox='on'
    login_value={
        'userName1':userName1,
        'password1':password1,
        'rand':'7751',
        'eduuser':eduuser,
        'edubas':'119.146.247.2',
    }
    post_data=urllib.urlencode(login_value)
    print(post_data)
    c.setopt(pycurl.URL,'http://enet.10000.gd.cn:10001/login.do')
    c.setopt(pycurl.POSTFIELDS, post_data)
    c.setopt(pycurl.WRITEFUNCTION,buf2.write)#设置回调
    c.setopt(pycurl.PROXY, '127.0.0.1:8888')
    c.perform()
    if (200!=c.getinfo(pycurl.HTTP_CODE)):
        #code=302
        c.setopt(pycurl.URL,'http://enet.10000.gd.cn:10001/success.jsp')
        c.perform();
        return None
    print("success")
    return True

if __name__ == '__main__': 
    main('2012052207','08210739')