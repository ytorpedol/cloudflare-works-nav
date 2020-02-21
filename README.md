#####利用cloudflare workers的免费套餐搭建个人导航站
######导航站基于Bootstrap4，jquery设计
######CloudFlare Worker 是 CloudFlare 的边缘计算服务。免费套餐支持每天10万请求。

######演示地址：https://nav.elle.workers.dev/
######搭建教程：https://blog.csdn.net/qq_38243612/article/details/104428591
######绑定域名教程：https://blog.csdn.net/qq_38243612/article/details/104433673
######系统配置：
```const config = {
  title: "test导航",                 //网站标题
  subtitle: "导航集合",              //网站描述
  logo_icon: "fa fa-tachometer",    //图标
  search_engine:[                   //搜索
    {
      name:"百 度",
      template:"https://www.baidu.com/s?wd=$s"
    },
    {
      name:"谷 歌",
      template:"https://www.google.com/search?q=$s"
    },
    {
      name:"必 应",
      template:"https://www.bing.com/search?q=$s"
    },
    {
      name:"搜 狗",
      template:"https://www.bing.com/search?q=$s"
    }
  ], 
   lists: [                            
    {
      name:"技术",                                    // 网站分类
      list:[
        {
          url:"https://oschina.net/",                 //网站地址url
          name:"开源中国",                            //网站名称
          desc:"程序员集散地"                         //网站描述
        },
        {
          url:"https://v2ex.com",
          name:"V2EX",
          desc:"程序员集散地"
        },
        {
          url:"https://csdn.net/",
          name:"CSDN技术社区",
          desc:"程序员集散地"
        },
        {
          url:"https://github.com/",
          name:"Github",
          desc:"程序员集散地"
        },
         {
          url:"https://oschina.net/",
          name:"开源中国",
          desc:"程序员集散地"
        },
        {
          url:"https://v2ex.com",
          name:"V2EX",
          desc:"程序员集散地"
        },
      ]
    },
    {
      name:"学习",
      list:[
        {
          url:"https://w3school.com.cn/",
          name:"W3school在线教程",
          desc:"程序员集散地"
        },
        {
          url:"https://runoob.com/",
          name:"菜鸟教程",
          desc:"程序员集散地"
        },
        {
          url:"https://segmentfault.com/",
          name:"思否社区",
          desc:"程序员集散地"
        },
        {
          url:"https://jianshu.com/",
          name:"简书",
          desc:"程序员集散地"
        },
      ]
    },  
  ]
}```


