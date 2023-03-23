import { writable } from 'svelte/store';

export const activeChat = writable(0);
export const selectedUserDetails = writable(false);
