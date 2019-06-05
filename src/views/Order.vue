<template>
    <div>
        <header-cmp></header-cmp>
        <order-cmp></order-cmp>
        <section class='flex flex-col justify-center text-center py-16'>
          <i class='iconfont icon-YUAN text-6xl text-red'></i>
          <h3 class="text-gray-600 font-bold mb-8">收款信息</h3>
          <div class="">
              <p>户名：</p>
            
          </div>
        </section>
    </div>
</template>
<script>
import headerCmp from '../components/header2'
import orderCmp from '../components/orderCmp'
export default {
    components: {
        orderCmp,
        headerCmp
    }
}
</script>
