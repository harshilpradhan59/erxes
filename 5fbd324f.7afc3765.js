(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(9),o=(n(0),n(206)),i={id:"digitalocean",title:"DigitalOcean Marketplace"},l={id:"installation/digitalocean",title:"DigitalOcean Marketplace",description:"Launch a Droplet using erxes in the DigitalOcean Marketplace.",source:"@site/docs/installation/digitalocean.md",permalink:"/installation/digitalocean",editUrl:"https://github.com/erxes/erxes/edit/develop/docs/docs/installation/digitalocean.md",lastUpdatedBy:"Batnasan Byambasuren",lastUpdatedAt:1590639605,sidebar:"docs",previous:{title:"AWS Marketplace",permalink:"/installation/aws"},next:{title:"Upgrade",permalink:"/installation/upgrade"}},c=[{value:"Create an admin user",id:"create-an-admin-user",children:[]},{value:"Load initial data",id:"load-initial-data",children:[]},{value:"Use your own domain",id:"use-your-own-domain",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Launch a Droplet using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://marketplace.digitalocean.com/apps/erxes"}),"erxes")," in the DigitalOcean Marketplace.",Object(o.b)("br",{parentName:"p"}),"\n","Once you have created the Droplet, you will then have erxes up and running and it will be accessible by public IP address of the Droplet."),Object(o.b)("h2",{id:"create-an-admin-user"},"Create an admin user"),Object(o.b)("p",null,"Connect to your Droplet instance via ssh."),Object(o.b)("p",null,"Run the following commands."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"sudo su erxes\ncd ~/erxes-api\nexport MONGO_URL=mongodb://localhost/erxes?replicaSet=rs0\n")),Object(o.b)("p",null,"The following will create an admin user ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:admin@erxes.io"}),"admin@erxes.io")," with a random password (check your console to grab the password)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn initProject\n")),Object(o.b)("h2",{id:"load-initial-data"},"Load initial data"),Object(o.b)("p",null,"The below command will create initial permission groups, permissions, growth hack templates, email templates and some sample data and reset the admin password (check your console to grab the password)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn loadInitialData\n")),Object(o.b)("p",null,"If do not want to load sample data then you can run the following command just to load permissions."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn loadPermission\n")),Object(o.b)("p",null,"Now you can access erxes by your Droplet IP address."),Object(o.b)("h2",{id:"use-your-own-domain"},"Use your own domain"),Object(o.b)("p",null,"To be able to use your own domain with erxes, you will need to do a few steps."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update your domain DNS records - point your domain to your Droplet public IP address. The DNS changes may take up to 72 hours to propagate worldwide.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Log in to your server as ",Object(o.b)("inlineCode",{parentName:"p"},"erxes")," via ",Object(o.b)("inlineCode",{parentName:"p"},"ssh"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Edit ",Object(o.b)("inlineCode",{parentName:"p"},"/home/erxes/erxes/ui/build/js/env.js")," file where env vars for frontend app are stored.\nThe content of the file should be as follows:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'window.env = {\n  PORT: 3000,\n  NODE_ENV: "production",\n  REACT_APP_API_URL: "http://your_domain/api",\n  REACT_APP_API_SUBSCRIPTION_URL: "ws://your_domain/api/subscriptions",\n  REACT_APP_CDN_HOST: "http://your_domain/widgets",\n};\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Update all env vars with HTTP url in the ",Object(o.b)("inlineCode",{parentName:"p"},"/home/erxes/ecosystem.json")," file.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now, you need to restart pm2 erxes processes by running the following command:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"pm2 restart ecosystem.json\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Switch to ",Object(o.b)("inlineCode",{parentName:"p"},"root")," user and edit your nginx config file located in ",Object(o.b)("inlineCode",{parentName:"p"},"/etc/nginx/sites-available/default")," and replace ",Object(o.b)("inlineCode",{parentName:"p"},"server_name")," with your domain.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Lastly reload your nginx service by running ",Object(o.b)("inlineCode",{parentName:"p"},"systemctl reload nginx")))),Object(o.b)("p",null,"Now you can use erxes with your own domain."))}s.isMDXComponent=!0},206:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);