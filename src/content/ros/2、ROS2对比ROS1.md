---
slug: ROS2_2
title: ROS2对比ROS1
description: 这篇文章主要在对比ROS与ROS2的区别
date: 2024-07-2T03:00:00+08:00
hidden: false 
tags:
  -	ROS
---
### 1、ROS2对比ROS1

在学习ROS2之前，你也许听说或使用过ROS1，ROS2从名称上来看，不就是在第二代ROS么，变化能有多大？



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqtRLzob3iaiaKbwIQichNicGbepBcia2Xn8QhFANcdqcBibOkgHvtia088IicEQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



我们就ROS1和ROS2做一个对比，看看这其中的变化到底有多大。

### 2、ROS1的局限性

首先来看第一个问题：为什么会有ROS2？Why ROS2？



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq940o9Yapkkiat3zTIU2n2jgHsPKibicOficzdgbg8n9lRaiauR69dicEImhA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



当然是因为ROS1有一些问题了，具体是什么问题呢？从ROS发展的历史中，我们似乎可以找到答案。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqUQMSTVyhyZDqiaY8cibAdDpWAFqJKhuMYKVvuEDBic2K2jvx0OuDLGs9g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



ROS最早的设计目标就是开发这样一款PR2家庭服务机器人，这款机器人绝大部分时间都是独立工作，为了让他具备充足的能力：



- 它搭载了**工作站级别的计算平台**和各种先进的通信设备，不用担忧算力不够，有足够的实力支持各种复杂的实时运算和处理；



- 由于是单兵作战，通信绝大部分都自己内部完成，那就可以用有线连接，**保证了良好的网络连接**，没有丢数据或者黑客入侵的风险；



- 这台机器人最终虽然小批量生产，**但是由于高昂的成本和售价**，也只能用于学术研究。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_jpg/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq2c8zexia0d09hk5KLuKpRRY8jZrHRfI67ZpDczKRtc6MrUsz6SzMTdQ/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

随着ROS的普及，应用ROS的机器人类型已经和PR2机器人有了天翻地覆的问题，也并不具备PR2这样的条件，那原本针对PR2设计的软件框架，就会出现一些问题，比如：



- 要在资源有限的嵌入式系统中运行；
- 要在有干扰的地方保证通信的可靠性；
- 要做成产品走向市场，甚至用在自动驾驶汽车和航天机器人上。

### 3、全新的ROS2

ROS2怀揣变革智能机器人时代的历史使命，在设计之初，就考虑到要满足各种各样机器人应用的需求。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqDibLsqWibHdQ2wlONqsh7XmLCqhBPQiaZbN45TfrbMJc6icL90fbLnHW6g/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



**1.多机器人系统**：未来机器人一定不会是独立的个体，机器人和机器人之间也需要通信和协作，ROS2为多机器人系统的应用提供了标准方法和通信机制。



**2.跨平台：**机器人应用场景不同，使用的控制平台也会有很大差异，比如自动驾驶汽车中的算力性能肯定比AMR机器人强很多，为了让所有机器人都可以运行ROS2，ROS2可以跨平台运行于Linux、Windows、MacOS、RTOS，甚至是没有任何系统的微控制器（MCU）上，这样我们就不用纠结自己的控制器能不能用ROS了。



**3.实时性：**机器人运动控制和很多行为策略要求机器人具备实时性，比如机器人要可靠得在100ms内发现前方的行人，或者稳定的在1ms周期内完成运动学、动力学的解算，ROS2为类似这样的实时性需求提供了基本保障。



**4.网络连接：**无论在怎样的网络环境下，ROS2都可以尽量保障机器人大量数据的完整性和安全性，比如在wifi信号不好的时候数据也要尽力发送过去，在有黑客入侵风险的场景下要对数据进行加密解密。



**5.产品化：**大量机器人已经走向我们的生活，未来还会越来越多，ROS2不仅可以用于机器人研发阶段，还可以直接搭载在产品中，走向消费市场，这对ROS2的稳定性、强壮性也提除了巨大挑战。



**6.项目管理：**机器人开发是一个复杂的系统工程，设计、开发、调试、测试、部署等全流程的项目管理工具和机制，也会在ROS2中体现，更方便我们去开发一款机器人。



要满足这些需求，ROS2的设计和开发工作并不简单，相对手机这样标准化的产品，Android系统也可以尽量做到标准化，但是机器人课时千差万别，**如何能够适合尽量多的机器人，这可能远比开发一个手机系统或者电脑系统更加复杂。**



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqkgIU9Avibsrib3K7QO7HaEjyv5WWX8bO6WR39WICYjicxAbOwic5UMicftA/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



ROS开发者面对的选择有两个，第一个是在ROS1的架构之上，进行修改和优化，类似一个盖好的房子，我们把它打成毛坯房，重新装修翻新一下，但肯定会受制于原本建筑的格局，长远来看并不是最佳选择，他们最终选择了第二种方案，那就是**推倒重来**。



所以ROS2是一个全新的机器人操作系统，在借鉴ROS1成功经验的基础上，对系统架构和软件代码全部进行了重新设计和实现。与ROS1相比，体现在以下几点：



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqKLCiapYwx5OT1ibrbImqic2Hf2WNpZsOKib0VorPm5KbkoMszT8bkcia1mQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



- **系统架构进行了颠覆性的变化**，ROS1中所有节点都需要在节点管理器ROS Master的管理下进行工作，一旦Master出现问题，系统就面临宕机的风险，ROS2实现了真正的分布式，不再有Master这个角色，借助一种全新的通信框架DDS，为所有节点的通信提供可靠保障。



- **软件API进行了重新设计**，ROS1原有的接口已经无法满足需求，ROS2结合C++最新标准和Python3语言特性，设计了更具通用性的API，虽然导致原有ROS1的代码无法直接在ROS2中运行，但是尽量保留了类似的使用方法，同时提供了大量移植的说明。



- **编译系统进行了升级**，ROS1中使用的rosbuild和catkin问题诸多，尤其是针对代码较多的大项目以及Python编写的项目，编译、链接经常会出错，ROS2对这些问题也进行了优化，重新优化后的编译系统叫做ament和colcon，大家在后续的课程中就会体验到新版编译器的使用方法。

  

这几点只是框架层面，ROS1和ROS2的明显变化，具体细节如何呢？我们继续给大家分解。

### 4、ROS2 vs ROS1

##### 系统架构

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqhXASRYnzvSNngJgexk53Dc8NMeTphap9avwKYezdovCibxBTgBsTqVg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



在这张图中，左侧是ROS1，右侧是ROS2，大家注意看两者最明显的变化，那就是**Master。**



- 在ROS1中，应用层里Master这个节点管理器的角色至关重要，所有节点都得听它指挥，类似是一个公司的CEO，有且只有一个，如果这个CEO突然消失，公司肯定会成一团乱麻。ROS2把这个最不稳定的角色请走了，节点可以通过另外一套discovery——**自发现机制**，找到彼此，从而建立稳定的通信连接。

  

- 中间层是ROS封装好的标准通信接口，我们写程序的时候，会频繁和这些通信接口打交道，比如发布一个图像的数据，接收一个雷达的信息，客户端库会再调用底层复杂的驱动和通信协议，让我们的开发变得更加简单明了。



- 在ROS1中，ROS通信依赖底层的TCP和UDP协议，而在ROS2中，通信协议更换成了更加复杂但也更加完善的**DDS系统**。



- 如果是在进程内需要进行大量数据的通信，ROS1和ROS2都提供了基于**共享内存**的通信方法，只不过名字不太一样而已。



- 最下边是系统层，也就是可以将ROS安装在哪些操作系统上，ROS1主要安装在Linux上，ROS2的可选项就很多了，**Linux、windows、MacOS、RTOS**都可以。



通过这样对比的方式，我们了解了ROS2的整体架构，如果大家有接触过ROS1，这个框架应该并不难理解，如果大家是从ROS2开始学习，先大致有一个印象，通过后续的学习，就会有更加深入的理解。



##### DDS通信



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqJyb1tT5QQibjyJ6aGBsRicL1sR7Zp8H1GahiatrVMCxGlOuu4HicaSaO0g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



ROS2相比ROS1最大的变化，除了省略了Master之外，应该就是通信系统的变化了。ROS1中基于TCP/UDP的通信系统，频繁诟病于延迟、丢数据、无法加密等问题，ROS2中的DDS在通信层面的功能就丰富多了。



**DDS其实是物联网中广泛应用的一种通信协议**，类似于我们常听说的5G通信一样，DDS是一个国际标准，能够实现该标准的软件系统并不是唯一的，所以我们可以选择多个厂家提供的DDS系统，比如这里的OpenSplice、FastRTPS，还有更多厂家提供的，每一家的性能不同，适用的场景也不同。



不过这就带来一个问题，每个DDS厂家的软件接口肯定是不一样的，如果我们按照某一家的接口写完了程序，想要切换其他厂家的DDS，不是要重新写代码么？这当然不符合ROS提高软件复用率的目标。



为了解决这个问题，ROS2设计了一个**ROS Middleware，简称RMW**，也就是指定一个标准的接口，比如如何发数据，如何收数据，数据的各种属性如何配置，都定义好了，如果厂家想要接入ROS社区，就得按照这个标准写一个适配的接口，把自家的DDS给移植过来，这样就把问题交给了最熟悉自家DDS的厂商。



对于我们这些用户来讲，某一个DDS用的不爽，只要安装另一个，然后做一个简单的配置，程序一行的都不用改，轻松更换底层的通信系统。



举一个例子，比如我们在产品开发时，可以先用开源版本的DDS满足基本需求，部署交付的产品时，再更换为商业版本更稳定的DDS，这样可以减少开发成本。



总之，DDS的加入，让ROS2系统更加稳定，也更加灵活，当然复杂度也会高一些。



这样，我们不用再纠结ROS的通信系统是否稳定、该如何优化等问题，更多精力都可以放在其他三个部分，专注优化我们的机器人应用功能。



##### 核心概念



ROS1应用已经非常广泛，全球有几百万开发者，大家已经熟悉了ROS1的开发方式以及其中的很多概念。ROS2尽量保留了这些概念，便于开发者从ROS1迁移到ROS2。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq0L6xoA4IlEibKPhvzDBt0PpRaibR3kyxEjKiaUTX5cliadULoKPOXz1aZQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



如果各位熟悉ROS1，这里的概念应该并不陌生，在ROS2中，这些概念依然存在，意义也几乎一致，在本课程的第二个部分，我们就会一一讲解这些概念的含义和使用方法，没有学习过ROS的小伙伴也不用担心。



##### 编码方式



再来看看编码，同样是一个发布者的程序，ROS1和ROS2的实现版本如两个图片所示。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqKGewmnIUHoXXXANwwicfadZiaMKP5FH2J9ZPchiaicdicVQpWv8DibEpy3PA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



总体而言，ROS2会用到更多面向对象的实现方法和语言特性，从编程语言的角度来讲，难度确实会提高一些，不过当我们迈过这道坎之后，就会发现我们写的程序会更具备可读性和可移植性，也会更接接近真实企业中机器人软件开发的过程。



具体如何编码，大家暂且稍安勿躁，切记不要搬来一本大部头的编程语言教程，一页一页学习，更好的方式是在项目开发的过程中一边用一边学，后续课程我们也会带领大家一步一步来操作。



##### 命令行



最后我们再对比下ROS开发中最为常用的一种工具——命令行。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqGVb5NFGvodt9C8iaPvLzDDGbxUr0g3AmVRPrAFXgNhKAOW6RWaqI1PQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



ROS1中的命令行相对分散，每一个功能都是一个独立的命令，比如rosrun启动某一个节点，rostopic控制话题相关的功能。



ROS2对命令行做了大幅度的集成，所有命令都集成在一个ros2的主命令中，比如ros2 run，表示启动某一个节点，ros2 topic表示话题相关的功能。



除此之外，ros2命令行也会有更多功能，我们在后续教程中陆续揭秘。



好啦，以上，我们把ROS2和ROS1做了对比，总结而言就是：



- 节点干掉了Master
- 通信换成了DDS
- 核心概念没变化
- 编程难度有上升



如果大家初次上手就选择了ROS2，现有一个大致印象即可，跟随教程，你就会慢慢理解这些特性。