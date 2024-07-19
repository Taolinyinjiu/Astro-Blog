---
slug: ROS2_1
title: ROS和ROS2是什么
description: 这篇文章主要介绍了ROS与ROS2的前世今生
date: 2024-07-1T03:00:00+08:00
hidden: false 
tags:
  -	ROS
---
# 1、ROS和ROS2是什么

### 01  ROS/ROS2是什么

智能时代，机器人正在向全场景的高度智能化方向进化，这对机器人开发提出了巨大挑战，机器人操作系统ROS应用而生。



那什么是ROS？什么又是ROS2呢？

接下来，我们就一起掀起ROS的神秘面纱，带领大家认识一下机器人开发中这位重量级的嘉宾。



### 02  ROS的诞生

对于越来越复杂的智能机器人系统，已经不是一个人或者一个团队可以独立完成的，如何高效开发机器人，是技术层面上非常重要的一个问题，针对这个问题，一群斯坦福大学的有志青年尝试给出一个答案，那就是机器人操作系统。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51RibuJSvib0MfxJPnQ1icfkwjClmzpvI9kic847Q7hIWNq7I5alUSzHf12bw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



2007年，他们诞生了这样一个想法，我们有没有可能做一款个人服务机器人，帮助我们完成洗衣做饭收拾家等一切你不想做的事情，甚至还可以在你无聊的时候，陪你聊天玩耍，最后他们真的做出来了。



当时，他们深知做出这样一款机器人并不容易，机械、电路、软件等都要涉及，而且横跨很多个专业，光靠自己肯定做不到，此时他们诞生了这样一个想法：**既然自己做不到，那为什么不联合所有人一起干呢？**



如果设计一套标准的机器人平台和其中的软件，大家都可以在这个平台上做应用开发，既然应用软件都基于同一平台，应用的分享也很容易实现，这就类似别人开发的苹果手机应用，只要你有苹果手机，同样也可以用。



说干就干，初期的机器人原型是用实验室可以找到的木头和一些零部件组成的，后期有了充足的资金，才得以实现图中这款外观精致、性能强悍的机器人——PR2，Personal Robot 2代。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51RxrxOv0HYgbd3j3VW1MawricUvibHWhuwKPbHefFibCx000UCqqtBrlcJA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



在上图中，我们可以看到PR2机器人已经可以完成叠毛巾、熨烫衣服、打台球、剪头发等一系列复杂的应用功能，以叠毛巾为例，这在当时是轰动机器人圈的重要研究，因为第一次有机器人可以完成柔性物体的处理，虽然效率很低，在100分钟之内只完成了5条毛巾的整理，但是在学术层面却推动机器人向前走了一大步。



这款机器人中的软件框架就是ROS的原型，所以ROS因这款个人服务机器人而生，很快也从中独立出来，成为一款用于更多机器人的软件系统。





### 03  ROS的发展

ROS诞生于2007年的斯坦福大学，这是早期PR2机器人的原型，这个项目很快被一家商业公司Willow Garage看中，类似现在的风险投资一样，他们投了一大笔钱给这群年轻人，PR2机器人在资本的助推下成功诞生。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51RzALtaGSepIU3flPQOG0GnbAv723Q3vQCUf255CxeXQDY9aATxXJBdw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



2010年，随着PR2机器人的发布，其中的软件正式确定了名称，就叫做机器人操作系统，Robot Operating System，简称为ROS。同年，ROS也肩负着让更多人使用的使命，正式开源。



PR2机器人虽好，但是成本居高不下，几百万的价格让绝大部分开发者望而却步，官方也注意到了这个问题，所以在2011年发布了一款后期成为ROS圈爆款的机器人——**Turtlebot**，这款机器人采用扫地机器人的底盘，加上xbox游戏机中的体感传感器Kinect，直接使用笔记本电脑就可以控制，支持ROS的所有开源功能，关键是价格便宜，随着这款机器人的普及，大大推动了ROS的应用。



从2012年开始，使用ROS的人越来越多，ROS官方也开始每年举办一届ROS开发者大会——**ROS Conference**，简称**ROSCon**，来自全球的开发者会齐聚一堂分享自己使用ROS开发的机器人应用，其中不乏亚马逊、Intel、微软等大公司的身影，近两年因为疫情原因改为线上举办，名称也变为了ROS World。



经历前几年野蛮而快速的增长，ROS逐渐迭代稳定，2014年起，ROS跟随Ubuntu系统，每两年推出一个长期支持版，每个版本支持五年时间，这标志着ROS的成熟，也让ROS加快了普及的步伐。



回到时间轴的起点，ROS的创始团队原本只想做一款个人服务机器人，万万没想到，**ROS被越来越多机器人使用，受限于当初设计的局限性，ROS的问题也逐渐暴露。**为了能够真正设计一款适用于所有机器人的操作系统，ROS2在2017年底正式发布，历经多年迭代，我们终于在2022年5月底，迎来了ROS2第一个长期支持版——**ROS2 Humble**，ROS2已经成熟，我们也进入了一个全新的ROS2时代。



从ROS发展的时间轴中，我们不仅可以了解到ROS的发展过程，更重要的是熟悉ROS和ROS2诞生的原因。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51R2hkSjJHXnocQ1YuLuXiadSZCIJ5XqZKNxKmFF32Le3MMP6qE6apSckg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



这里我们也把ROS2发展的时间轴单独提取出来，介于ROS在各种各样机器人中应用的问题，ROS2在2014年提出，2015年开始迭代，2017年推出第一个正式版，此后快速迭代，直到2022年推出了第一个长期支持版，本教程也会在该版本ROS2之上进行讲解。





### 04  ROS的特点

ROS怀揣“提高机器人软件复用率”的目标，促使社区快速发展和繁荣，时至今日，ROS已经广泛用于各种机器人的开发，无论是机械臂、移动机器人、水下机器人，还是人形机器人、复合机器人，统统都可以看到ROS的身影，ROS已经成为机器人领域的普遍标准。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51R5rQvic6XZysOo3aibu23CYib42dYib4yryb9Ajz7P5Ln7bSNB6VBOMLxfQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



提高机器人软件复用率，这个目标简单来讲就是**不要重新造轮子。**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51RAt4ibJr26wYicbtNnevNug5avCb9apZvyq1DqibKKXibAvI7ic4zJ6ZIIyA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



正如一家做汽车的公司，从零制造汽车并不是一个明智的做法，他们通常会采购A家的轮子、B家的引擎、C家的多媒体系统，最后把这些整合到一起做成汽车。



同理，我们也可以将ROS社区中已有的各种软件集合到一起，在此之上去实现自己的创意，同时还可以将自己的成果分享给别人，这样大家都可以站在巨人的肩膀上，向前走的更远，一步一步，智能机器人才会有更多沉淀和更长远的进步。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51RRD3yaIRia6o4mfXnQqIibCRTM0Et7UGnKmqaRHdzpeZo9HTbvkDMqJyQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



围绕这个核心目标，ROS在自身的设计上也尽量做到了模块化，由**通信机制、开发工具、应用功能、生态系统**四大部分组成。



同时ROS具备多项特点，这里的ROS是ROS1和ROS2的总称， 比如：



- **社区是全球化的**，那就可以集合全人类的智慧来推进机器人的智能化发展；
- 这些智慧的结晶都会以各种各样的**应用案例在社区中沉淀**下来；
- ROS本身也是完全开源的，**商业许可证非常宽松**；
- 对商业应用功能友好，这就代表着公司可以直接使用ROS开发商业化的机器人产品，**缩短了产品的上市时间**；
- ROS也可以**跨平台使用**，Linux、Windows、嵌入式系统都可以跑；
- ROS2中也新增了很多**支持工业应用**的新特性和新技术，促使ROS在越来越多领域中被使用。



### 05  ROS的社区

社区是ROS快速发展的核心动力，什么是社区呢？其实就是ROS相关资源的整合方式，比如wiki说明、问答网站、应用源码、论坛讨论等都算是社区中的元素。



ROS全球社区有几个重要网站：



1.answers.ros.org，这是一个ROS问答网站，大家可以在上边提出任何关于ROS的问题，全球很多开发者都很乐意回答我们的问题；



2.wiki.ros.org，这是ROS的维基百科，记录了ROS教程和各种功能包的使用；



3.discourse.ros.org，这是ROS论坛，关于ROS开发的新鲜事都可以在这里发表和查看，比如ROS的活动、新功能包的发布等等。



4.index.ros.org，是ROS各种资源的一个索引网站；



5.packages.ros.org，是ROS功能包存储的数据库。



这几个网站的使用情况基本就可以代表ROS社区的活跃度了。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51RqhsxFRmNEslsQmjMxnOuU53zDux1NL4ibLOVfdibMQKxVtgM2nLSTKag/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



上图是近几年ROS社区页面浏览量的增长曲线，从总体趋势上来看，各项增长速度都非常快，wiki作为日常使用最为频繁的网站，使用度无疑是最高的，现在每个月有**150万左右**的访问量，answers和packages现在差不多，每个月有**80万**左右，其他两个不多，四项加起来每个月基本有**250万**左右的访问量，已经是一个活跃度非常棒的社区了。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51R2ibWg4t5TtJdL8sLlGpxVYPam1PdtjKUfx2TeZ44ho5pVXJ2gTuBcSQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



从访问人数上来看，上边这张图更为清晰，**wiki每个月有20到25万人使用，answers每个月有15万人以上使用**，四项加起来每个月差不多有40多万的使用人数，这些用户绝大部分都是机器人开发者，可以看到ROS使用人数是越来越多了。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51R8BLo3ZmWdibVnM2BmQCr87HMEa4eqtr5qX7BEAKRQRw3picLmoRq79pA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



这张图是根据功能包下载次数统计得到的地域排名，基本上可以代表不同国家机器人研发的活跃程度，给大家作为一个参考。



总而言之，通过这些数据，我们可以看到的是ROS发展迅猛，正在助推机器人革命这一波大浪潮，大家每一个人在其中都大有可为。



如果你希望学习机器人开发，ROS绝对会成为你开发机器人的神兵利器，本教程也绝对是你的最佳选择。





### 06  参考资料

关于本教程的参考资料，主要推荐这几个网站。



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzsvic4cQph2NQY4jWjgiaf51RKicmpdUbNAXNHfOwEAjVehX830Z1zAeZEy3CNTfV4j4xOHpwKCf0EpQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



首先是最为推荐的搜索之王——**Google**，几乎所有问题，都可以在这里解决，作为开发工程师的同学，一定要掌握这个重要工具的使用方法。



其次是开源项目的主阵地——**Github**，ROS和社区中的绝大部分代码，都在这里托管，还有大量可以作为我们学习参考的开源项目都可以在这里找到，也是我们离不开的一个网站。



然后是**古月居**网站:

https://www.guyuehome.com/

这里有大量ROS机器人开发的技术内容和视频课程，还可以在泡泡板块中提问，也欢迎大家在这里和120万人分享你所学的知识。



最后是**:**

https://book.guyuehome.com/

我们会提供详细的ROS2入门教程，后续也会不断更新和扩展，努力成为大家学习ROS机器人开发的百科全书，配合课程视频学习，效果会更好。



好啦，欢迎大家来到ROS的世界，从这里开始，我们将一起踏上一段美妙的机器人开发之旅。