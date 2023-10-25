export interface APIKeyResponse {
	apikey: string;
}

export interface FairEvent {
	id: string;
	fairDayId: string;
	name: string;
	description: string;
	location: string;
	startTime: string;
	endTime: string;
	createdAt: string;
	updatedAt: string;
}

export interface FairDay {
	id: string;
	name: string;
	fairId: string;
	date: string;
	createdAt: string;
	updatedAt: string;
	openingTime: string;
	closingTime: string;
}

export interface FairRegistration {
	name: string;
	location: string;
	startDate: string;
	endDate: string;
	createdAt: string;
	updatedAt: string;
	fairDays: Array<FairDay>;
	fairEvents: Array<FairEvent>;
	camperSpotMap: string;
}

export interface Fair {
	id: string;
	name: string;
	location: string;
	startDate: string;
	endDate: string;
	createdAt: string;
	updatedAt: string;
	organizerId: string;
	fairDays: Array<FairDay>;
	fairEvents: Array<FairEvent>;
	camperSpotMap: string;
}

export interface User {
	id: string;
	apikey: string;
	email: string;
	first_name: string;
	lastName: string;
	phoneNumber: string;
	password: string;
	role: string;
	createdAt: string;
	updatedAt: string;
}

export type GetUserModes = 'id' | 'email' | 'apikey';
