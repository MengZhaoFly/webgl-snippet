import { Model, shape } from '../../lib'
import RenderContext from '../../lib/RenderContext'

function main() {

  const gl = RenderContext.getGL()
  // gl.enable(gl.DEPTH_TEST)
  // gl.depthFunc(gl.LEQUAL)
  // gl.clearDepth(1.0)
  gl.viewport(0.0, 0.0, canvas.width, canvas.height)
  // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
  // 定义了 F 的 顶点数据 （通过x y width height 粗度）进行构造
  //  mesh 管理着顶点数据
  // 并且 会和 web gl 关联数据
  const mesh = shape.d2_f(100, 100, 100, 150, 30)
  const model = new Model(mesh)
  // model 更新后续数据（颜色），不需要更新顶点，顶点已经在 mesh 里处理了
  model.setVectorUniform('u_color', [Math.random(), Math.random(), Math.random(), 1.0])
  model.setVectorUniform('u_resolution', [gl.canvas.width, gl.canvas.height])
  model.draw()
}

main()