import { Mesh } from '../model/Mesh'
export const d2_f = (x, y, width, height, thickness) => {
// 定义的就是三角形的顶点
  const data = [
    // 6个点 两个三角形
    // left column
    x, y,
    x + thickness, y,
    x, y + height,
    x, y + height,
    x + thickness, y,
    x + thickness, y + height,

    // 6个点 两个三角形
    // top rung
    x + thickness, y,
    x + width, y,
    x + thickness, y + thickness,
    x + thickness, y + thickness,
    x + width, y,
    x + width, y + thickness,

    // 6个点 两个三角形
    // middle rung
    x + thickness, y + thickness * 2,
    x + width * 2 / 3, y + thickness * 2,
    x + thickness, y + thickness * 3,
    x + thickness, y + thickness * 3,
    x + width * 2 / 3, y + thickness * 2,
    x + width * 2 / 3, y + thickness * 3,
  ]

  return new Mesh({
    vertices : data,
    dimension : 2})
}