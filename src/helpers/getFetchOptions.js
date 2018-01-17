export default function getFetchOptions(endpoint, method = 'GET', opts = {}) {
	const headers = opts.headers || {}
	const defaultOptions = {
		...opts,
		endpoint: endpoint,
		method: method,
		credentials: 'include',
		headers: {
			...headers, 
			"Accept": "ajax", 
			"Content-Type": headers['Content-Type'] || "application/json"
		}
	}

	return defaultOptions;
}
