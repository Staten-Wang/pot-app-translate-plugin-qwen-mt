# Pot-App Qwen-MT 翻译插件仓库

## 插件使用指南

### 1. 插件信息配置

该插件共有3个文本项，1个选择项。

文本项目：

- 请求地址：Qwen MT 的 HTTP 请求地址。可以在 [Qwen的官方文档](https://bailian.console.aliyun.com/?tab=api#/api/?type=model&url=2712576)获取。默认是：<https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions>
- *API 密钥：Qwen MT 的请求密钥。
- 模型：Qwen MT的模型名称。目前，有四个可用，1) qwen-mt-plus, 2) qwen-mt-flash, 3) qwen-mt-turbo (已不在更新), 4) qwen-mt-lite。具体[定价](https://bailian.console.aliyun.com/cn-beijing/?tab=doc#/doc/?type=model&url=2840914)可以在官网查询。默认是: qwen-mt-flash。

**注意:** 推荐Qwen官方途径的API, Aihubmix采用的是海外定价(比较贵)。

定价(2026/03/12):

![Qwen-MT定价](docs\images\Pricing.png)

选择项：

- ！流式输出：是否启用流式输出。

Note: '*'开头为必选项，'！'开头表示目前不起作用。
