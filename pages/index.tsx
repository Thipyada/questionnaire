import Head from 'next/head'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Home() {
  // create uniques Id
  const generateId = () => {
    const possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

    let randomID = ''
    for (let i = 0; i < 20; i++) {
      randomID += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
    }
    return randomID
  }

  const eachChoice = {
    choiceDetail: '',
    errorChoiceDetail: false,
    checked: false,
    choiceId: generateId()
  }

  const eachQuestion = {
    questionId: generateId(),
    questionName: '',
    errorQuestionName: false,
    errorCheckedChoice: false,
    allQuestionDetail: [eachChoice]
  }

  const initialQuestionnaireName = {
    questionnaireName: '',
    errorQuestionnaireName: false
  }

  const [allQuestion, setAllQuestion] = useState([eachQuestion])

  const [questionnaireName, setQuestionnaireName] = useState({
    questionnaireName: '',
    errorQuestionnaireName: false
  })

  const [saveValid, setSaveValid] = useState(false)


  const questionnaire = {
    ...questionnaireName,
    ...allQuestion
  }


  // OnClick
  const handleAddQuestionClick = () => {
    setAllQuestion((prevAllQuestion) => {

      const newQuestion = { ...eachQuestion }
      // const newChoice = {
      //   ...eachChoice, checked: true
      // }
      // const allNewChoice = [newChoice]
      // newQuestion.allQuestionDetail = allNewChoice
      newQuestion.questionId = generateId()

      return [
        ...prevAllQuestion,
        newQuestion
      ]
    })
  }

  const handleDuplicateQuestionClick = (questionID: string) => {
    setAllQuestion((prevAllQuestion) => {
      const listQuestion = [...prevAllQuestion]

      const dupIndex = listQuestion.findIndex(object => {
        return object.questionId === questionID;
      });


      const dupObject = listQuestion[dupIndex]
      const dupObjectWithNewId = { ...dupObject, questionId: generateId() }

      const newListQuestion = [...listQuestion];

      newListQuestion.splice(dupIndex + 1, 0, dupObjectWithNewId);

      return newListQuestion
    })
  }

  const handleDeleteQuestionClick = (deleteID: string) => {
    setAllQuestion((prevAllQuestion) => {
      return prevAllQuestion.filter((item) => item.questionId !== deleteID)
    })
  }

  const handleAddChoiceClick = (questionID: string) => {
    setAllQuestion(prevAllQuestion => {
      const questionIndex = prevAllQuestion.findIndex(object => {
        return object.questionId === questionID;
      });

      return prevAllQuestion.map((item, idx) => {
        if (questionIndex === idx) {
          const newChoice = { ...eachChoice, choiceId: generateId() }
          return {
            ...prevAllQuestion[questionIndex],
            allQuestionDetail: [
              ...prevAllQuestion[questionIndex].allQuestionDetail,
              newChoice
            ]
          }
        } else {
          return item;
        }
      })
    });
  }

  const handleDeleteChoice = (choiceID: string, questionID: string) => {
    setAllQuestion(prev => {
      const prevAllQuestion = [...prev]

      const questionIndex = prevAllQuestion.findIndex(object => {
        return object.questionId === questionID;
      });

      const remainingChoice = prevAllQuestion[questionIndex].allQuestionDetail.filter((item) => item.choiceId !== choiceID)

      prevAllQuestion[questionIndex].allQuestionDetail = remainingChoice

      return prevAllQuestion
    });
  }

  const handleClickChecked = (choiceID: string, questionID: string) => {
    setAllQuestion((prev) => {
      const allQuestion = [...prev];

      const questionIndex = allQuestion.findIndex(object => {
        return object.questionId === questionID;
      });

      const allChoice = allQuestion[questionIndex].allQuestionDetail;

      const findCheckedChoice = allChoice.map((choice) => {
        if (choice.choiceId === choiceID) {
          if (choice.checked === true) {
            return { ...choice, checked: false };
          } else {
            return { ...choice, checked: true };
          }
        } else {
          return { ...choice, checked: false };
        }
      });

      allQuestion[questionIndex].allQuestionDetail = findCheckedChoice;
      allQuestion[questionIndex].errorCheckedChoice = false; // Disable the error message

      return allQuestion;
    });
  };


  // OnChange
  const handleQuestionNameChange = (questionID: string, value: string) => {
    setAllQuestion((prevAllQuestion) => {
      const listQuestion = [...prevAllQuestion]

      const newQuestionName = listQuestion.map((item) => {
        if (item.questionId === questionID) {
          if (item.questionName) {
            return {
              ...item,
              questionName: value,
              errorQuestionName: false
            }
          } else {
            return {
              ...item,
              questionName: value,
            }
          }
        } else {
          return item
        }
      })
      return newQuestionName
    })
  }

  const handleQuestionnaireNameChange = (value: string) => {
    if (questionnaireName) {
      setQuestionnaireName((prev) => {
        return {
          ...prev,
          questionnaireName: value,
          errorQuestionnaireName: false
        }
      })
    }
  }

  const handleDetailChange = (value: string, choiceID: string, questionID: string) => {
    setAllQuestion((prevAllQuestion) => {
      const allQuestion = [...prevAllQuestion]

      const questionIndex = allQuestion.findIndex(object => {
        return object.questionId === questionID;
      });

      const allChoice = allQuestion[questionIndex].allQuestionDetail

      const findChangeDetail = allChoice.map((choice) => {
        if (choice.choiceId === choiceID) {
          if (choice.choiceDetail) {
            return {
              ...choice,
              choiceDetail: value,
              errorChoiceDetail: false
            }
          } else {
            return {
              ...choice,
              choiceDetail: value,
            }
          }
        } else {
          return choice
        }
      })

      allQuestion[questionIndex].allQuestionDetail = findChangeDetail

      return allQuestion
    })
  }

  // Validate
  const validate = () => {
    let isValid = true;

    if (!questionnaireName.questionnaireName) {
      isValid = false;
      setQuestionnaireName(prevState => ({
        ...prevState,
        errorQuestionnaireName: true
      }));
    } else {
      setQuestionnaireName(prevState => ({
        ...prevState,
        errorQuestionnaireName: false
      }));
    }

    allQuestion.forEach((question, questionIndex) => {
      if (!question.questionName) {
        isValid = false;

        const newQuestion = [...allQuestion];
        newQuestion[questionIndex].errorQuestionName = true;
        setAllQuestion(newQuestion);

      } else {
        const newQuestion = [...allQuestion];
        newQuestion[questionIndex].errorQuestionName = false;
        setAllQuestion(newQuestion);
      }

      question.allQuestionDetail.forEach((choice, choiceIndex) => {
        if (!choice.choiceDetail) {
          isValid = false;
          const newQuestion = [...allQuestion];
          newQuestion[questionIndex].allQuestionDetail[choiceIndex].errorChoiceDetail = true;
          setAllQuestion(newQuestion);
        } else {
          const newQuestion = [...allQuestion];
          newQuestion[questionIndex].allQuestionDetail[choiceIndex].errorChoiceDetail = false;
          setAllQuestion(newQuestion);
        }

      });
    });

    return isValid;
  };

  // Helper Text
  const helperText = (choiceCheck: boolean, errorCheck: boolean) => {
    if (choiceCheck === true) {
      if (errorCheck === true) {
        return 'This answer is correct, Please fill in this option'
      } else {
        return 'This answer is correct'
      }
    } else {
      if (errorCheck === true) {
        return 'Please fill in this option'
      } else {
        return ''
      }
    }
  }

  // Submit
  const handleSaveClick = () => {
    const validateResult = validate()

    let errorFound = false;

    // Check the checked choice in each question
    const updatedQuestion = allQuestion.map(question => {
      const checkedChoice = question.allQuestionDetail.find(choice => choice.checked);
      if (!checkedChoice) {
        errorFound = true;
        return { ...question, errorCheckedChoice: true };
      }
      return { ...question, errorCheckedChoice: false };
    });


    if (validateResult === true && errorFound === false) {
      setSaveValid(true)
      console.log('completeQuestionnaire', questionnaire)
    } else {
      setSaveValid(false)
      setAllQuestion(updatedQuestion);
    }
  }

  // Cancel
  const handleCancelClick = () => {
    setAllQuestion([eachQuestion])
    setQuestionnaireName(initialQuestionnaireName)
  }

  // Alert
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSaveValid(false)
  };


  // console.log('eachChoice', eachChoice)
  // console.log('eachQuestion', eachQuestion)
  // console.log('allQuestion', allQuestion)
  // console.log('questionnaireName', questionnaireName)
  // console.log('questionnaire', questionnaire)

  return (
    <div className='questionnaire'>
      <Head>
        <title>
          Foxbith Questionnaire
        </title>
      </Head>

      {/* Alert Submit Successful */}
      <Snackbar open={saveValid} autoHideDuration={6000} onClose={handleClose} >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Save Questionnaire Successful
        </Alert>
      </Snackbar >


      {/* Qheader */}
      <header>
        <div className="questionnaireHeaderTitle">
          <div className="foxIcon">
            <img
              src='/images/fox-face_1f98a.png'
            />
          </div>
          <h5>Foxbith Questionnaire</h5>
        </div>
        <div className="questionnaireHeaderButton">
          <div className="cancelButton">
            <Button
              variant='outlined'
              onClick={handleCancelClick}
            >
              cancel
            </Button>
          </div>
          <div className="saveButton">
            <Button
              variant='contained'
              onClick={handleSaveClick}
            >
              save
            </Button>
          </div>
        </div>
      </header>


      <div className="questionnaireBox">

        {/* QBodyQuestionTitle */}
        <Box className="questionnaireBodyTitleBox">
          <div className="questionnaireBodyTitleCover">
            <div className="questionnaireBodyTitle">
              <h6>Questionnaire Detail</h6>
            </div>

            <div className="questionnaireBodyInputTitle">
              <TextField
                label='Name'
                variant='outlined'
                value={questionnaire.questionnaireName}
                required
                onChange={(e) => handleQuestionnaireNameChange(e.target.value)}
                error={questionnaire.errorQuestionnaireName}
                helperText={questionnaire.errorQuestionnaireName ? 'Please fill in this option' : ' '}
              ></TextField>
            </div>
          </div>
        </Box>

        {/* QBodyQuestionEach */}
        {allQuestion.map((question, index) => (
          <Box className="questionnaireBodyEachQuestionBox" key={index}>
            <div className="questionnaireBodyEachQuestionCover">
              <div className="questionnaireBodyEachQuestionInside">

                <div className="questionnaireBodyEachQuestionNumber">
                  <h6>Question {index + 1}</h6>
                </div>

                <div className="questionnaireBodyEachQuestionTitleInput">
                  <TextField
                    label='Name'
                    variant='outlined'
                    name='questionName'
                    value={question.questionName}
                    required
                    onChange={(e) => handleQuestionNameChange(question.questionId, e.target.value)}
                    error={question.errorQuestionName}
                    helperText={question.errorQuestionName ? 'Please fill in this option' : ''}
                  ></TextField>
                </div>

                <div className="questionnaireBodyEachQuestionChoices">

                  {/* <QBodyEachQuestionChoices/> */}

                  {question.errorCheckedChoice && <div className="noCheckedChoiceErrorMessage">Please select at least one choice</div>}


                  {question.allQuestionDetail.map((choice, idx) => (
                    <div className="eachChoiceBox" key={idx}>
                      <div className='eachChoice'>
                        <Checkbox
                          icon={<RadioButtonUncheckedIcon />}
                          checkedIcon={<CheckCircleIcon />}
                          checked={choice.checked}
                          onClick={() => handleClickChecked(choice.choiceId, question.questionId)}
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                        <TextField
                          label='Description'
                          variant='outlined'
                          name='choiceDetail'
                          value={choice.choiceDetail}
                          required
                          onChange={(e) => handleDetailChange(e.target.value, choice.choiceId, question.questionId)}
                          error={choice.errorChoiceDetail}
                          helperText={helperText(choice.checked, choice.errorChoiceDetail)}
                        ></TextField>

                        <div className="deleteEachChoiceButton">
                          <Button
                            onClick={() => handleDeleteChoice(choice.choiceId, question.questionId)}
                          >
                            <DeleteOutlineIcon />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>


                <div className="questionnaireBodyEachQuestionAddButton">
                  <Button
                    startIcon={<AddIcon />}
                    onClick={() => handleAddChoiceClick(question.questionId)}
                  >
                    Add Choice
                  </Button>
                </div>
              </div>

              <div className="questionnaireBodyEachQuestionButtons">
                <div className="duplicateWholeQuestionButton">
                  <Button
                    startIcon={<ContentCopyIcon />}
                    onClick={() => handleDuplicateQuestionClick(question.questionId)}
                  >
                    Duplicate
                  </Button>
                </div>
                <div className="deleteWholeQuestionButton">
                  <Button
                    startIcon={<DeleteOutlineIcon />}
                    onClick={() => handleDeleteQuestionClick(question.questionId)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        ))}


        {/* QBodyAddQuestionButton */}
        <Box className="questionnaireBodyAddButtonBox">
          <div className="questionnaireBodyAddButtonCover">
            <div className="questionnaireBodyAddButton">
              <Button
                variant='outlined'
                startIcon={<AddIcon />}
                onClick={handleAddQuestionClick}
              >
                Add Question
              </Button>
            </div>
          </div>
        </Box>

      </div>
    </div >
  )
}