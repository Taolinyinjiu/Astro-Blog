---
slug: ROS2_3
title: ROS2安装方法
description: 这篇文章主要在介绍如何安装ROS2
date: 2024-07-3T03:00:00+08:00
hidden: false 
tags:
  -	ROS
---

# 3、ROS2安装方法



本节，我们一起安装ROS2，安装前先要了解一下ROS2底层最重要的一种操作系统——Linux。

### 1、Linux系统简介

时间回到1991年，一位热爱计算机的芬兰大学生**林纳斯**，在熟悉了操作系统原理和unix系统后，决定自己动手做一个，实践是检验真理的唯一标准，说干就干，他参考已有的一些通用标准，重新设计了一套操作系统内核，不仅可以实现多用户、多任务的管理，还可以兼容unix原有的应用程序。



最重要的是，他把这套尚不成熟的操作系统分享到了互联网上，并用自己的名字命名了这套系统，也就是**Linux**。

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq9ekLR3CJ3zhEianJowdz4fqJk7Snt0rF6I2SZdfsosibbGrSy606p3jQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



原本出于个人爱好的Linux系统通过互联网快速传播，更多爱好者看到Linux之后，也激发了乐于分享的热情，就把使用过程中的问题和修复方法做了反馈。



一石激起千层浪，越来越多人加入到了Linux维护的行列当中，一个原本功能有限、bug很多的操作系统，快速强大起来，伴随其中**发扬光大的是开源精神**。



与Windows系统收费，或MacOS硬件绑定的模式不同，**Linux是一套免费并且开放源代码的操作系统**，任何人都可以使用或者提交反馈，这就吸引了大量的开发者、爱好者，甚至很多企业，现在，每年对Linux系统提交的代码量已经成为衡量一个大公司技术实力的重要指标之一。



Linux发展迅猛，已经成为了性能稳定的多用户操作系统，也是ROS2依赖的重要底层系统。虽然ROS2目前也支持Windows、MacOS，但对Linux系统的支持最好，在本教程中，我们主要讲解Linux之上的ROS2使用方法，其他系统原理也基本相同。



所以在使用ROS2之前，我们需要先安装Linux，此时会出现另外一个概念——**发行版**。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqeuNthIBtZpibVNqkhku9RLxHTDibhMyczwnnq5HpJbxrAOE5X5iaia0DSg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



什么叫发行版呢？准确来讲，**我们提到的Linux应该叫做操作系统内核**，并没有可视化界面，发行版就是给这个内核加上华丽的外衣，把操作界面和各种应用软件放到一起，打包成我们安装系统的镜像。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqsNlsxhBDPb8jmEbGUrriaIpf1Rmia4gopknXmZZJfUhllJia8T7ju2T2g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



所以一般情况下，我们常用到的Linux系统，都是各种各样的发行版，比如Ubuntu、Fedora、RedHat等等，每一个发行版都有其适用的场景，比如RedHat适合商业应用、CentOS适合服务器、Ubuntu、Fedora适合个人使用等，每一个版本的界面不太一样，但核心都是Linux，操作方法基本相同。



### 2、Ubuntu系统简介



我们后续课程使用到的Linux发行版就是ubuntu系统。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqaAfjU8XRbB6qpqDXIUXwxnfzF1azng6JoxEMtc49e28aDA6yLe85tg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



Ubuntu诞生于2004年10月份，**每六个月发布一个新版本**，用户可以一直免费升级使用，我们常用的浏览器、文件编辑器、通讯软件等一应俱全。在软件开发领域，无论是互联网开发，还是人工智能开发，还是大家关注的机器人开发，Ubuntu都占据绝对重要的位置。



Ubuntu的版本变动比较快，如何选择合适自己使用的版本很重要，因为其中各种软件版本不同会直接影响我们上层应用的移植效果。



在选择版本的时候，大家可以关注一下紧随其后的编号，比如Ubuntu22.04。22代表2022年，04表示2022年的4月份发布，除了04还可能会出现的是10，就是10月份发布，所以从数字编号上就可以看出各个版本发布的顺序。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqSUiaHtvgfwjOIGv6TrCvF3pqOtONbDicNHn3iaKVd8WPYaBibiaP6zAlRsw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



但是这样依然会有很多版本，为了让更多开发者有一个稳定的系统环境，Ubuntu每隔两年的4月份会发布一个长期支持版，后缀会加LTS，保证5年之内持续维护更新，比如Ubuntu20.04 LTS，Ubuntu22.04 LTS，除此之外的版本都是普通版，只维护18个月，所以大家在选择时，**优先考虑长期支持版**。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqiaqv6r2e2dbKYEDDEicYGyic1fs0t2HBMwRicm71bUAZic7GTdZWO06RBBw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



在本教程中，我们以**Ubuntu22.04**为例进行讲解，大家也可以选择其他长期支持版本。



好了，大家一定已经摩拳擦掌想要试一试Ubuntu了，安装方法很多，如果你之前已经熟悉Linux，建议在电脑上硬盘安装Ubuntu，这样可以发挥出硬件最大的性能，如果你是第一次接触Linux，建议在已有的windows上通过虚拟机安装，未来熟悉之后再考虑硬盘安装。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq0XbptDce5QgNHQCpaBdQIzUxtXjAlW0tibx3EpOBFibrydVqS7b6uplQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



这里我们主要介绍虚拟机中的安装方法，大家也可以参考课程资料或网络资料，自行考虑硬盘安装。



### 3、Ubuntu虚拟机安装



虚拟机是一个软件，可以在已有系统之上，构建另外一个虚拟的系统，让多个操作环境同时运行。



这里我们采用的虚拟机软件叫做vmware，下载地址如下，安装步骤和其他软件相同，请大家自行下载并安装：

https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html



准备工作完成后，就可以开始系统安装啦，安装步骤如下：



**1.下载系统镜像**



下载链接：

https://ubuntu.com/download/desktop



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqMQzKbykPREuEAriabRcG8xdFoicJrtYQmXibs1A8q0VQnkH98xILgwqkQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**2. 在虚拟机中创建系统**



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq6Ge6ZMVCia3yE1XGeKWAhuTfPdnlicXrpQgXFh4N1zhBGum5micKH0ucg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**3. 设置虚拟机硬盘大小**



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqfVy9D9xYw9ccSYZgsK5OJYWn46RiaIkSBOEe02TIjXHJANhWa3TkXGA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

**4. 设置Ubuntu镜像路径**



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqbDSVPIDKHGkrHWPcstq9ytx6XicBicpCvKTSTvkhbUmH0p5Q8kMp0maQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**5. 启动虚拟机**



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqea1tonytRQ4b0B3rRIUXEpUnoyMbx9oVQdEOyPOzMnVxEyak0l7LIA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**6. 设置用户名和密码**



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq3YcDOTVHAw3FAACDvU3FicfgetFshXbq8K7oPknvAC21EsRsIhDNwBg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**7. 等待系统安装**



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqibOBqEBkbU6V8nRTZMcSPwCiabXUD0faw7HzuNvNiaWQqMuEE3S33jc2A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**8. 完成安装**



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqdHIeFsfXxHFUYyHf1WhW2qlDk7JdE4Y3Vjd5lFxuGZfLU4FS7E3SwQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



Ubuntu系统安装好后，大家可以先随意使用熟悉一下。



### 4、ROS2系统安装



接下来，我们就可以把ROS2安装到Ubuntu系统中了。安装步骤如下：



**1. 设置编码**



```bash
$ sudo apt update && sudo apt install locales
$ sudo locale-gen en_US en_US.UTF-8
$ sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8 
$ export LANG=en_US.UTF-8
```



**2. 添加源**



```bash
$ sudo apt update && sudo apt install curl gnupg lsb-release 
$ sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg 
$ echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```



如遇报错“Failed to connect to raw.githubusercontent.com”



可参考：https://www.guyuehome.com/37844



**3. 安装ROS2**



```bash
$ sudo apt update
$ sudo apt upgrade
$ sudo apt install ros-humble-desktop
```



**4. 设置环境变量**



```bash
$ source /opt/ros/humble/setup.bash
$ echo " source /opt/ros/humble/setup.bash" >> ~/.bashrc
```



至此，ROS2就已经在系统中安装好了。



### 4、ROS2示例测试



为了验证ROS2安装成功，我们可以通过以下示例进行测试。



**示例一：命令行示例**



先来试试ROS2最为重要的底层通信系统DDS是否正常吧。



启动第一个终端，通过以下命令启动一个数据的发布者节点：



```bash
$ ros2 run demo_nodes_cpp talker
```



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq1PbUtRribHbltwy9rSrIpEGhj6HQvqHtOEiaCW8CbBpZMzr7sZx9y99A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



启动第二个终端，通过以下命令启动一个数据的订阅者节点：



- 

```
$ ros2 run demo_nodes_py listener
```



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqUlSFE03frk4eEM1mUvdSEed0FHJjQ3ngVzGT5Ydfuqx3WMI8ibHEiaQg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



如果“Hello World”字符串在两个终端中正常传输，说明通信系统没有问题。



**示例二：小海龟仿真示例**



再来试一试ROS中的经典示例——小海龟仿真器。



启动两个终端，分别运行如下指令：



```bash
$ ros2 run turtlesim turtlesim_node
$ ros2 run turtlesim turtle_teleop_key
```



第一句指令将启动一个蓝色背景的海龟仿真器，第二句指令将启动一个键盘控制节点，在该终端中点击键盘上的“上下左右”按键，就可以控制小海龟运动啦。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqiaAudy7lmsf8o62wE0QyOmuK4t5gDvCHpp3xxFBWibkWXRwAFc5YRcicg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



关于小海龟中蕴藏的ROS奥义，我们在后续教程中将持续探索。



至此，ROS2安装成功。