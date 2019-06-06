<template>
    <div v-show='open'>
        <div class="fixed inset-0 overflow-auto p-8 bg-gray-700" @click.self="$emit('close')">
          <div class="w-auto md:w-1/2 lg:w-1/3 bg-white mx-auto mt-8 rounded">
              <p class="relative border border-b-gray-300 py-6 text-center mb-6 text-gray-800 font-medium">信息填写 <span class='absolute right-0 top-0 pt-4 pr-4 cursor-pointer' @click="$emit('close')">
                      <i class='iconfont icon-close'></i>
                  </span></p>
              <div class="px-12">
                  <input type="text" class="bg-gray-200 block mb-8 p-2 w-full " placeholder='  姓    名：' id='nameInput'>
                  <input type="text" class="bg-gray-200 block mb-10 p-2 w-full" placeholder='  手机号：'>
                  <button class="bg-red px-12 py-2 mb-6 w-full text-gray-300 tracking-wider hover:text-white rounded hover:bg-red-dark" type='submit' @click='submitInfo'>确认提交</button>
                  <p class="text-gray-500">* 您输入的信息，以便于我们更快的联系您。</p>
                  <br>
                  <br>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['open'],
    watch: {
        open(open) {
            if (open) {
                this.$nextTick(() => {
                    // this.$refs.modal.focus()
                    document.getElementById('nameInput').focus()
                })
                document.body.style.setProperty('overflow', 'hidden')
            } else {
                document.body.style.removeProperty('overflow')
            }
        }
    },
    methods: {
        submitInfo() {
            document.body.style.removeProperty('overflow')
            window.scrollTo(0,0)
            this.$router.push({ path: '/order' })
        }
    }
}
</script>