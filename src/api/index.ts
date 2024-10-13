import { AxiosInstance } from "axios";
import createPostsApi from "./posts";
import { InjectionKey } from "vue";

export default function createApi(http: AxiosInstance){
	return {
		posts: createPostsApi(http),
	}
}

export type TApi = ReturnType<typeof createApi>;

/* type a = TApi['products']['one']
type b = Parameters<a>
type c = ReturnType<a>
type d = Awaited<c>
 */
export const ApiInjectKey = Symbol() as InjectionKey<TApi>