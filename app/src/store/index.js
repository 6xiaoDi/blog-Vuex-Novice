import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let items = [{"id":3,"name":"Macbook Pro 15.4","vendor":"Apple","price":1949900},{"id":4,"name":"Apple iMac","vendor":"Apple","price":1629900},{"id":9,"name":"游戏本2019款","vendor":"XiaoMi","price":879900},{"id":6,"name":"Apple Watch Series 4","vendor":"Apple","price":599900},{"id":1,"name":"iPhone XR","vendor":"Apple","price":542500},{"id":11,"name":"HUAWEI P30 Pro","vendor":"HuaWei","price":498800},{"id":2,"name":"Apple iPad Air 3","vendor":"Apple","price":377700},{"id":10,"name":"HUAWEI P30","vendor":"HuaWei","price":368800},{"id":7,"name":"小米9","vendor":"XiaoMi","price":259900},{"id":12,"name":"华为平板 M6 10.8英寸","vendor":"HuaWei","price":229900},{"id":16,"name":"Redmi K20","vendor":"XiaoMi","price":199900},{"id":13,"name":"HUAWEI WATCH GT","vendor":"HuaWei","price":128800},{"id":5,"name":"Apple Magic Mouse","vendor":"Apple","price":72900},{"id":8,"name":"小米手环4","vendor":"XiaoMi","price":16900}];

let store = new Vuex.Store({
    state: {
        n: 10,
        items
    }
});


export default store;