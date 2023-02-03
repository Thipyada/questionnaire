export interface QuestionnaireTypes {
  questionnaireName: string
  questions: Question[]
}

export interface Question {
  questionId: string
  questionName: string
  allQuestionDetail:QuestionDetail[]
}

export interface QuestionDetail {
  choiceDetail: string
  checked: boolean
  choiceId: string
}