import { defineCollection, z } from 'astro:content';

const hideElements = z.enum([
	'title',
	'date',
	'lastmod',
	'tags',
	'readingTime',
	'toc',
	'comments',
]);
export type PostHideElements = z.infer<typeof hideElements>;

const posts = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			image: image().optional(),
			date: z.date().optional(),
			lastmod: z.date().optional(),
			hidden: z.boolean().optional(),
			tags: z.array(z.string()).optional(),
			readingTime: z
				.object({
					text: z.string(),
					time: z.number(),
					words: z.number(),
					minutes: z.number(),
				})
				.optional(),
			hide: z.array(hideElements).optional(),
		}),
});
// 声明一个名为ros的新内容集合
const ros = defineCollection({
	// 指定集合内容为content类型，即内容类型
	type: 'content',
	// 定义集合中每一项内容的schema,即数据结构和验证规则
	schema: ({ image }) =>
		// 使用zod来创建一个对象模式，它包含多个字段，每个字段都有自己的验证规则
		z.object({
			// 标题字段，必须是字符串
			title: z.string(),
			// 描述字段，可选的字符串
			description: z.string().optional(),
			// 图像字段，可选的图像验证器
			image: image().optional(),
			// 日期字段，可选的日期验证器
			date: z.date().optional(),
			// 最后修改日期字段，可选的日期
			lastmod: z.date().optional(),
			// 隐藏字段，可选的布尔数组 
			hidden: z.boolean().optional(),
			// 标签字段，可选的字符串数组
			tags: z.array(z.string()).optional(),
			// 阅读时间字段，可选的对象
			readingTime: z
				.object({
					// 阅读时间的文本表示
					text: z.string(),
					// 时间
					time: z.number(),
					// 单词数
					words: z.number(),
					// 分钟数 
					minutes: z.number(),
				})
				.optional(),
			// 隐藏元素字段，可选的数组
			hide: z.array(hideElements).optional(),
		}),
});

export const collections = {
	posts,ros,
};
