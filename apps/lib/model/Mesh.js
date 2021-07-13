import RenderContext from '../RenderContext' 
import GLIndexBuffer from './GLIndexBuffer'
import GLVertexBuffer from './GLVertexBuffer'

export class Mesh {

  constructor({vertices, indices = null, dimension = 3, colors = null, texCoords, norms}){
    // 纬度
    this.dimension = dimension
    // 顶点数据
    this.vertices = vertices
    // 索引
    this.indices = indices
    this.colors = colors
    this.norms = norms
    this.texCoords = texCoords
    this.gl = RenderContext.getGL()
    this.customVerticesBuffer = []

    this.vertexBuffer = new GLVertexBuffer(
      'a_position', 
      new Float32Array(vertices), 
      dimension
    )

    if(this.colors) {
      this.colorsBuffer = new GLVertexBuffer(
        'a_color',
        new Float32Array(colors),
        dimension
      )
    }

    if(this.indices) {
      this.indicesBuffer = new GLIndexBuffer(
        new Uint16Array(this.indices),
        dimension
      )
    }


    if(this.texCoords) {
      this.texturesBuffer = new GLVertexBuffer(
        'a_texcoord',
        new Float32Array(texCoords),
        2
      )

    }

    if(this.norms) {
      this.normsBuffer = new GLVertexBuffer(
        'a_norm',
        new Float32Array(norms),
        3
      )
    }
  }

  addVertexBuffer(name, data, dimension) {
    this.customVerticesBuffer.push(new GLVertexBuffer(
      name,
      data,
      dimension
    ))
  }

  draw(){
    const gl = this.gl

    // 顶点
    // 将顶点数据 写入缓冲区
    // 取到内存地址 绑定 js 变量
    this.vertexBuffer.associate()
    // 颜色
    this.colorsBuffer && this.colorsBuffer.associate()
    // 索引
    this.indicesBuffer && this.indicesBuffer.associate()
    this.texCoords && this.texturesBuffer.associate()
    this.normsBuffer && this.normsBuffer.associate()

    this.customVerticesBuffer.forEach(buffer => {
      buffer.associate()
    })

    if(this.indicesBuffer) {
      gl.drawElements(
        gl.TRIANGLES, 
        this.indices.length,
        gl.UNSIGNED_SHORT,
        0
      )
    } else {

      gl.drawArrays(
        gl.TRIANGLES,
        0,
        this.vertices.length / this.dimension
      )
    }
  }

}
