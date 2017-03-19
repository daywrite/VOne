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
            <div class="panel-shade" v-show="loading">
              <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
              </div>
            </div>
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
          <div class="panel-footer">
            <Pagination :page-model="pageModel"></Pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { getThingList } from '../api/api'
import Pagination from './common/Pagination.vue'
import { thingListsCounter, loadingCounter } from '../vuex/actions'
export default {
  name: 'home',
  data () {
    return {
      pageModel: {
        url: '/thing/list',
        menu: [10, 20]
      }
      /* Vuex解放变量存储在每个Vue文件的return中 */
      // dataList: []
      // loading: false,

    }
  },
  ready () {
    // this.getUsers()
  },
  computed: {
    showThead: function () {
      return !this.loading
    }
  },
  methods: {
    // getUsers () {
    //   this.loading = true
    //   getThingList().then((res) => {
    //     this.loading = false
    //     this.setlist(res.data.things)
    //   })
    // }
  },
  events: {
    refresh: function (e) {
      this.setlist(e)
    }
  },
  components: {
    Pagination
  },
  vuex: {
    getters: {
      dataList: state => state.thinglist,
      loading: state => state.loading
    },
    actions: {
      setlist: thingListsCounter,
      setloading: loadingCounter
    }
  }
}
</script>
<style scoped>
/* 遮罩层 */
.panel-shade{
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,.3);
  position:absolute;
  top:0;
  left:0;
  z-index:2;
  /*opacity:0.3;*/
}
/*#dataTables tr:nth-child(4){ background-color: red; }*/
#dataTables tr td,tr th{
  text-align: center;
}
.panel-body {
  min-height: 80px;
}
/* loading */
.spinner {
  position: absolute;
  top:50%;
  left:50%;
  margin: 0px auto;
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
}

.spinner > div {
  background-color:white;
  height: 100%;
  width: 6px;
  display: inline-block;

  -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
  animation: stretchdelay 1.2s infinite ease-in-out;
}

.spinner .rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.spinner .rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.spinner .rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.spinner .rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes stretchdelay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes stretchdelay {
  0%, 40%, 100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
    }  20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
  </style>
