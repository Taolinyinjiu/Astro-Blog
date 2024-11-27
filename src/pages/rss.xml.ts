// astro提供的插件，用于生成RSS订阅
import rss from '@astrojs/rss';
// 这行代码导入了APIContext类型，这是Astro中用于API路由的上下文对象，它包含了请求的信息。
import type { APIContext } from 'astro';
// 这行代码从项目的config目录导入了网站标题（SiteTitle）和描述（SiteDescription）。
import { SiteDescription, SiteTitle } from '~/config';
// 这行代码从项目的utils/collection目录导入了getPosts函数，这个函数可能用于从数据源获取文章列表。
import { getPosts } from '~/utils/collection';

// 这行代码定义了一个名为GET的异步函数，它接收一个APIContext类型的参数。这个函数是一个API路由的处理函数，当路由被GET请求时执行。
export async function GET(context: APIContext) {
	// 这行代码调用rss函数，并传入一个配置对象。
	return rss({
		// 设置RSS feed的标题，使用之前导入的SiteTitle。
		title: SiteTitle,
		// 设置RSS feed的描述，使用之前导入的SiteDescription。
		description: SiteDescription,
		// 设置RSS feed的网站链接，使用context.site的值，如果未定义则为空字符串。
		site: context.site ?? '',
		// 调用getPosts函数获取文章列表，并映射每个文章到一个对象，这个对象包含了RSS feed中每一项的详细信息。
		items: (await getPosts(false, 'desc')).map((post) => ({
			// 设置每一项的标题，使用文章数据中的title字段。
			title: post.data.title,
			// 设置每一项的发布日期，优先使用lastmod字段，如果没有则使用date字段。
			pubDate: post.data.lastmod ?? post.data.date,
			// 设置每一项的描述，使用文章数据中的description字段，如果没有则为空字符串。
			description: post.data.description ?? '',
			// 设置每一项的链接，使用文章的slug字段构建URL。
			link: `/posts/${post.slug}`,
			content: post.body,
		})),
	});
}
