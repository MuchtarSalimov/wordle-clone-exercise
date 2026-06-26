import { queryOptions } from "@tanstack/react-query";
import axios from "redaxios";
//#region src/utils/users.tsx
var usersQueryOptions = () => queryOptions({
	queryKey: ["users"],
	queryFn: () => axios.get("http://127.0.0.1:3000/api/users").then((r) => r.data).catch(() => {
		throw new Error("Failed to fetch users");
	})
});
var userQueryOptions = (id) => queryOptions({
	queryKey: ["users", id],
	queryFn: () => axios.get("http://127.0.0.1:3000/api/users/" + id).then((r) => r.data).catch(() => {
		throw new Error("Failed to fetch user");
	})
});
//#endregion
export { usersQueryOptions as n, userQueryOptions as t };
