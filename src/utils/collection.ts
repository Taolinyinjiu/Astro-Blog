import { getCollection } from 'astro:content';

export async function getPosts(hidden?: boolean, sortByDate?: string) {
	let allPosts = await getCollection('posts', ({ data }) => {
		if (typeof hidden === 'boolean') {
			return hidden ? data.hidden === true : data.hidden !== true;
		}
		return true;
	});
	if (sortByDate !== undefined) {
		if (sortByDate === 'asc') {
			allPosts = allPosts.sort((a, b) => {
				const aDate = a.data.lastmod ?? a.data.date;
				const bDate = b.data.lastmod ?? b.data.date;
				if (!aDate) {
					return -1;
				}
				if (!bDate) {
					return 1;
				}
				return aDate.valueOf() - bDate.valueOf();
			});
		} else {
			allPosts = allPosts.sort((a, b) => {
				const aDate = a.data.lastmod ?? a.data.date;
				const bDate = b.data.lastmod ?? b.data.date;
				if (!aDate) {
					return 1;
				}
				if (!bDate) {
					return -1;
				}
				return bDate.valueOf() - aDate.valueOf();
			});
		}
	}
	return allPosts;
}

export async function getPostsByTag(tag:string,hidden?:boolean,sortByDate?:string){
	// 使用getCollection 获取"posts"集合
	// let allPosts = await getCollection('ros',({ data }) => {
	// 	// check the blog whether hidden 
	// 	if(hidden !== undefined){
	// 		return data.hidden == hidden;
	// 	}
	// 	return true;
	// });

	let allPosts = await getCollection('ros', ({ data }) => {
		if (typeof hidden === 'boolean') {
			return hidden ? data.hidden === true : data.hidden !== true;
		}
		return true;
	});

	// check tags whether include ROS
	allPosts = allPosts.filter(post=> {
		const tags = post.data.tags || [];
		return tags.includes(tag);
	});
	// if need time 
	if (sortByDate !== undefined) {
		if (sortByDate === 'asc') {
			allPosts = allPosts.sort((a, b) => {
				const aDate = a.data.lastmod ?? a.data.date;
				const bDate = b.data.lastmod ?? b.data.date;
				if (!aDate) {
					return -1;
				}
				if (!bDate) {
					return 1;
				}
				return aDate.valueOf() - bDate.valueOf();
			});
		} else {
			allPosts = allPosts.sort((a, b) => {
				const aDate = a.data.lastmod ?? a.data.date;
				const bDate = b.data.lastmod ?? b.data.date;
				if (!aDate) {
					return 1;
				}
				if (!bDate) {
					return -1;
				}
				return bDate.valueOf() - aDate.valueOf();
			});
		}
	}
	return allPosts;
}