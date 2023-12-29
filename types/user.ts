export type User = {
	email: string
	gender: 'male' | 'female' | 'other'
	id: number
	name: string
	role: 'patient' | 'doctor'
}