import eleanorAvatar from '@/assets/imgs/users/avatar-2.png';
import brooklynAvatar from '@/assets/imgs/users/avatar-1.png';
import eleanorAvatarBig from '@/assets/imgs/users/avatar-2-B.jpg';
import brooklynAvatarBig from '@/assets/imgs/users/avatar-1-B.jpg';

export interface Chat {
	id: number;
	name: string;
	avatar: string;
	avatarLg: string;
	phoneNumber: string;
	about: string;
	lastMessage: string;
	lastMessageTime: string;
	activityState: string;
	chatHistory: ChatHistory[];
}

export interface ChatHistory {
	sender: boolean;
	text: string;
	date: string;
}

export const aviableUsers: Chat[] = [
	{
		id: 2,
		name: 'Eleanor Pena',
		avatar: eleanorAvatar,
		avatarLg: eleanorAvatarBig,
		phoneNumber: '+1 202-555-0111',
		about:
			"Hey there! I'm a software engineer by profession, and I love to code. In my free time, you can usually find me reading books, playing video games, or exploring new restaurants in town. Feel free to say hi and chat with me about anything tech-related!",
		lastMessage: "Sorry, I'm busy tomorrow. How about next week?",
		lastMessageTime: '31 Mar',
		activityState: 'Last seen at 16:41',
		chatHistory: [
			{ sender: true, text: "Hey, how's it going?", date: '2023-03-15 10:22 AM' },
			{
				sender: false,
				text: 'Not much, just finished up some errands. How about you?',
				date: '2023-03-15 10:55 AM'
			},
			{
				sender: true,
				text: "I've been pretty busy with work. Do you want to grab lunch sometime next week?",
				date: '2023-03-17 2:14 PM'
			},
			{
				sender: false,
				text: 'Sure, how about Tuesday at noon?',
				date: '2023-03-18 9:35 AM'
			},
			{
				sender: true,
				text: "Tuesday works for me. Let's meet at that new sushi place downtown.",
				date: '2023-03-19 3:20 PM'
			},
			{
				sender: false,
				text: 'Hey, are you free this weekend? I want to check out that new art exhibit.',
				date: '2023-03-21 7:15 PM'
			},
			{
				sender: true,
				text: 'Sorry, I have plans this weekend. How about next weekend?',
				date: '2023-03-22 11:20 AM'
			},
			{
				sender: false,
				text: "Sure, let's plan for Saturday afternoon.",
				date: '2023-03-23 8:05 AM'
			},
			{
				sender: true,
				text: 'Hey, did you hear about that new movie that just came out? Do you want to check it out this Friday night?',
				date: '2023-03-25 1:45 PM'
			},
			{
				sender: false,
				text: 'Sounds good. Let me know what time and where to meet.',
				date: '2023-03-25 4:20 PM'
			},
			{
				sender: true,
				text: "Let's meet at the theater near your place at 7 pm.",
				date: '2023-03-26 9:28 AM'
			},
			{
				sender: false,
				text: 'Great, see you there!',
				date: '2023-03-26 11:45 AM'
			},
			{
				sender: true,
				text: 'Hey, how was the movie last night?',
				date: '2023-03-27 12:15 PM'
			},
			{
				sender: false,
				text: 'It was really good. Thanks for inviting me!',
				date: '2023-03-28 10:45 AM'
			},
			{
				sender: true,
				text: 'No problem, we should do it again sometime.',
				date: '2023-03-29 3:50 PM'
			},
			{
				sender: false,
				text: 'Definitely. How about we plan a hiking trip next month?',
				date: '2023-04-02 7:30 PM'
			},
			{
				sender: true,
				text: "That sounds like a great idea. Let's talk more about it next time we meet up.",
				date: '2023-04-03 11:10 AM'
			}
		]
	},
	{
		id: 1,
		name: 'Brooklyn Simmons',
		avatar: brooklynAvatar,
		avatarLg: brooklynAvatarBig,
		phoneNumber: '+1 202-555-0112',
		about:
			"Hi, I'm Sarah! I'm a freelance graphic designer and illustrator. I'm passionate about all things art and design, and I love to create beautiful things. When I'm not working on a project, I enjoy hiking, traveling, and trying out new recipes in the kitchen. Don't hesitate to message me if you're interested in collaborating or just want to chat!",
		lastMessage: "Sorry, I'm busy tomorrow. How about next week?",
		lastMessageTime: '31 Mar',
		activityState: 'Online now',
		chatHistory: [
			{ sender: true, text: "Hey, what's up?", date: '2022-01-05 8:32 AM' },
			{
				sender: false,
				text: 'Not much, just getting ready for work. How about you?',
				date: '2022-01-05 9:05 AM'
			},
			{
				sender: true,
				text: "Sorry for the late reply. I've been busy with work too. Do you want to grab dinner sometime next week?",
				date: '2022-01-08 6:14 PM'
			},
			{
				sender: false,
				text: 'Sounds good. How about Wednesday evening?',
				date: '2022-01-09 11:20 AM'
			},
			{
				sender: true,
				text: "Wednesday works for me. Let's meet at that new Italian place downtown at 7 pm?",
				date: '2022-01-10 2:45 PM'
			},
			{
				sender: false,
				text: 'Sorry, I have to cancel dinner tonight. Something came up at work.',
				date: '2022-01-12 8:10 AM'
			},
			{
				sender: true,
				text: "No worries. Let's reschedule for next week?",
				date: '2022-01-15 1:32 PM'
			},
			{ sender: false, text: 'Sure, how about Thursday evening?', date: '2022-01-16 5:45 PM' },
			{
				sender: true,
				text: "Sounds good. Let's meet at 6:30 pm at the same place.",
				date: '2022-01-17 9:28 AM'
			},
			{
				sender: false,
				text: 'Hey, are you free this weekend? I want to try that new coffee shop in the city.',
				date: '2022-01-21 10:15 PM'
			},
			{
				sender: true,
				text: 'Sorry, I have plans this weekend. How about next weekend?',
				date: '2022-01-22 12:20 PM'
			},
			{
				sender: false,
				text: "Sure, let's plan for next Saturday at 11 am.",
				date: '2022-01-23 8:05 AM'
			},
			{
				sender: true,
				text: 'Hey, I just got back from vacation. How have you been?',
				date: '2022-02-02 2:15 PM'
			},
			{
				sender: false,
				text: "Welcome back! I've been good, just busy with work.",
				date: '2022-02-03 9:45 AM'
			}
		]
	}
];

// export const selectedUser
