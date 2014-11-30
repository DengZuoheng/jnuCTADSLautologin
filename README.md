这是用于暨南大学珠海校区电信宽带自动登陆的项目;  


##使用方法##
1. userscript
chrome使用tempermonkey新建用户脚本,粘贴userscript.js内容,并将用户名和密码改成你的用户名和密码;firefox使用creasemonkey.

##实现##
1. userscript
一般开机登陆的话,可使用userscript自动填充并提交的方式,实际上验证码是在js中随机4个整数然后才请求的图片,而且随机出来的结果放在了一个hidden的input标签里,所以是很容易获取的.

