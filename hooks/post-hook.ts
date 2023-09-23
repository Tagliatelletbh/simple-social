import { create } from "zustand";

interface ConfigPostForm {
	title: string;
	setTitle: (title: string) => void;
	content: string;
	setContent: (content: string) => void;
}

const usePostForm = create<ConfigPostForm>((set) => ({
	title: "",
	setTitle: (title) => set({ title }),
	content: "",
	setContent: (content) => set({ content }),
}));

export default usePostForm;
