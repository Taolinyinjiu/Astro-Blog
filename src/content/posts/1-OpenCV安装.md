---
slug: opencv-instlal
title: OpenCV 安装
description: 这篇文章主要讲述如何在个人电脑上安装OpenCV
date: 2024-07-17T03:00:00+08:00
hidden: false 
tags:
  -	OpenCV
---
# OPENCV安装

### 简介

#### OpenCV

OpenCV（全称为 Open Computer Vision 开源的计算机视觉库）由**Gary Bradsky**于1999年在英特尔创立，第一版于2000年问世。**Vadim Pisarevsky**加入Gary Bradsky，一起管理英特尔的俄罗斯软件OpenCV团队。2005年，OpenCV用于Stanley，该车赢得了2005年DARPA挑战赛的冠军。后来，在Willow Garage的支持下，它的积极发展得以继续，由Gary Bradsky和Vadim Pisarevsky领导了该项目。OpenCV现在支持与计算机视觉和机器学习有关的多种算法，并且正在日益扩展。

OpenCV支持多种编程语言，例如C++、Python、Java等，并且可在Windows、Linux、OS X、Android和iOS等不同平台上使用。基于CUDA和OpenCL的高速GPU操作的接口也正在积极开发中。

OpenCV-Python是用于OpenCV的Python API，结合了OpenCV C++ API和Python语言的最佳特性。

#### OpenCV-Python

OpenCV-Python是旨在解决计算机视觉问题的Python专用库。

Python是由**Guido van Rossum**发起的通用编程语言，很快就非常流行，主要是因为它的简单性和代码可读性。它使程序员可以用较少的代码行表达想法，而不会降低可读性。

与C/C++之类的语言相比，Python速度较慢。也就是说，可以使用C/C++轻松扩展Python，这使我们能够用C/C++编写计算密集型代码并创建可用作Python模块的Python包装器。这给我们带来了两个好处：首先，代码与原始C/C++代码一样快（因为它是在后台运行的实际C++代码），其次，在Python中比C/C++编写代码更容易。OpenCV-Python是原始OpenCV C++实现的Python包装器。

OpenCV-Python利用了**Numpy**，这是一个高度优化的库，用于使用MATLAB样式的语法进行数值运算。所有OpenCV数组结构都与Numpy数组相互转换。这也使与使用Numpy的其他库（例如SciPy和Matplotlib）的集成变得更加容易。

（值得注意的是，大多数程序员通过C++实现的与Numpy相同的操作，并不如Numpy的效率高,但总有人认为自己写得比Numpy要好🤣）

#### 其他OpenCV学习资料

1. Python快速指南- [一小部分Python]：http://swaroopch.com/notes/python/
2. 基本的Numpy教程：http://wiki.scipy.org/Tentative_NumPy_Tutorial
3. numpy示例列表：http://wiki.scipy.org/Numpy_Example_List
4. OpenCV文档：http://docs.opencv.org/
5. OpenCV论坛：http://answers.opencv.org/questions/

### 一些安装OpenCV的前置工作

#### 配置一个集成开发环境IDE

##### 为什么需要一个集成开发环境？

首先要说明的是，Opencv的代码很多，他是一个集成的计算机视觉开源库，这也就意味着，OpenCV可供你调用的代码很多，在初学阶段，你可能并不能很快的反应过来你需要什么样的函数去完成你要实现的操作，同时也很难去完整的拼写函数的名字，这时候一个集成开发环境是很重要的，他能在你学习的起步阶段去减轻你的负担，让你在学习的过程中保持一种，轻松感或者说是愉快感，比如配置号AI自动补全的PyCharm，我只需要点击五次tab，就完成了对一个摄像头的测试代码。

##### 如何去选择一个集成开发环境？

集成的开发环境有很多，可能你也听说过一些，比如Visual Studio Code，Visual Studio，Pycharm……,那么选择什么样的开发环境呢，对于第一次接触像OpenCV的大型工程项目来说

如果你需要入门学习OpenCV的C++接口，那么选择Visual Studio是最好的方案，虽然他很大，很臃肿，但是同样地，他也很好，提供了快速的入门和多种的功能，或许在刚入门阶段，你会很疑惑或者觉得提供这么多的功能是不必要的，但是随着你逐渐的学习，以及满满的使用他所提供的功能，你会逐渐的提高自己的能力，以及对整个工程的理解。虽然Visual Code臃肿了一些，但是他却不会要求你花费更多的时间在配置上面。

但是话又说回来了，如果你想要学习OpenCV-Python，那么我建议你使用PyCharm，并不是说Visual Studio Code不好，而是我习惯了PyCharm，并且用着也很顺手。

如果同学们需要配置集成开发环境，建议移步CSDN，因为我的环境早已配置好了，并且懒得再在这个阶段重新配置。

#### 我需要管理Python的版本吗？

这个问题或许经常出现在很多同学/朋友配置有关Python项目的流程中，看着很多的教程配置conda，有的同学可能会去想：为什么他们要配置conda呢？难道一个python解释器直接安装到电脑上不好用吗？

这主要是同学们没有遇见过项目冲突的问题，假设我在大一的时候配置了一套python的环境，安装了opencv等一系列的工程，然后在大二的某一天，我去做一个项目，项目用的python版本很新/很久（通常是后者。。），然后我的python版本下某些库无法顺利的安装，这时候我可能就需要兼容到项目的python版本，可是卸载python，就要同时卸载很多东西。

那么存不存在一个管理器，能够管理python的版本，让他随时切换到我想要的版本呢？当然是存在的，就是我们所提到的conda

首先我们要来讲什么是Conda，Conda是一个开源的软件包管理器和环境管理工具，当然其主要是以命令行的形式进行管理，同时Conda又会分为两个版本，[Anaconda](https://www.anaconda.com/download)和[Miniconda](https://docs.anaconda.com/free/miniconda/)

Anaconda 是一个包含了数百个预安装软件包的Python环境管理工具，包括Python解释器、各种科学计算和数据分析库、可视化工具、深度学习框架等，Anaconda旨在为数据科学家和研究者提供一个完整的数据科学环境，可以直接安装并使用大量的数据科学工具，所以说，Anaconda是一个**安装包大，占用空间大的工具**

Miniconda 是一个轻量级的Python环境管理工具，仅包括conda，python以及一些必须的基本依赖库。也就是说Miniconda的安装包小，占用空间小，是一个相较于Anaconda来说更加**灵活的工具**

总的来说Anaconda和Miniconda，各有优势，如果你有充足的空间，同时认为自己会需要一个完整的数据科学环境，那么可以使用Anaconda，但如果自己只是想尝尝鲜，使用miniconda

最后附上csdn中一个conda的安装链接：https://blog.csdn.net/lewis2951/article/details/136640530

#### 如何安装Python

首先安装python需要考虑到python的版本问题，如果你只是简单地学习，那么版本似乎没有什么太大的关系。

##### 有conda的

假如你安装了conda，无论是miniconda还是anaconda，系统都会自动创建一个名为base的默认环境，这个base环境里面会存在一个python的解释器，假如我们要查看某个环境的python版本（以base环境为例）

```bash
#首先列出当前conda中的所有的环境
conda env list
#激活 base 环境
conda activate base
#查看Python版本
python --version 或者 python -V	
#退出 base 环境
conda deactivate base
```

但是，话又说回来了，我都用conda了，当然是希望为不同的项目配置不同的python环境

```bash
# 用指定虚拟环境的名字的方式创建新环境
conda create --name your_env_name
# 用指定虚拟环境的安装路径的方式创建新环境
conda create --prefix your_env_dir 
```

很遗憾的是，conda在创建新环境的时候，你不能既指定名字又指定安装路径(我为什么不能既要又要还要呢？)，如果你需要深究原理的话，就可以移步[Google](https://www.google.com/)了,不过可以提醒的是，使用名字指定的，终端中左侧括号内显示的是名字，而指定安装路径的，显示的就是安装路径，即使你使用某种跟我一样的方法实现了list时显示修改后的名字，在activate后还是会显示路径。。。

##### 没有配置conda的

1. 进入Python官网：**https://www.python.org**
2. 点击头顶Download，选择Windows，然后选择版本，以及电脑对应的位数（记得要选择installer结尾）
3. 安装，然后一路next，如果需要修改某些设置，可以百度或者google以及百度翻译一下，但其实默认就行，不过要记得指定安装目录，然后记住这里
4. 点击键盘上的win键，然后输入cmd，打开cmd窗口后分别输入python --version与pip 来检查python是否安装好了
5. 点击键盘上的win键，然后输入编辑系统环境变量，接着点击右下角环境变量，在系统变量里面找到**PATH**，双击它，然后点击右边的新建，接着点击浏览，找到之前制定的python的安装路径，再在里面找到Scripts，进入该目录后，确定就行。
6. 重启电脑，或者先重复4中操作再重启电脑

#### 什么是pip？

或许在上面你会疑惑，为什么检查Python安装好没有，还需要输入pip查看，pip又是什么呢？

简单地来说，pip是一个现代的，通用的Python包管理器，它提供了对Python包的查找，下载，安装和卸载功能，同时pip已经内置在了Python 3.4以上的版本和Python2.7以上的版本，低于这些版本的python需要另行安装，不过比着还低的版本，只有在某些旧的工程中才能找到痕迹，因此检查pip是否安装好也是检查python安装时的一项必备操作。

简单地来说如果把python比作手机，pip就是手机里的应用商店，而conda就是可以选择不同的手机，或者说一个手机上添加不同的操作系统(不过近几年手机厂家都在收缩权限，难绷)

### 如何在Windows中安装OpenCV-Python

#### 从构建好的二进制文件中安装OpenCV

在这里我们使用清华源进行下载，如果你需要全局配置pip的下载源，移步csdn

```bash
# 下载python的核心组件
pip install opencv-python -i https://pypi.tuna.tsinghua.edu.cn/simple
# 下载pyton的扩展组件
pip install opencv-contrib-python -i https://pypi.tuna.tsinghua.edu.cn/simple
```

在下载的途中，会将本地没有的但是OpenCV需要的组件一同下载(比如Numpy)

如何检查自己的python有没有安装好呢？

```python
# 打开终端，输入python,然后复制下面的代码；或者打开IDE
import cv2 
print(cv2.__version__)
```

如果opencv安装好了，则会输出opencv的版本，如果没有安装好，则会报各种各样的错误。但是由于我在安装的过程中并没有遇到很多的问题，因此如果你遇到了问题建议移步csdn和goole以及baidu

#### 从源代码编译OpenCV

坦白的来说，这是一个比较麻烦的过程，它并不适合第一次接触像opencv这么大型的工程的同学来实现，它的面向对象，主要是需要得到一些OpenCV额外支持的同学，比如我在AIPro上需要从源代码编译OpenCV从而获取到OpenCV对NPU的支持。

同时，我并不打算在这里书写过多的片段来讲讲述如何从源代码编译OpenCV，因为时间有点玩了我打算睡了嘻嘻。如果有空，或者我下次配置AIPro，我会将过程更新在这里