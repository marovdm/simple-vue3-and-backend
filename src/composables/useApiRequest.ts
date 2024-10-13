import { ref } from "vue"

type ApiRequestPending = {
	pending: true,
	success: false,
	fail: false
}

type ApiRequestSuccess<T> = {
	pending: false,
	success: true,
	fail: false,
	data: T
}

type ApiRequestFail = {
	pending: false,
	success: false,
	fail: true,
	error: Error
}

type ApiRequestResult<T> = ApiRequestPending | ApiRequestSuccess<T> | ApiRequestFail;

export default function useApiRequest<T extends (...args: any[]) => Promise<any>>(
	fn: T,
	...args: Parameters<T>
)
{
	const res = ref<ApiRequestResult<Awaited<ReturnType<T>>>>({
		pending: true,
		success: false,
		fail: false
	});
	
	fn(...args)
		.then(data => {
			res.value = {
				pending: false,
				success: true,
				fail: false,
				data
			}
		})
		.catch((e: unknown) => {
			res.value = {
				pending: false,
				success: false,
				fail: true,
				error: e instanceof Error ? e : new Error('unknown error')
			}
		})

	return res;
}