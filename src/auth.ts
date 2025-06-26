let token: string = localStorage.getItem("token") || "";

export const setToken = (newToken: string) => {
	token = newToken;
	localStorage.setItem("token", token);
};

export const getToken = () => {
	return token;
};

export const isAuthenticated = () => {
	return !!token;
};

export const removeToken = () => {
	token = "";
	localStorage.removeItem("token");
};
