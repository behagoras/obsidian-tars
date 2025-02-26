<h4 align="center">
	<p>
		<a href="https://github.com/TarsLab/obsidian-tars/blob/main/README_en.md">English</a> |
			<b>中文</b>
	<p>
</h4>

# 简介

Tars 是一个 Obsidian 插件，基于标签建议进行文本生成，支持 Claude、OpenAI、Gemini、Ollama、Kimi、豆包、阿里千问、智谱、🔥DeepSeek、🔥SiliconFlow、百度千帆等。Tars 这个名字来源于电影《星际穿越》中的机器人 Tars（塔斯）。插件支持桌面端和移动端。

## 特性

- 启动命令“提问”，选择提示词模板

- 启动命令“回答”

- 组合技，“提问和回答”

- 除了前面的命令方式，还可以通过标签触发

![通过标签触发文本生成](docs/images/zh/用Kimi写故事.gif)

> ⚠️ **注意**：前面不要加“#”。是输入“标签”触发，而不是输入“#标签”。如上图输入的是“kimi”，而不是“#kimi”。

- 支持内部链接

![内部链接支持](docs/images/zh/作家提示词.png)

- 自定义提示词模板，启动命令“查看提示词模板：检查语法"
- 状态栏，实时显示生成的字符数量
- 将对话导出为 JSONL 数据集，支持 [ms-swift（Scalable lightWeight Infrastructure for Fine-Tuning）](https://github.com/modelscope/swift)

## AI 服务提供商

- [Azure OpenAI](https://azure.microsoft.com)
- [Claude](https://claude.ai)
- [DeepSeek 深度求索](https://www.deepseek.com)
- [Doubao 豆包](https://www.volcengine.com/product/doubao)
- [Gemini](https://gemini.google.com)
- [Kimi](https://www.moonshot.cn)
- [Ollama](https://www.ollama.com)
- [OpenAI](https://platform.openai.com/api-keys)
- [Qianfan 百度千帆](https://qianfan.cloud.baidu.com)
- [Qwen 阿里千问](https://dashscope.console.aliyun.com)
- [SiliconFlow 硅基流动](https://siliconflow.cn)
- [Zhipu 智谱](https://open.bigmodel.cn/)

如果上面列表没有你想要的 AI 服务提供商，可以在 issue 中提出具体方案。

### 助手特色

- Azure: 支持 o1，deepseek-r1，gpt-4o 等等
- 🔥DeepSeek：推理模型 deepseek-reasoner 的思维链以 callout 格式输出
- 🔥SiliconFlow：支持 DeepSeek V3/R1 等等众多模型
- Zhipu：网络搜索选项

## 如何使用

- 在设置页面添加 AI 助手，设置 API 密钥，设置模型。
- 在编辑器中使用“提问”命令，添加用户消息标签。然后使用”回答“命令，添加助手标签来回答问题。
- 在多轮对话中，推荐使用“提问和回答”, 减少操作步骤。
- 如果熟悉标签的话，那么还可以使用相应的标签来触发 AI 助手。通过对话形式来触发，先有用户消息，然后才能触发 AI 助手回答问题。

一个简单的对话例子如下：

```text
#我 : 1+1=?（用户消息）
(隔开一个空行)
#DeepSeek : （触发）
```

如果觉得 AI 助手回答不满意，想要重试。使用插件命令“选择光标处的消息”，选中 AI 助手的回答内容进行删除，修改下你的提问，再次触发 AI 助手。

## 对话语法

一个段落不能包含多条消息。多条消息应该通过空行分隔开来。

![Conversations syntax](docs/images/zh/语法.png)

- 对话消息将发送到配置的 AI 服务提供商。
- 标注部分 (callout) 将被忽略。你可以在标注里写内容，不将其发送到 AI 助手。callout 不是 markdown 语法，是 obsidian 的扩展语法。
- 开始新对话，使用 `新对话` 标签。

## 外观美化

建议使用 [colored tags 插件](https://github.com/pfrankov/obsidian-colored-tags).

![Colored tags plugin](docs/images/coloredTags.png)

## 常见问题

### 设置页面没有想要的模型？

可以在设置中的“覆盖输入参数”进行配置，输入 JSON 格式，例如 `{"model":"你想要的model"}`。

### 如何查看开发者控制台？

- **Windows**：`CTRL + SHIFT + i`
- **MacOS**：`CMD + OPTION + i`
- **Linux**：`CTRL + SHIFT + i`

[获取控制台日志](https://publish.obsidian.md/help-zh/%E5%B8%AE%E5%8A%A9%E4%B8%8E%E6%94%AF%E6%8C%81#%E8%8E%B7%E5%8F%96%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%97%A5%E5%BF%97)

### 在使用第三方服务商时如何输入地址？

修改设置中的 baseURL，从服务商的文档复制对应的地址粘贴过去，最后检查下网址是否完整。

### 第三方服务商选择哪个助手类型？

LLM的协议是有区别的，openAI，claude，gemini 差别很大，注意要选对。deepseek-r1 的思维链也和 openAI 不同。

### 错误提示中的 404，400，4xx数字是什么意思？

这些是 HTTP 状态码：

- 402表示“需要付款”（Payment Required）。
- 404表示“未找到”（Not Found），通常是 baseURL 配置错误，或者模型名称错误。
- 400表示“错误请求”（Bad Request），可能是 API 密钥错误，缺失用户消息，标签解析失败导致消息缺失，模型错误等等。
- 429表示“太多请求”（Too Many Requests），可能是请求频率过高，或者是服务商限制了请求频率。
