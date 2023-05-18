import type { NavItems } from "@custom_types/types"
export const NAVBAR_ITEMS: NavItems = {
	about: {
		path: "/about",
		title: 'about'
	},
	project: {
		path: "/projects",
		title: 'projects'
	},
	blog: {
		path: "/blog",
		title: 'blog'
	},
	bookmarks: {
		path: "/bookmark",
		title: 'bookmarks',
	},
	tags: {
		path: "/tags",
		title: 'tags'
	},
}

export const SITE = {
	name: "goro.dev",
	title: "goro.dev",
	description: "Goro's Software Engineering Blog and Portfolio",
	url: "https://www.goroikedaiyeki.com",
	githubUrl: "https://github.com/dryutsun",
	listDrafts: true,
	permalink: "https://www.goroikedaiyeki.com",
	image: 'https://raw.githubusercontent.com/one-aalam/astro-ink/main/public/astro-banner.png',
	ytChannelId: '',
	authorTwitter: '',
	authorImage: '',
	author: "Goro Ikeda Iyeki",
	authorBio: "A place to ponder.",
	postPerPage: 4,
}


