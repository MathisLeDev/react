import React from "react";
import useStudentStore, {
	type IStudent,
	StudentStatus,
} from "../../stores/studentStore.ts";
import Statistique from "./Statistique.tsx";

const ListeDePromo = () => {
	const { students, pauseAllStudents } = useStudentStore();

	return (
		<div className={"flex flex-col items-center justify-center my-auto"}>
			<h1 className={"mb-10"}>Liste de Promotion</h1>

			<div className={"flex-col flex  gap-8 items-start"}>
				{students.map((student: IStudent) => (
					<Statistique student={student} key={student.id} />
				))}
			</div>

			<button type={"button"} className={"mt-4"} onClick={pauseAllStudents}>
				Tous en pause
			</button>
		</div>
	);
};

export default ListeDePromo;
