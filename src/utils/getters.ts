import type { CollectionEntry } from "astro:content";
import { SITE } from "@config/config";

export function getSortedPosts (posts: CollectionEntry<"blog">[]) {
	return posts
		.filter(posts => !posts.data.draft)
		.sort((a,b) => 
			Math.floor(new Date(b.data.date).getTime() / 1000) -
			Math.floor(new Date(a.data.date).getTime() / 1000));
}

export function getPagination (postAmount: number) {
	const numberOfPages = postAmount / Number(SITE.postPerPage);
	let pageNum: number[] = [];
	for (let i = 1; i < Math.ceil(numberOfPages); i++) {
		pageNum = [...pageNum, i];
	}
	return pageNum;
}


