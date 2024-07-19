---
slug: ROS2_5
title: ROS2开发环境部署
description: 这篇文章主要在介绍如何部署ROS2的开发环境，开发工具：Git，Vscode以及Vscode插件的配置
date: 2024-07-5T03:00:00+08:00
hidden: false 
tags:
  -	ROS
---
# ROS2开发环境部署

### 1、ROS2开发环境配置

ROS机器人开发肯定离不开代码编写，我们课程中会给大家提供大量示例源码，这些代码如何查看、编写、编译呢？我们需要先做一些准备，完成开发环境的配置，给大家推荐两款重要的开发工具——vscode和git。



### 2、Git

git是一个版本管理软件，也是因Linux而生。

![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEGKSFvkjsABI2hUK6Skru8kksTibpPpvpH0cgZYDeORwyxjArTmTHvhg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



Linux发展迅速，成千上万人都会贡献代码，这些代码有些是修复bug的，有些是贡献新硬件驱动的，有些是增加系统新特性的，几千万行的代码人工一行一行审核合并肯定是不可能的，这就需要有一款软件，可以高效管理所有提交的代码，让开发者看到每次提交变更的代码具体是哪里，自动判断会不会有已有代码冲突，以及在多个不同版本之间切换等等功能。



所以Linux之父Linus就设计并开发了这款版本管理工具——git，之后也被广泛应用，比如我们常听到的开源项目网站Github，和国内的码云Gitee，都在使用git工具进行众多开源项目的内容管理。



Linux中安装git的方法非常简单，大家直接在终端中使用这一行命令就可以完成安装。



```bash
$ sudo apt install git
```



下载教程源码



《ROS2入门21讲》课程源码的下载方式：



```bash
$ git clone https://gitee.com/guyuehome/ros2_21_tutorials.git
```



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEx0OWCYccSUTsVR48EHkK5lS5CZxrCTrIyib28vYzzyJjQJeIn35HOeg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



下载好的课程代码是这样的，里边有很多文件夹，文件夹中还会有更多文件夹和代码文件，如果用系统自带的文件浏览器和记事本查看，就略显复杂，这里推荐另外一个集成开发环境——VSCode。



### 3、VSCode



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEQsMeIKpe8V9j99rZvicvpmKUQ8XSz09o0GDIa2H5yMf710a2SV4ZZFQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



Visual Studio Code，简称VSCode，是微软在2015年推出的一个轻量但功能强大的源代码编辑器，支持 Windows、Linux和 macOS操作系统，扩展组件非常丰富，可以快速搭建成为项目开发的神兵利器。



官方网站：https://code.visualstudio.com/

下载链接：https://code.visualstudio.com/Download



### 4、VSCode插件配置



为了便于后续ROS2的开发与调试，我们还可以安装一系列插件，无限扩展VSCode的功能。



**中文语言包**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEmap9VnqOMmFQibUUvjlVe5o936OIHC26D22s6KV35r1lqsx7cL5KibFA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**Python插件**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKESlqaQx8YECr3hkPibyJibh5CDKPPl02X9EKHTT9Wt9iag2VF2RYlBYgkw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**C++插件**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEaZZev3VasbaLfc8sKmriahwkNeWrAdCD6cpsxeKsch7ictje6E5AsC1g/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**CMake插件**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKES0ANic2BgU3vUaFvia4qM9m8YzHeErkNe1ibYxgicsq31vaJYw17bug2cA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**vscode-icons**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEib6jOKWj5zaKTk1Aheh1mr88HtYOdqb1hLhUhZ8R9lk4ickEmWuBn4Hw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**ROS插件**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEeETH5LCpkiaux1LoiaB0z17cBOnqRPWTnl0IgXmMpSibzdR8tNch7C7XA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**Msg Language Support**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEHVWL3FBxuWFicDjrqAbrMFGIsIIEu1ibMHK3kD2V5e1edaLM58YbV8pw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**Visual Studio IntelliCode**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEDibPzBtZjgcsGUOmQXicDwetFYZ2MnlWTF62EqCW9LyrlVJkIxufXTfg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**URDF**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEaicYP7FeZGicXLcSRurpt6RC2Tiaabjp4d09nhAtR2Pevgeb8XVAc7LYw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



**Markdown All in One**



![图片](https://mmbiz.qpic.cn/mmbiz_png/ZUHCFZqSZzvF0ZGdbKHLuhq6icqByaicKEjPOjQsJ7X1DVVFDssb65Zsb79EicVNjRZCJiacTliaSyEnPnibE3vJtZPQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)



VSCode支持的插件众多，以上只作为个人推荐，大家也可以在网上搜索，配置出自己最喜欢的开发环境。