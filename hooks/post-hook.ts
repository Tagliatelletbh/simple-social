import { create } from "zustand";

interface ConfigPostForm {
	name: string;
	setName: (name: string) => void;
	title: string;
	setTitle: (title: string) => void;
	content: string;
	setContent: (content: string) => void;
}

const usePostForm = create<ConfigPostForm>((set) => ({
	name: "",
	setName: (name) => set({ name }),
	title: "",
	setTitle: (title) => set({ title }),
	content: "",
	setContent: (content) => set({ content }),
}));

export default usePostForm;
