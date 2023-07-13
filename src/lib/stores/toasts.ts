import { writable } from 'svelte/store';
import uniqid from 'uniqid';

type ToastMessage = {
	id: string;
	type: 'info' | 'success' | 'warning' | 'error';
	message: string;
};

function createToastsStore() {
	const { subscribe, update } = writable<ToastMessage[]>([]);

	function addToast({
		type,
		message,
		id,
		timeout = 3000
	}: {
		type: ToastMessage['type'];
		message: string;
		id: string;
		timeout?: number;
	}) {
		update((toasts) => [{ type, message, id }, ...toasts]);
		if (timeout) {
			setTimeout(() => removeToast(id), timeout);
		}
	}

	function removeToast(id: string) {
		update((toasts) => toasts.filter((toast) => toast.id !== id));
	}

	return {
		subscribe,
		info: (message: string, timeout?: number) =>
			addToast({ type: 'info', message, id: uniqid(), timeout }),
		success: (message: string, timeout?: number) =>
			addToast({ type: 'success', message, id: uniqid(), timeout }),
		warning: (message: string, timeout?: number) =>
			addToast({ type: 'warning', message, id: uniqid(), timeout }),
		error: (message: string, timeout?: number) =>
			addToast({ type: 'error', message, id: uniqid(), timeout }),
		remove: removeToast
	};
}

export default createToastsStore();
