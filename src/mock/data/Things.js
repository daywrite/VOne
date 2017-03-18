/* 货物基础属性 */
import Mock from 'mockjs'
let Thingses = []
let Random = Mock.Random
/* 生成数据 */
for (var i = 0; i < 40; i++) {
  Thingses.push(Mock.mock({
    id: Random.guid(),
    name: Random.name(),
    count: Random.integer(100, 500),
    date: Random.date()
  }))
}
export {Thingses}
