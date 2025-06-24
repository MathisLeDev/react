export interface ILocation {
	image: string;
	name: string;
	location: string;
	price: number;
}
export default [
	{
		image:
			"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		name: "Cozy Cottage",
		location: "Lake Tahoe, CA",
		price: 250,
	},
	{
		image:
			"https://images.unsplash.com/photo-1521747116042-5a810fda9664?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		name: "Modern Apartment",
		location: "New York, NY",
		price: 300,
	},
	{
		image:
			"https://images.unsplash.com/photo-1542831371-7b6c6b5e7c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
		name: "Beachfront Villa",
		location: "Miami, FL",
		price: 450,
	},
] satisfies ILocation[];
