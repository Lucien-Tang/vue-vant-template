<template>
  <div class="index">
    <main>
      <van-button type="default" @click="languageChange">
        {{$i18n.locale == "cn" ? "英文" : "中文"}}
      </van-button>
      <p>
        手机格式化：{{15311959057 | formatPhone}}<br/>
        银行卡格式化：{{123123123123132 | formatBank}}<br/>
        千分位分隔符：{{5000039 | toThousands}}
      </p>
      <p class="c-required">必填项</p>
      <p>时间格式化{{$public.formatDate(new Date(), 'yyyy/MM/dd hh:mm:ss')}}</p>
      <input type="text" v-model="inputVal" placeholder="自动聚焦" v-focus @input="inputChange">
    </main>
  </div>
</template>

<script>
import $utils from "@/utils/public.js"

export default {
  data(){ 
    return {
      inputVal: "",
    }
  },
  methods: {
    // 语言切换
    languageChange() {
      this.$i18n.locale = (this.$i18n.locale == "cn" ? "en" : "cn");
    },
    // 搜索框防抖实现
    inputChange: $utils.debounce(function() {
      console.log(this.inputVal);
    },500),
  }
}
</script>

<style lang="scss" scoped>
</style>
