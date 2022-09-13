# Button 按钮

常用的操作按钮。

## 基础用法
使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。
<script setup>
import ButtonCom from '/.vitepress/theme/components/button.vue'
</script>
<el-row class="mb-4">
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
  <el-button type="info">Info</el-button>
  <el-button type="warning">Warning</el-button>
  <el-button type="danger">Danger</el-button>
</el-row>
<el-row>
  <el-button icon="Search" circle />
  <el-button type="primary" icon="Edit" circle />
  <el-button type="success" icon="Check" circle />
  <el-button type="info" icon="Message" circle />
  <el-button type="warning" icon="Star" circle />
  <el-button type="danger" icon="Delete" circle />
</el-row>
<br />
<ButtonCom />