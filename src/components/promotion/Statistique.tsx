import React from "react";
import useStudentStore, {
	type IStudent,
	StudentStatus,
} from "../../stores/studentStore.ts";
import { getStudentColor, getStudentStatus } from "../../constants/students.ts";

type Props = {
	student: IStudent;
};

const Statistique = (props: Props) => {
	const { changeStudentStatus } = useStudentStore();

	const { student } = props;

	const handleOnClick = (studentId: number) => () => {
		if (student.status === StudentStatus.PAUSED) {
			changeStudentStatus(studentId, StudentStatus.PRESENT);
		} else {
			changeStudentStatus(studentId, StudentStatus.PAUSED);
		}
	};

	return (
		<div key={student.id} className={"flex flex-row  w-[200px] items-center"}>
			<span className={"flex-1 text-start"}>{student.name}</span>
			<button
				type={"button"}
				className={getStudentColor(student.status)}
				onClick={handleOnClick(student.id)}
			>
				{getStudentStatus(student.status)}
			</button>
		</div>
	);
};

export default Statistique;
