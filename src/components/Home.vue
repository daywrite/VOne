<template>
  <div class="row">
    <div class="col-lg-12">
      <h1 class="page-header">基础数据</h1>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            基础数据
          </div>
          <div class="panel-body">
            <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables">
              <thead>
                <tr>
                  <th>主键</th>
                  <th>名称</th>
                  <th>数量</th>
                  <th>日期</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(index,item) in dataList">
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.count }}</td>
                  <td>{{ item.date }}</td>
                  <td>
                    <button type="button" class="btn btn-success btn-xs">编辑</button>
                    <button type="button" class="btn btn-danger btn-xs">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getThingList } from '../api/api'
export default {
  name: 'home',
  data () {
    return {
      dataList: []
    }
  },
  ready () {
    this.getUsers()
  },
  methods: {
    getUsers () {
      getThingList().then((res) => {
        console.log(res)
        this.dataList = res.data.things
      })
    }
  }
}
</script>
<style scoped>
  /*#dataTables tr:nth-child(4){ background-color: red; }*/
  #dataTables tr td,tr th{
    text-align: center;
  }
</style>
