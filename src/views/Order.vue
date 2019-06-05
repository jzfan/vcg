<template>
    <div>
        <header-cmp></header-cmp>
        <div class="container mx-64 px-10 mx-auto">
            <p class="mt-12 mb-10 text-gray-500">
                <span><i class="iconfont icon-location"></i>当前位置：</span><a href="/" class="hover:text-red">首页</a> > <a href="/show" class="hover:text-red">视频详情</a> > 收款信息
            </p>
            <order-cmp></order-cmp>
        </div>
        <section class='flex flex-col justify-center text-center py-16 mb-10'>
            <i class='iconfont icon-YUAN text-6xl text-red'></i>
            <h3 class="text-gray-600 font-bold mb-8">收款信息</h3>
            <table class="mx-auto table-auto border-separate text-left font-medium text-xl text-gray-700" style="border-spacing:0px 1rem;">
                <tr class="mb-4">
                    <td>户&nbsp;&nbsp;&nbsp;&nbsp;名： 三元佳美文化传媒有限公司</td>
                </tr>
                <tr>
                    <td>账户号： <span class="tracking-wide">6222 2222 2222 222</span></td>
                </tr>
                <tr>
                    <td>开户行： 中国工商银行雨花台支行</td>
                </tr>
            </table>
        </section>
        <section class="container mx-64 px-10 mx-auto">
            <i class="iconfont icon-dot text-red"></i>
            <span class="font-semibold text-gray-700"> 备注：</span>
            <p class="mb-12 text-gray-600">
                <ol class="list-decimal ml-5">
                    <li>备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注</li>
                    <li>备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注</li>
                </ol>
            </p>
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