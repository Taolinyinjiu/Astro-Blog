---
slug: ROS2_4
title: ROS2命令行操作
description: 这篇文章主要介绍了什么是命令行，以及ros2中的命令行操作
date: 2024-07-4T03:00:00+08:00
hidden: false 
tags:
  -	ROS
---
# ROS2命令行操作

### 1、ROS2命令行操作

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqtYNJDwQNH7fbooBnSrRFocInOcOkM1vkYUJK5RojypffJ74s5iadLJQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



在之前运行小海龟案例的时候，我们接触到了ROS2中一种重要的调试工具——**命令行**，大家如果第一次使用，可能会有点不太适应，本节将带领大家进一步使用ROS2中的更多命令，随着学习的深入，大家一定可以感受到命令行的魅力。

### 2、Linux中的命令行

类似于科幻电影中的片段，命令行操作异常炫酷，但是其上手并不容易。为什么这样一种操作看似并不便捷的方式会被一直保留至今呢？无论对于Linux还是ROS来讲，都是必不可少的，大家先来想象一种场景。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqDprCVVAVEd9K7SRzSianC6ZR0nc1CUGK1OhyuibRttOT28dcOyBMtDyQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



比如我们去商场买衣服，商场里边的衣服虽然多，但并不是每次都可以满足我们的需求，总有一些时候我们逛来逛去就是哪一件都没有看中，此时你看到某一个商家推出服装定制服务，可以根据现有的所有款式，结合我们自己的需求，自主定制，虽然操作起来麻烦一点，但是灵活度高呀，你想要什么样的就可以设计成什么样的，完全不受既定规则的约束。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqgbLqbJo6kkaygmwzMCCm5ia4u2caKicyK3y7A5ZG98KrRCLtljKzRGQA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



在这种场景中，其他商家为我们呈现出已经做好的衣服，就类似于可视化软件一样，都是被精心设计的，但是并不一定能够完全解决我们的问题，这里定制服务中的各种布料、工具等就类似命令行，我们可以使用这些材料和工具灵活定制各种功能，约束就小很多了。



### 3、启动方式

回到命令行来，一系列的命令都是通过字符的方式输入的，怎么输入呢，并不是使用写字本，而是使用专门的软件，叫做**Terminal**，终端。



启动终端的方式有很多种：



- 在应用列表中打开
- 快捷键Ctrl+Alt+T打开
- 鼠标右键选择打开终端



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqjibwgdMjh9m0aMBicOagyhNDqU3DbTbxDiclJWH6weB8v61jXAAGLUrjA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



打开后这个深色背景的窗口就是终端，因为都是命令的输入，所以我们很少会用到鼠标，这也是为什么科幻电影中看到的黑客，笔记本电脑随身带，但是从来看不到鼠标的原因。



初次上手，大家一定会觉得命令行既枯燥，又难以记忆，这很正常，随着我们对这项工具的熟悉，大家一定可以慢慢体会到命令行操作的魅力所在。



至于命令行指令及功能参数的数量，确实多到令人发指，不过不用死机硬背，我们常用的命令也就一二十个，其他命令在需要用的时候搜索一下即可。



### 4、常用命令操作

我们先来体验一下Linux的常用命令，找找感觉。



#### **cd**

- 语法：cd <目录路径>
- 功能：改变工作目录。若没有指定“目录路径”，则回到用户的主目录



#### **pwd**

- 语法：pwd
- 功能：此命令显示出当前工作目录的绝对路径



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqGE1eXTf7nznNkM3BiajmplNoSjSPSiccha45ibCgK07o0slb2kZKoIHJg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



#### **mkdir**

- 语法：mkdir [选项] <目录名称>
- 功能：创建一个目录/文件夹



#### **ls**

- 语法：ls [选项] [目录名称…]
- 功能：列出目录/文件夹中的文件列表



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqap7bSTzwO1ibp6iaicJuGaEiaPUapFm2St59xialEMhcFrYelAt2K2KF6gg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



#### **gedit**

- 语法：gedit <文件名称>
- 功能：打开gedit编辑器编辑文件，若没有此文件则会新建



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqmz3piaB0X5oj64GOhFuWq5Rk29DLZRsIV9nvwETVLHicCIZ3w36fR4fA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



#### **mv**

- 语法：mv [选项] <源文件或目录> <目地文件或目录>
- 功能：为文件或目录改名或将文件由一个目录移入另一个目录中



#### **cp**

- 语法：cp [选项] <源文件名称或目录名称> <目的文件名称或目录名称>

- 功能：把一个文件或目录拷贝到另一文件或目录中，或者把多个源文件复制到目标目录中

  

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq5uzVU0JsrYSkPYhrWjibRYiczefCAjvJmiazzxvzdaPibnnF7zCAw5N2hg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



#### rm

- 语法：rm [选项] <文件名称或目录名称…>
- 功能：该命令的功能为删除一个目录中的一个或多个文件或目录，它也可以将某个目录及其下的所有文件及子目录均删除。对于链接文件，只是删除了链接，原有文件均保持不变



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqKbmCxMfOqFf92LQHicqYCibBFjtvsQYic2eOnJlfzEHicicJriaM3y5DQYKQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



#### sudo

- 语法：sudo [选项] [指令]
- 功能：以系统管理员权限来执行指令



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqZXGvKOPeJzoVjibApeMohkqLsCY9nDYOEUUe6NsTk6aic4VWMHbzvlkA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



这些命令大家不需要死记硬背，未来一边用一边查，用的多了，就会熟悉。





![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

ROS2中的命令行

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



ROS2命令行的操作机制与Linux相同，不过所有操作都集成在一个ros2的总命令中，后边第一个参数表示不同的操作目的，比如node表示对节点的操作，topic表示对话题的操作，具体操作干什么，还可以在后边继续跟一系列参数内容。



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqzusPeXIjCo6Ubv1TtiaZic0tOCIMDADQyVr4Er3F3vjrUBOXZozjJwFg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



接下来我们就以小海龟仿真为例，一起感受下ROS2命令行的主要功能，也对ROS2中的核心概念有一个大致了解。





![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

运行节点程序

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



想要运行ROS2中某个节点，我们可以使用ros2 run命令进行操作，例如我们要运行海龟仿真节点和键盘控制节点：



- 

```
$ ros2 run turtlesim turtlesim_node$ ros2 run turtlesim turtle_teleop_key
```



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq0OvtgLA9SUMZF0sNa3CVcffttqibaVTMo2aKLMQgCibvWJ45BicSCy9ibg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)







![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

查看节点信息

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



当前运行的ROS系统中都有哪些节点呢？可以这样来查看：



- 

```
$ ros2 node list
```



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqmkAINm9S0f2HeHd8P5JuUns0rTYZHBZNLl1txxBeNTBnoAJibhaicbKw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



如果对某一个节点感兴趣，加上一个info子命令，就可以知道它的详细信息啦：



- 

```
$ ros2 node info /turtlesim
```

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqbal9ty1xjvwibTQWgJ0X0kfIOshvqyWVAJCXR26sE5IxDRXgCaVa3Bg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)





![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

查看话题信息

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



当前系统中都有话题呢，使用如下命令即可查看：



- 

```
$ ros2 topic list
```



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq7H6U1j4GJfXd7DZKSLUlZpFfa3JtwjOXMD2zXrvUAiaQYA8cREJ7EQw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



还想看到某一个话题中的消息数据，加上echo子命令试一试：



- 

```
$ ros2 topic echo /turtle1/pose
```

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqVXcWRl2cXLIib1NriaqmNVEjZJoYkibkooj7f5MYibtNQ3Dic7NEiakbv3AA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)





![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

发布话题消息

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



想要控制海龟动起来，我们还可以直接通过命令行发布话题指令：



- 

```
$ ros2 topic pub --rate 1 /turtle1/cmd_vel geometry_msgs/msg/Twist "{linear: {x: 2.0, y: 0.0, z: 0.0}, angular: {x: 0.0, y: 0.0, z: 1.8}}"
```



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq9cZRFtIfbb2HA7xAO9jCLiaRxL5vMN9NnEyfXaBB3tW1BeWX5RYxghA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqjibSnNZAAMdDSDWfOYA6xhMs907mXicEnPDRng9VGibm4WrPLeKQTJyhw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)





![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

发送服务请求

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



一只海龟太孤单，仿真器还提供改了一个服务——产生海龟，我们试一试服务调用，再来一只海龟：



- 

```
$ ros2 service call /spawn turtlesim/srv/Spawn "{x: 2, y: 2, theta: 0.2, name: ''}"
```



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq2VDibj9Rg4q3OZ2cEpAa7j42wOTWuKxUXFFWPF7ju87yLg1X37OCsqg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqm2otjgmOSRADgFHMKgSOUJEYz2yxhLMibIsEtrTiaWgf2JGF11jR6FBA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)







![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

发送动作目标

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



想要让海龟完成一个具体动作，比如转到指定角度，仿真器中提供的这个action可以帮上忙，通过命令行这样发送动作目标：



- 

```
$ ros2 action send_goal /turtle1/rotate_absolute turtlesim/action/RotateAbsolute "theta: 3"
```



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZq2xb5dpUJuAS6hC1UgvyccjwARzAVIjibbia2la0HUPAicMlBBAUmDny3A/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)





![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

录制控制命令

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)

![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_gif/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqTEh1WiaKUribd9C0zmU83msJ7guCfSdfFaickK0AcbtP7s9VkqicXOTqwQ/640?wx_fmt=gif&tp=webp&wxfrom=5&wx_lazy=1)



系统运行中的数据有很多，如果想要把某段数据录制下来，回到实验室再复现这段数据如何？ROS2中的rosbag功能还是很好用的，轻松实现数据的录制与播放：



- 

```
$ ros2 bag record /turtle1/cmd_vel$ ros2 bag play rosbag2_2022_04_11-17_35_40/rosbag2_2022_04_11-17_35_40_0.db3
```



![图片](https://image.baidu.com/search/down?url=https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzslJGialMcqYNEdkD9LaHlZqiahs8xbDaNep4IwqbwdiaJ0POHPIfK6Vr4L3T9rEVqZYXRz3jEicL82yg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



以上就是ROS2中我们常用的命令啦，每一个命令的子命令还有很多，大家可以自己尝试看看。