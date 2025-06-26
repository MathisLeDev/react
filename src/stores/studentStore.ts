import { create } from "zustand";

export enum StudentStatus {
	PRESENT,
	ABSENT,
	PAUSED,
}

export interface IStudent {
	id: number;
	name: string;
	status: StudentStatus;
}

const fakeStudents: IStudent[] = [
	{ id: 1, name: "Mathis", status: StudentStatus.PRESENT },
	{ id: 2, name: "Jimmy", status: StudentStatus.ABSENT },
	{ id: 3, name: "Matti", status: StudentStatus.PAUSED },
	{ id: 4, name: "Enzo", status: StudentStatus.PRESENT },
	{ id: 5, name: "Thomas", status: StudentStatus.ABSENT },
];

interface IStudentState {
	students: IStudent[];
	changeStudentStatus: (studentId: number, status: StudentStatus) => void;
	pauseAllStudents: () => void;
}

const useStudentStore = create<IStudentState>((set) => ({
	students: fakeStudents,
	changeStudentStatus: (studentId, status) =>
		set((state) => ({
			students: changeStudentStatus(state.students, studentId, status),
		})),
	pauseAllStudents: () =>
		set((state) => ({
			students: pauseAllStudents(state.students),
		})),
}));

const changeStudentStatus = (
	students: IStudent[],
	studentId: number,
	status: StudentStatus,
): IStudent[] => {
	return students.map((student) =>
		student.id === studentId ? { ...student, status } : student,
	);
};

const pauseAllStudents = (students: IStudent[]): IStudent[] => {
	return students.map((student) => ({
		...student,
		status: StudentStatus.PAUSED,
	}));
};

export default useStudentStore;
