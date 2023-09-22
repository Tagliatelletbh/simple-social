import { create } from "zustand";

interface configFindPost {
	posts: [];
	setPosts: (posts: []) => void;
}

const useFindPost = create<configFindPost>((set) => ({
	posts: [],
	setPosts: (posts) => set(() => ({ posts })),
}));

export default useFindPost;
