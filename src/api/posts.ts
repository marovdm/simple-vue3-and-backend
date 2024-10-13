import { TPost } from "@/types/data";
import { AxiosInstance } from "axios";

export default function createPostsApi(http: AxiosInstance){
	return {
		async getPosts(){
			const response = await http.get<TPost[]>('posts');
			return response.data;
		},
		async getPostById(id: string) {
			const response = await http.get<TPost>(`posts/${id}`);
			return response.data;
		},
		async getUserPostsById(id: string) {
			const response = await http.get<TPost[]>(`users/${id}/posts/`);
			return response.data;
		}
	}
}