
import RenderContext from '../RenderContext'
export default class GLVertexBuffer {

  // dimension： 纬度
  // mode：static dynamic
  constructor(name, data, dimension = 3, mode) {
    
    this.dimension = dimension
    this.gl = RenderContext.getGL()
    this.name = name
    /* 初始化Buffer */
    this.buffer = this.gl.createBuffer()
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer)
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER, 
      data, 
      mode || this.gl.STATIC_DRAW
    )
    this.data = data

  }
  // 关联

  associate() {
    this.location = 
      this.gl.getAttribLocation(RenderContext.getProgram(), this.name)
    this.gl.enableVertexAttribArray(this.location)
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer)
    const type = this.gl.FLOAT
    const normalized = false
    const stride = 0
    const offset = 0
    // glsl 
    this.gl.vertexAttribPointer(
      this.location,
      this.dimension,
      type,
      normalized,
      stride,  // 间隔
      offset   // 
    )
  }


}