import api from "./api";

export type ComputerQuestion = {
	SystemNumber: number;
	Questions: string[];
	SerialNumber: number; 
};

export type Participant = {
	User: string;
	Questions: string[];
	SystemNumber: number; 
	Allowed: boolean; 
};

export type Exam = {
	id: string
	ExamName: string;
	ExamDuration: number;
	SubjectID: string; 
	Branch: string; 
	Sections: string[]; 
	Year: number; 
	Regulation: string; 
	NumberOfQuestions: number; 
	EachQuestionMarks: number; 
	AllowedLanguages: string[]; 
	ExamStartTime: string; 
	ExamEndTime: string; 
	TotalAdditionalTimeAdded: number; 
	TotalMarks: number; 
	Status: string; 
	EvaluationMethod: string; 
	Room: string; 
	ServerSideEvaluation: boolean; 
	ServerSideExecution: boolean; 
	ComputerQuestions: ComputerQuestion[]; 
	Participants: Participant[]; 
	Scripts: string[]; 
	ManualVerificationAllowed: boolean; 
	AllowRejoin: boolean; 
	LogStudentCodeActivity: boolean; 
};


export async function GetAllExams(): Promise<Exam[]> {
    try {
        const response = await api.get("/v1/exams/", {
            headers: {
                Authorization: localStorage.getItem("token") || ''
            },
        });
        
        console.log(response.data.Data); // Log the fetched data
        return response.data.Data; // Return the questions array

    } catch (error) {
        console.error("Error fetching exams:", error);
        return null; // Return null if there's an error
    }
}

export function DeleteExam(id: string) {
    api.delete("/v1/exams/", {
        headers: {
            Authorization: localStorage.getItem("token")
        },
      })
      .then(({data}) => {
        console.log(data);
    }).catch(() => {
    }) 
}
