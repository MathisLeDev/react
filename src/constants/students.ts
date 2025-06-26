import { StudentStatus } from "../stores/studentStore.ts";

export const getStudentStatus = (status: StudentStatus) => {
	switch (status) {
		case StudentStatus.PRESENT:
			return "Présent";
		case StudentStatus.ABSENT:
			return "Absent";
		case StudentStatus.PAUSED:
			return "En pause";
		default:
			return "Inconnu";
	}
};

export const getStudentColor = (status: StudentStatus) => {
	switch (status) {
		case StudentStatus.PRESENT:
			return "text-green-500";
		case StudentStatus.ABSENT:
			return "text-red-500";
		case StudentStatus.PAUSED:
			return "text-yellow-500";
		default:
			return "text-gray-500";
	}
};
