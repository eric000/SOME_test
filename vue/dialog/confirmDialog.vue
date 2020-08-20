<template>
  <el-dialog
    width="400px"
    height="400px"
    class="confirm-dialog"
    top="30vh"
    title=""
    :visible.sync="visibleDialog"
    :before-close="handleClose"
    v-bind="$attrs"
    v-on="$listeners"
    custom-class="custom-dialog"
  >
    <div slot="title" class="el-dialog__title">
      <v-icon icon="warn" />
      注意
    </div>
    <!--内容区域的默认插槽-->
    <slot />
    <!--使用弹框的footer插槽添加按钮-->
    <template #footer>
      <!--对外继续暴露footer插槽，有个别弹框按钮需要自定义-->
      <slot name="footer">
        <!--将取消与确定按钮集成到内部-->
        <span class="confirm-footer">
          <el-button class="w150" type="danger" @click="$_handleCancel" plain>取消</el-button>
          <el-button class="w150" type="danger" @click="$_handleConfirm">
            确定
          </el-button>
        </span>
      </slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  /**
   * 默认情况下父作用域的不被认作 props 的 attribute 绑定 (attribute bindings)
   * 将会“回退”且作为普通的 HTML attribute 应用在子组件的根元素上。
   * 通过设置 inheritAttrs 到 false，这些默认行为将会被去掉
  */
  inheritAttrs: false,
  name: 'ConfirmDialog',
  props: {
    // 对外暴露visible属性，用于显示隐藏弹框
    visible: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 通过计算属性，对.sync进行转换，外部也可以直接使用visible.sync
    visibleDialog: {
      get() {
        return this.visible
      },
      set() {
        this.$emit('update:visible')
      }
    }
  },
  methods: {
    // 对外抛出cancel事件
    $_handleCancel() {
      this.$emit('cancel')
    },
    // 对外抛出 confirm事件
    $_handleConfirm() {
      this.$emit('confirm')
    },
    handleClose(done) {
      this.$emit('cancel')
      done && done()
    }
  }
}
</script>

<style lang="scss">
.confirm-dialog {
  .confirm-dialog__content{
    text-align: center;
    line-height: 20px;
    min-height: 0px;
    font-size: 16px;
    color: #595757;
  }
  // .el-dialog__footer {
  //   padding:  10px 42px 48px;
  // }

  .red {
    color: $theme_red;
  }
}
.confirm-footer {
    display: flex;
    justify-content: center;
    .el-button {
      width: 150px;
      // height: 52px;
      // font-size: 16px;
    }
    // .el-button+.el-button {
    //   margin-left: 16px;
    // }
  }
</style>
