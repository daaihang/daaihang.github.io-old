import{ab as o,H as n,I as t,G as e,V as a,O as p,ac as h,Y as c}from"./framework-c2f60e5e.js";const d={},s=e("h1",{id:"新手必须懂得什么叫oep-以及查找的常用方式软件破解什么是oep",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#新手必须懂得什么叫oep-以及查找的常用方式软件破解什么是oep","aria-hidden":"true"},"#"),a(" 新手必须懂得什么叫OEP，以及查找的常用方式软件破解什么是oep?")],-1),i={href:"http://www.cppblog.com/sleepwom/archive/2009/09/24/97116.html",target:"_blank",rel:"noopener noreferrer"},l=h('<p><strong>original entry point 原始入口点</strong></p><p>常见脱壳知识：1.PUSHAD （压栈） 代表程序的入口点 2.POPAD （出栈） 代表程序的出口点，与PUSHAD想对应，一般找到这个OEP就在附近拉！ 3.OEP：程序的入口点，注意这点：软件加壳就是隐藏了OEP（或者用了假的OEP）， 只要我们找到程序真正的OEP，就可以立刻脱壳。</p><h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一：</h2><p>1.用OD载入，不分析代码！ 2.单步向下跟踪F8，是向下跳的让它实现 3.遇到程序往回跳的（包括循环），我们在下一句代码处按F4（或者右健单击代码，选择断点——运行到所选） 4.绿色线条表示跳转没实现，不用理会，红色线条表示跳转已经实现！ 5.如果刚载入程序，在附近就有一个CALL的，我们就F7跟进去，这样很快就能到程序的OEP 6.在跟踪的时候，如果运行到某个CALL程序就运行的，就在这个CALL中F7进入 7.一般有很大的跳转，比如 jmp XXXXXX 或者 JE XXXXXX 或者有RETE的一般很快就会到程序的OEP。</p><h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二：</h2><p>ESP定理脱壳（ESP在OD的寄存器中，我们只要在命令行下ESP的硬件访问断点，就会一下来到程序的OEP了！） 1.开始就点F8，注意观察OD右上角的寄存器中ESP有没出现。 2.在命令行下：dd 0012FFA4(指在当前代码中的ESP地址)，按回车！ 3.选种下断的地址，下硬件访问WORD断点。 4.按一下F9运行程序，直接来到了跳转处，按下F8，到达程序OEP，脱壳</p><h2 id="方法三" tabindex="-1"><a class="header-anchor" href="#方法三" aria-hidden="true">#</a> 方法三：</h2><p>内存跟踪： 1：用OD打开软件！ 2：点击选项——调试选项——异常，把里面的忽略全部√上！CTRL+F2重载下程序！ 3：按ALT+M,DA 打开内存镜象，找到第一个.rsrc.按F2下断点， 然后按SHIFT+F9运行到断点，接着再按ALT+M,DA 打开内存镜象，找到.RSRC上面的CODE，按 F2下断点！然后按SHIFT+F9，直接到达程序OEP，脱壳！</p><h2 id="方法四" tabindex="-1"><a class="header-anchor" href="#方法四" aria-hidden="true">#</a> 方法四：</h2><p>一步到达OEP（前辈们总结的经验） 1.开始按Ctrl+F,输入：popad（只适合少数壳，包括ASPACK壳），然后按下F2，F9运行到此处 2.来到大跳转处，点下F8，脱壳之！</p><h2 id="方法五" tabindex="-1"><a class="header-anchor" href="#方法五" aria-hidden="true">#</a> 方法五：</h2><p>1：用OD打开软件！ 2：点击选项——调试选项——异常，把里面的√全部去掉！CTRL+F2重载下程序！ 3：一开是程序就是一个跳转，在这里我们按SHIFT+F9，直到程序运行，记下从开始按F9到程序 运行的次数！ 4：CTRL+F2重载程序，按SHIFT+F9（次数为程序运行的次数-1次 5：在OD的右下角我们看见有一个SE 句柄，这时我们按CTRL+G，输入SE 句柄前的地址！ 6：按F2下断点！然后按SHIFT+F9来到断点处！ 7：去掉断点，按F8慢慢向下走！ 8：到达程序的OEP，脱壳！</p><p>以上方法，针对不同的壳，至于OEP是什么样子，这个就不好说了，不同的语言写出来的样子就不一样，有高手能总结下OEP的样子吗???</p><p>新手朋友可以记住这几种方式，一般壳脱掉是没有什么问题的。</p><p>再用一个最幼稚的比喻来形容加壳的软件，那个带壳的软件，就是穿了衣服的人，要看它到底是男是女，就把衣服脱掉，不可能哪个生出来就穿了衣服吧，就像软件一样，写出来不可能就带壳的，都是后面加上去的。脱下来了，就一目了然了。。。不知道这个比喻形容的清楚不<s>呵呵</s>~</p><p>基础东西，老鸟绕过，新手要学破解的，必须掌握。我也在学习中。。。很多壳有专用的脱法，慢慢来学，不急</p>',16);function E(F,O){const r=c("ExternalLinkIcon");return n(),t("div",null,[s,e("blockquote",null,[e("p",null,[a("摘选自："),e("a",i,[a("新手必须懂得什么叫OEP，以及查找的常用方式软件破解什么是oep? - S.l.e!ep.￠% - C++博客 (cppblog.com)"),p(r)])])]),l])}const _=o(d,[["render",E],["__file","OEP.html.vue"]]);export{_ as default};