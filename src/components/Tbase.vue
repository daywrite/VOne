<template>
  {{test}}
</template>
<script>
export default {
  name: 'tbase',
  data () {
    return {
      test: '456'
    }
  },
  ready () {
    // this.objOne()
    // this.objTwo()
    // this.objThree()
    // this.objFour()
  },
  methods: {
    /* object.assign */
    objOne: function () {
      var o1 = {a: 1}
      var o2 = {b: 2}
      var o3 = {c: 3}
      // var ret = Object.assign(o1, o2, o3)
      var ret = Object.assign({}, o1, o2, o3)
      console.log(o3)
      console.log(o2)
      console.log(o1)
      console.log(ret)
    },
    /* 原型判断 */
    objTwo: function () {
      var t1 = {foo: 'helloworld'}
      var ret1 = t1.hasOwnProperty('foo')
      console.log(ret1)// true

      /* t1属于obj的圆形链属性 */
      var obj = Object.create(t1, {
        bar: {value: 2},
        baz: {value: 3, enumerable: true}
      })

      console.log(obj.hasOwnProperty('foo'))// false
      console.log(obj.hasOwnProperty('baz'))// true
      /* 只对原属性和可枚举属性 */
      var ret2 = Object.assign({}, obj)
      console.log(ret2)
    },
    objThree: function () {
      function Car (des) {
        this.des = des
        this.color = 'red'
      }

      Car.Prototype = {
        getInfo: function () {
          return this.color + '|' + this.des
        }
      }

      var car = new Car('des')
      // console.log(c.des)
      // console.log(c.color)
      // console.log(c.getInfo())

      var ret32 = Object.create(car)
      console.log(ret32.getInfo())

      /* create原型 */
      // var ret31 = Object.create(Car.Prototype)
      // console.log(ret31.getInfo())// undefined|undefined
      // ret31.color = 'blue'
      // console.log(ret31.getInfo())// blue|undefined
      // ret31.des = 'des'
      // console.log(ret31.getInfo())// blue|des
    },
    /* object.defineProperty */
    objFour: function () {
      var obj41 = Object.create({foo: 'foo'}, {baz: {value: 'baz', enumerable: true}})
      Object.defineProperty(obj41, 'age', {value: 24, writable: true, enumerable: true, configurable: true})

      console.log(obj41.hasOwnProperty('foo'))// false
      console.log(obj41.hasOwnProperty('baz'))// true
      console.log(obj41.hasOwnProperty('age'))// true

      console.log(Object.getOwnPropertyNames(obj41))
      console.log(Object.getOwnPropertyDescriptor(obj41, 'age'))

      console.log(Object.keys(obj41))
    }
  }
}
</script>
