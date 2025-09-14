# Pot-App Qwen-MT 翻译插件仓库

## 插件使用指南

### 1. 插件信息配置

该插件共有3个文本项，1个选择项。

文本项目：

- 请求地址：Qwen MT 的 HTTP 请求地址。可以在 [Qwen的官方文档](https://bailian.console.aliyun.com/?tab=api#/api/?type=model&url=2712576)获取。默认是：https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions
- *API 密钥：Qwen MT 的请求密钥。
- 模型：Qwen MT的模型名称。目前，有两个可用，1) qwen-mt-turbo, 2) qwen-mt-plus。具体[定价](https://bailian.console.aliyun.com/?tab=doc#/doc/?type=model&url=2860790)可以在官网查询。默认是：qwen-mt-turbo。

选择项：

- ！流式输出：是否启用流式输出。

Note: '*'开头为必选项，'！'开头表示目前不起作用。
