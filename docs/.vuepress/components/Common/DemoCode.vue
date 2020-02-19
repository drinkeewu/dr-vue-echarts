<template>
  <div class="code">
    <el-card 
      class="code-demo" 
      shadow="hover"
      :body-style="{
        padding: '20px 20px 0 20px'
      }"
    >
      <div class="code-content">
        <slot />
      </div>
      <collapse-transition>
        <div v-show="codeShow" class="expand">
          <div v-if="$slots.tips" class="tips">
            <slot name="tips"></slot>
          </div>
          <Content v-if="codeSlot" :slot-key="codeSlot"/>

        </div>
      </collapse-transition>
      <div v-if="codeSlot || $slots.tips" class="toggle-button" @click="codeShow = !codeShow">
        <i :class="iconClass"></i>
        {{codeTextBtn}}
      </div>
     
    </el-card>
    
  </div>
</template>

<script>
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';

export default {
  name: "DemoCode",
  components: {
    CollapseTransition,
  },
  props: {
    title: String,
    desc: String,
    codeLang: String,
    codeSlot: String
  },
  data() {
    return {
      codeShow: false
    };
  },
  computed: {
    codeTextBtn() {
      return this.codeShow ? "隐藏代码" : "显示代码";
    },
    iconClass() {
      return this.codeShow ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
    }
  }
};
</script>

<style lang="less" scoped>
@hover-color: #3eaf7c;
.code {
  margin: 20px 0;
  &-content {
    padding: 15px;
  }
  .toggle-button {
    margin: 0 -20px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
    color: #999;
    border-top: 1px solid #EBEEF5;
    transition: all .5s;
    &:hover {
      color: @hover-color;
      background: #F8F9FB;
    }
  }
  .expand{
    margin: 0 -20px;
    padding: 5px 20px;
    background: #F9F9F9;
  }
  .code-segment {
    /deep/ pre {
      margin: 0;
    }
  }
  .tips {
    padding: 20px;
    box-sizing: border-box;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px 0;
    background-color: #fff;
    /deep/ code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }
}
</style>
