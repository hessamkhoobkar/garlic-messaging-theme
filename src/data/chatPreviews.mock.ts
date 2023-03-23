import avatar0 from '@/assets/imgs/users/avatar.png';
import avatar1 from '@/assets/imgs/users/avatar-1.png';
import eleanorAvatar from '@/assets/imgs/users/avatar-2.png';
import avatar3 from '@/assets/imgs/users/avatar-3.png';
import avatar4 from '@/assets/imgs/users/avatar-4.png';
import avatar5 from '@/assets/imgs/users/avatar-5.png';
import avatar6 from '@/assets/imgs/users/avatar-6.png';
import avatar7 from '@/assets/imgs/users/avatar-7.png';
import avatar8 from '@/assets/imgs/users/avatar-8.png';
import avatar9 from '@/assets/imgs/users/avatar-9.png';
import avatar10 from '@/assets/imgs/users/avatar-10.png';
import avatar11 from '@/assets/imgs/users/avatar-11.png';
import avatar12 from '@/assets/imgs/users/avatar-12.png';

export interface Chat {
	id: number;
	name: string;
	avatar: string;
	lastMessage: string;
	lastMessageTime: string;
}

export const chats: Chat[] = [
	{
		id: 30,
		name: 'Emma Williams',
		avatar: avatar0,
		lastMessage: "Sorry, I'm busy tomorrow. How about next week?",
		lastMessageTime: '15 min ago'
	},
	{
		id: 1,
		name: 'Brooklyn Simmons',
		avatar: avatar1,
		lastMessage:
			"Okay, let me take a look. So you're trying to find the derivative of this function?",
		lastMessageTime: '1 hour ago'
	},
	{
		id: 2,
		name: 'Eleanor Pena',
		avatar: eleanorAvatar,
		lastMessage: "Sorry, I'm busy tomorrow. How about next week?",
		lastMessageTime: '31 Mar'
	},
	{
		id: 3,
		name: 'Morning lovelies',
		avatar: avatar3,
		lastMessage: 'I am doing well, how about you?',
		lastMessageTime: '29 Mar'
	},
	{
		id: 4,
		name: 'Rachel Carter',
		avatar: avatar4,
		lastMessage:
			'Yeah, I went there last week and the food was fantastic. You should definitely try it out.',
		lastMessageTime: 'Mar 29'
	},
	{
		id: 5,
		name: 'Amelia Baker',
		avatar: avatar5,
		lastMessage:
			'They were down by 15 points with only a few minutes left, but they managed to score three quick touchdowns and win the game in overtime.',
		lastMessageTime: 'Mar 29'
	},
	{
		id: 6,
		name: 'Lucas Nguyen',
		avatar: avatar6,
		lastMessage: "Sorry, I'm busy tomorrow. How about next week?",
		lastMessageTime: 'Mar 29'
	},
	{
		id: 7,
		name: 'Benjamin Parker',
		avatar: avatar7,
		lastMessage:
			"Okay, let me take a look. So you're trying to find the derivative of this function?",
		lastMessageTime: 'Mar 15'
	},
	{
		id: 8,
		name: 'Gabriella Mitchell',
		avatar: avatar8,
		lastMessage: "Sorry, I'm busy tomorrow. How about next week?",
		lastMessageTime: 'Mar 08'
	},
	{
		id: 9,
		name: 'William Jones',
		avatar: avatar9,
		lastMessage: 'I am doing well, how about you?',
		lastMessageTime: 'Mar 01'
	},
	{
		id: 10,
		name: 'Emily Lee',
		avatar: avatar10,
		lastMessage:
			'Yeah, I went there last week and the food was fantastic. You should definitely try it out.',
		lastMessageTime: 'Feb 22'
	},
	{
		id: 11,
		name: 'Henry Scott',
		avatar: avatar11,
		lastMessage:
			'They were down by 15 points with only a few minutes left, but they managed to score three quick touchdowns and win the game in overtime.',
		lastMessageTime: 'Jan 05'
	},
	{
		id: 12,
		name: 'Lily Wong',
		avatar: avatar12,
		lastMessage: "I'm sorry I'm running late, I'll be there soon.",
		lastMessageTime: 'Nov 18'
	}
];
