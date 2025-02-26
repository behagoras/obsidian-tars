// 简体中文

export default {
	// Common
	Error: '异常',

	// commands/export.ts
	'Export conversations to JSONL': '导出对话到 JSONL',
	'No conversation found': '没有找到对话',
	'Exported to the same directory, Obsidian does not display the JSONL format. Please open with another software.':
		'已经导出到同一目录，obsidian 不显示 jsonl 格式，请用其他软件打开',

	// commands/replaceTag.ts
	'Replace speaker with tag': '把说话者替换为标签',
	'No speaker found': '没有找到说话者',
	'Replace the names of the two most frequently occurring speakers with tag format.':
		'用标签格式替换两个最常出现的说话者的名字',
	Replace: '替换',

	// commands/select.ts
	'Select message at cursor': '选择光标处的消息',
	'No message found at cursor': '光标处没有找到消息',

	// providers
	'API key is required': '请配置对应的 API key',
	'API secret is required': '请配置对应的 API secret',
	'Model is required': '请配置对应的模型',
	'API URL is required': '请配置对应的 API URL',

	// qa/answer.ts
	// 'Answer: Select assistant': '回答: 选择助手',
	'Answer: the question above the cursor': '回答：光标上方的提问',
	'Please add one assistant in the settings first': '请先在设置中添加一个助手',
	'Regenerate Answer': '重新生成回答',

	// qa/combine.ts
	'Question & Answer: Recently used template and assistant': '提问和回答: 最近使用的模板和助手',
	'At least one user tag is required': '至少需要一个用户标签',
	'Selected template: ': '已选择模板: ',
	'Recently used template not found, reset to basic template': '最近使用的模板未找到，重置为基本模板',

	// qa/modal.ts
	'Syntax Error Report': '语法错误报告',

	// qa/promptTemplate.ts
	BASIC_PROMPT_TEMPLATE: '✨ (原文) ✨',
	'View prompt templates: check syntax': '查看提示词模板: 检查语法',
	'Prompt template file is syntactically correct': '提示词模板文件语法正确',
	'Create tars folder': '创建 tars 文件夹',
	'Create prompt template file': '创建提示词模板文件',
	'File was just created, waiting for metadata to be ready. Please try again.': '文件刚创建，没来得及解析信息，请重试',
	'Expected at least 2 sections, heading and content': '至少需要 2 个部分，标题和内容',
	'Expected heading': '需要标题',

	// qa/question.ts
	'Question: selected sections / current section at cursor': '提问: 选中的段落 / 光标处的段落',
	// 'Question: selected sections / current section at cursor': '提问：光标处/选中的段落',
	'Waiting for metadata to be ready. Please try again.': '正在等待元数据准备就绪。请重试。',

	// editor.ts
	'Please add a user message before generating AI response': '请先添加用户消息，再用 AI 回答',
	'No text generated': '没有生成文本',
	characters: '个字符',

	// settingTab.ts
	'Restore default': '恢复默认',
	'AI assistants': 'AI 助手',
	'New AI assistant': '新的AI助手',
	"Select assistant from dropdown and click 'Add'. For those compatible with the OpenAI protocol, you can select OpenAI.":
		'从下拉框选择助手类型，点击新增按钮。对于兼容OpenAI协议的，可以选择OpenAI.',
	Add: '新增',
	'Please add at least one AI assistant to start using the plugin.': '请至少添加一个AI助手，以便开始使用插件',
	'Message tags': '消息标签',
	'Keywords for tags in the text box are separated by spaces': '在文本框中的标签关键字用空格分隔',
	'New chat tags': '新对话的标签',
	'User message tags': '用户消息的标签',
	'System message tags': '系统消息的标签',
	'At least one tag is required': '至少需要一个标签',
	tag: '标签',
	'Trigger AI generation': '触发AI生成',
	'Obtain key from ': '获取 key 网站 ',
	'Web search': '网络搜索',
	'Enable web search for AI': '为当前 AI 启用网络搜索',
	'Enter your key': '输入你的 key',
	'Default:': '默认:',
	'Refer to the technical documentation': '参考技术文档',
	'Keyword for tag must not contain #': '标签关键字不能包含#',
	'Keyword for tag must not contain space': '标签关键字不能包含空格',
	'Keyword for tag must be unique': '标签关键字必须唯一',
	Model: '模型',
	'Select the model to use': '选择要使用的模型',
	'Please input API key first': '请先输入API key',
	'Input the model to use': '输入要使用的模型',
	'Please enter a number': '请输入一个数字',
	'Minimum value is 256': '最小值是256',
	'Invalid URL': '无效的 URL',
	'Override input parameters': '覆盖输入参数',
	'Developer feature, in JSON format. For example, if the model list doesn\'t have the model you want, enter {"model": "your desired model"}':
		'开发者功能，以 JSON 格式。例如: 模型列表中没有你需要的模型时，可以填入 {"model": "你想要的model"}',
	'Remove AI assistant': '移除 AI 助手',
	Remove: '移除',
	Endpoint: '终结点',
	'API version': 'API 版本',
	'Select assistant': '选择助手',

	'Question & Answer': '提问和回答',
	'The question and answer command will directly select the most recently used prompt template and assistant.':
		'"提问和回答"命令, 会直接选择最近使用的提示词模板和助手',
	'Recently used prompt template': '最近使用的提示词模板',
	"This setting will automatically update when using the 'Question' command. You can also manually switch it for direct use next time.":
		"此设置会在使用'提问'命令时自动更新。也可手动切换以便下次直接使用。",
	'Recently used assistant tag': '最近使用的助手标签',
	"This setting will automatically update when using the 'Answer' command. You can also manually switch it for direct use next time.":
		"此设置会在使用'回答'命令时自动更新。也可手动切换以便下次直接使用。",
	'Delay before answer (Seconds)': '回答前的延迟（秒）',
	'If you encounter errors with missing user messages, it may be due to the need for more time to parse the messages. Please slightly increase the answer delay time.':
		'如果遇到缺少用户消息的错误，可能是因为需要更多时间来解析消息，请稍微增加延迟',

	// suggest.ts
	'AI generate': 'AI 生成',
	'Text generated successfully': '文本生成成功',
	'Check the developer console for error details. ': '查看开发者控制台了解错误. ',
	'This is a non-streaming request, please wait...': '这是一个非流式请求，请稍候...',

	promptFileName: 'prompt.zh',
	PRESET_PROMPT_TEMPLATES: `# 使用说明

- 把你的常用提示词收集到这里，以便在Tars插件的“提问”命令中使用。
- 本文件按照 obsidian 的幻灯片格式，用\`---\`来分隔每一页
- 第一页是说明，后面的每一页都是一个提示词模板
- 首先是模板的标题, 以markdown的标题格式。接下来都是模板的内容。标题和内容都不可缺少。
- 如果内容有 \`{{s}}\`，会把 \`{{s}}\`替换为选中的文本
- 如果没有 \`{{s}}\`，则追加
- 如果没有选中的文本，则直接使用模板的内容
- 如果某一页有语法错误，则不会出现在“提问”命令的弹窗列表中
- 如果要检查有没有语法错误，执行命令“查看提示词模板: 检查语法”

---

# 提示词例子

给我讲个笑话

---

# 翻译

把以下内容翻译为中文：{{s}}

---

# 一句话总结

{{s}} 用一句话总结以上内容

`
}
