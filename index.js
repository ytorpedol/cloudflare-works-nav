const config = {
  title: "test导航",                 //网站标题
  subtitle: "导航集合",              //网站描述
  logo_icon: "https://itku.ml/wp-content/uploads/2019/07/my.jpg",    //图标
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
   lists: [                            //Url list
    {
      name:"技术",
      list:[
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
}

const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderZnav(),renderTnav(),renderMain(),renderFooter()), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/** Render Functions
 *  渲染模块函数
 */
//footer
function renderFooter(){
  const footer=el('footer',['class="bg-white sticky-footer"'],el('div',['class="container my-auto"'],el('div',['class="text-center my-auto copyright ml-5 pl-5"'],el('ul',['class="list-inline"'],el('li',['class="list-inline-item"'],'Powered by')+el('li',['class="list-inline-item"'],el('a',['class=""','href="https://github.com/sleepwood/cf-worker-dir"','target="_blank"'],el('i',['class="fab fa-github"'],'')+'cf work nav'))+el('li',['class="list-inline-item"'],'Copyright © Brand 2019')+el('li',['class="list-inline-item"'],el('i',['class="fa fa-balance-scale"'],'')+'MIT License'))+el('ul',['class="list-inline"'],el('li',['class="list-inline-item"'],'Base on')+el('li',['class="list-inline-item"'],el('a',['class=""','href="https://github.com/sleepwood/cf-worker-dir"','target="_blank"'],el('i',['class="fab fa-github"'],'')+'Cf-Worker-Dir'))+el('li',['class="list-inline-item"'],el('i',['class="fa fa-balance-scale"'],'')+'MIT License')))));
  return footer;
}

//znav
function renderZnav(){
    const item=(name)=>el('li',['class="nav-item"','role="presentation"'],el('a',['class="nav-link active"',`href="#${name}"`],el('i',['class="fas fa-folder"'],'')+el('span',[''],name)));
    var title=el('a',['class="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0"','href="#"'],el('div',['class="sidebar-brand-icon"'],el('img',['class="image-responsive"',`src="${config.logo_icon}"`,'style="width:40px;height:40px;border-radius:50%;"'],''))+el('div',['class="sidebar-brand-text mx-3"'],el('span',[''],config.title)));
    var znav=config.lists.map((link) =>{
      return item(link.name);
    }).join("");
    var btn=el('div',['class="text-center d-none d-md-inline"'],el('button',['class="btn rounded-circle border-0"','id="sidebarToggle"','type="button"'],''));
    return el('nav',['class="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0 fixed-top hline"'],el('div',['class="container-fluid d-flex flex-column p-0"'],title+el('hr',['class="sidebar-divider my-0"'],'')+el('ul',['class="nav navbar-nav text-light"','id="accordionSidebar"'],znav)+btn));
}

//tnav
function renderTnav(){
const option = (template,name) => el('option',[`value="${template}"`],name);
  var opt=config.search_engine.map((item) =>{
    return option(item.template,item.name);
  }).join("");
  var input=el('input',['class="bg-light form-control border-0 small"','id="searchinput"','type="text"','placeholder="Search for ..."'],'');
  var sbtn=el('div',['class="input-group-append"'],el('button',['class="btn btn-primary py-0"','id="sbtn"','type="button"'],el('i',['class="fas fa-search"'],'')));
  return el('nav',['class="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top fixed-top leftnav1"','id="leftnav"'],el('div',['class="container-fluid"'],el('form',['class="form-inline d-none d-sm-inline-block mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"'],el('div',['class="input-group"'],el('select',['class="form-inline border-0 w-25"','id="searchsel"'],opt)+input+sbtn))));
}

//main
function renderMain(){
  var main=config.lists.map((item)=> {
    const card=(url,name,desc)=>el('div',['class="col-md-5 col-xl-2 mb-2"'],el('a',[`href="${url}"`,'target="_blank"','data-toggle="tooltip"','data-html="true"',`title="网站名：${name}<br/>描述：${desc}"`],el('div',['class="card border-left-primary py-1"'],el('div',['class="card-body no-gutters textdark"'],el('div',['class="row no-gutters"'],el('div',['class="col-auto w-25"'],el('img',['class="media-left img-fluid"','style="width:45px;height:45px;"',`src="${getFavicon(url)}"`],''))+el('div',['class="col mr-1 ml-1"'],el('div',['class="font-weight-bold mb-0 ooh"'],el('span',[''],name))+el('div',['class="mb-0 ds doh"'],el('span',[''],desc))))))));
    const sort=el('div',['class="d-sm-flex justify-content-between align-items-center mb-2"'],el('h5',['class="text-dark mb-0"',`id="${item.name}"`],item.name));
    var content = el('div',['class="row"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));
    return el('div',[''],sort+ content);
    }).join("");
    return el('div',['class="container-fluid zbody1 hline"','id="zbody"'],main);
}

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*虚空大佬的api
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=45&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://icon.occ.hk/get.php?url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=45&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://icon.occ.hk/get.php?url=http://" + url;
  } 
}

function renderHTML(znav,tnav,index,footer) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>${config.title} - ${config.subtitle}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ytorpedol/navigation-html@1.0/assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/ytorpedol/navigation-html@1.0/assets/css/styles.min.css">
    <link rel="stylesheet" href="https://cdn.bootcss.com/font-awesome/5.7.1/css/all.css">
  </head>
  <body id="page-top">
    <div id="wrapper">
    ${znav}
    <div class="d-flex flex-column" id="content-wrapper">
    <div id="content">
    ${tnav}
    ${index}
    </div>
    ${footer}
    </div>
    <a class="border rounded d-inline scroll-to-top" href="#page-top">
    <i class="fas fa-angle-up"></i>
    </a>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/ytorpedol/navigation-html@1.0/assets/js/script.min.js"></script>
    <script>
    var clickn=1;
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();   
    });
    $("#sidebarToggle").click(function(){
        if(clickn==1){
        $("#leftnav").removeClass("leftnav1");
        $("#zbody").removeClass("zbody1");
        $("#leftnav").addClass("leftnav2");
        $("#zbody").addClass("zbody2");
        clickn=2;
        }
        else{
        $("#leftnav").removeClass("leftnav2");
        $("#zbody").removeClass("zbody2");
        $("#leftnav").addClass("leftnav1");
        $("#zbody").addClass("zbody1");
        clickn=1;
        }
    });
    $("#sbtn").on('click',function(e){
        var sel=$('#searchsel').val();
        var input=$('#searchinput').val();
        var url = url = sel.replace(/\$s/,$('#searchinput').val());
        window.open(url);
        });
    $("#searchinput").bind("keypress", function(){
      if (event.keyCode == 13){
      // 触发需要调用的方法
      $("#sbtn").click();
      }
      });
    </script>
  </body>
  </html>`
}
