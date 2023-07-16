import { writable } from "svelte/store";

export const userAuth = writable(localStorage.getItem("auth"));
