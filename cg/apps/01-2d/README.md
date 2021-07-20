## pipeLine
- js
- vertex shader： 顶点着色器 （向量矩阵运算），算出顶点实际的位置
- 图元组装：将位置索引组成三角形
- 栅格化：将图元数据变成一个个像素，每一个像素称为一个 fragment
  - cull 选择去掉一些图元
  - clip 裁剪 去掉图元的某部分
- Fragment shader：上色
- Fragment operation：着色操作，描述纹理，描述材质
- Frame buffer：驱动显示器工作，表示显示器下一帧显示什么



## opengl 着色器语言

- 计算顶点位置 vertex shader
  - transform rotate scale
  - 投影

- fragment shader
  - 颜色
  - 材质
  - 光照


## 传递方式
往着色器传参

- uniform 直接传递（全局变量）
- attribute （属性：位置 颜色） 通过buffer

## uniform

## 传递向量到着色器
```
gl.uniform[1234][uif][v](location, data)

1234: 纬度
ui：unsigned interger
i：interger
f：float

gl.uniform2fv(location, data)
```

## 传递向量到着色器
gl.uniformMatrix[234]x[234]fv(location, false, data)
[234]x[234]: 几乘几
f：float

## Buffer
分配的一块空间

vertex Buffer 顶点
Index Buffer 顶点索引，一个立方体 6 面 12 个三角形 8个顶点，需要索引表示哪些顶点构成三角形
Frame Buffer

```
gl.createbuffer()    创建
gl.bindbuffer(target, buffer)  绑定
gl.bufferData(target, data, usage)  填充数据
```

target ：描述buffer绑定在哪里
gl.ARRAY_BUFFER  顶点
gl.ELEMENT_ARRAY_BUFFER 索引

usage
gl.STATIC_DRAW  不变 可以放心缓存
gl.DYNAMIC_DRAW 

## 着色器语言三种类型

attribute 属性
- 顶点索引颜色法向量
- 顶点着色器用
uniform 统一的
- 通常是一个全局变量（颜色 光照参数），或者是全局矩阵（世界矩阵 观察矩阵）
- 可以在顶点着色器和片段着色器中使用
varying 变化的
- 通常用来将数据 从顶点着色器传递到片元着色器


