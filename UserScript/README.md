使用方法:
1. chrome安装Tempermonkey扩展,firefox安装Greasemonkey扩展
2. Tempermonkey
    + 打开仪表盘,新建脚本
    + 粘贴UserScript.js内容
    + 将用户名和密码替换成你的用户名和密码
    + 保存
    + 拔网线,测试
3. Greasemonkey
    + 先复制UserScript.js内容
    + 新建用户脚本
    + 选择"使用剪贴板中的脚本"
    + 将用户名和密码替换成你的用户名和密码
    + 保存
    + 拔网线,测试
4. 开机启动浏览器(可选)
    + chrome用户运行UserScript\Reg\chrome_start_up.reg
    + firefox用户运行UserScript\Reg\firefox_start_up.reg
    + 以上操作会产生一个名为adsl_auto_login的开机项,使用chrome或firefox打开`http://enet.10000.gd.cn:10001/?wlanuserip=113.76.160.131&wlanacip=119.146.247.2`
    + 要删除开机项,可运行UserScript\Reg\delete_start_up.reg

