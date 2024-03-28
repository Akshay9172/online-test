import React, { useEffect, useState } from 'react'
import Appbody from './Appbody'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Test() {

    const questions = [
        { id: 1, qName: "Which of the following Upanishads is written in prose ?", option1: " Isa   Chandragupta Chandragupta Chandragupta", option2: "Katha", option3: "Brihadaranyaka ", option4: "Svetasvatara" },
        { id: 2, qName: "Which ruler is credited for the spread of Jainism in Karnataka?", option1: " Chandragupta Maurya  ", option2: "Bimbisara ", option3: "Ashoka  ", option4: "Samparati" },
        { id: 3, qName: "Heliodorus was the Greek ambassador of which of the following Indo-Greek kings?", option1: " Antialcidas Nikephoros  ", option2: "Selecus Nicator ", option3: "Alexander  ", option4: "Constantine" },
        { id: 4, qName: "Whom did Skandgupta appointed as the the Provincial Governor of Saurashtra?", option1: " Virasena  ", option2: "Parnadatta ", option3: "Harisena  ", option4: "Amarkhaddava  " },
        { id: 5, qName: "Tat Tvam Asi, a sanskrit phrase, originally occurs in which of the following Upanishads?", option1: " Mundaka Upanishad  ", option2: "Chandogya Upanishad ", option3: "Brhadaranyaka Upanishad  ", option4: " Mandukya Upanishad" },
        { id: 6, qName: "Which among the following work was originally called as Jaya Kavya?", option1: " Ramayan ", option2: "Mahabharata", option3: "Aitreya Brahaman ", option4: "Manu Smriti" }
    ];


    const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showPrevious, setShowPrevious] = useState(false);
    let totalQuestion = questions.length - 1;
    const navigate = useNavigate();
    const [selectedQuestions, setSelectedQuestions] = useState([]);


    const setCurrentOption = (data) => {
        let selectQues = { id: currentQuestion.id, ans: data }
        let totalSelectedQuestion = selectedQuestions.length;

        if (totalSelectedQuestion === 0) {
            setSelectedQuestions([...selectedQuestions, selectQues]);
        } else {
            selectedQuestions.find((o, i) => {
                if (o.id === currentQuestion.id) {
                    selectedQuestions.splice(i);
                    setSelectedQuestions([...selectedQuestions, selectQues]);
                } else {
                    setSelectedQuestions([...selectedQuestions, selectQues]);
                }
            });
        }
        console.log(selectQues);

    }
    const handaleSubmit = () => {
        console.log(selectedQuestions);
        //     axios
        //     .post("https://64d11c59ff953154bb79fead.mockapi.io/exam",selectedQuestions)
        //    .then(()=>{
        //     setData(selectedQuestions);
        //     console.log(selectedQuestions)

        //    })
        //    .catch((error)=>console.log(error));
        navigate('/thank-you')

    }
   
    const setQuestion = (ch) => {
        let fetchQuestionIndex;
        if (ch === 1) {
            // Preve
            if (currentIndex > 0) {
                fetchQuestionIndex = currentIndex - 1;
                if (fetchQuestionIndex === 0) {
                    setShowPrevious(false)
                }

            }
        } else {
            if (currentIndex < totalQuestion) {
                // Next
                fetchQuestionIndex = currentIndex + 1;
                setShowPrevious(true);
            }
        }
        // Specific inxed record fetch 
        let res = questions[fetchQuestionIndex];
        setCurrentQuestion(res);
        setCurrentIndex(fetchQuestionIndex);
    }


    const [timeRemaining, setTimeRemaining] = useState(1 * 60);

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeRemaining > 0) {
                setTimeRemaining(timeRemaining - 1);
            } else {
                 //api call 
                 //axios.post();
                 //document.getElementById('examForm').submit();
                //form submit code 
                //Api call when auto sumbmit form when get response it will redirect to thank you page  
                // Redirect  Thank You 
                clearInterval(timer);
                navigate('/thank-you')

            }
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [timeRemaining]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
   


    return (
        <Appbody
            content={
                <div className='container'>
                    <form id="examForm">
                        <div className='card w1'>
                            <div className='card-body'>
                                <h1 className='z1'><b>Questions</b></h1>
                                <div className='d'>
                                    <b className='rt'>{formatTime(timeRemaining)}</b>
                                    <button className='btn btn-primary v d3' type='button' onClick={() => handaleSubmit()}><b>Submit Test</b></button>
                                </div>
                                <div className='mt-4 p-5 bg-light rounded'>

                                    <tr>
                                        <h5 className='c'><b>{currentQuestion.id} . {currentQuestion.qName}</b></h5><br></br>
                                        <div className='v '>
                                            <div><input className='x' type="radio" name="ans" value={currentQuestion.option1} onChange={(e) => setCurrentOption(e.target.value)} /></div> <div className='oo'><lable className='o'>{currentQuestion.option1}</lable></div> <br></br>
                                            <div><input className='x' type="radio" name="ans" value={currentQuestion.option2} onChange={(e) => setCurrentOption(e.target.value)} /></div> <div className='oo'><lable className='o'>{currentQuestion.option2}</lable></div> <br></br>
                                            <div><input className='x' type="radio" name="ans" value={currentQuestion.option3} onChange={(e) => setCurrentOption(e.target.value)} /></div> <div className='oo'><lable className='o'>{currentQuestion.option3}</lable></div> <br></br>
                                            <div><input className='x' type="radio" name="ans" value={currentQuestion.option4} onChange={(e) => setCurrentOption(e.target.value)} /></div> <div className='oo'><lable className='o'>{currentQuestion.option4}</lable></div> <br></br>
                                        </div>
                                    </tr>

                                </div>


                            </div>
                        </div>

                        <br></br>
                        <div className='d'>
                            <div>
                                {showPrevious && <button type="button" class="btn btn-primary d2 d3" readOnly={true} onClick={() => setQuestion(1)}><b>
                                    <i class="fa-solid fa-backward ml"></i>
                                    Previous</b></button>}
                                <button type="button" class="btn btn-primary d3" disabled={currentIndex === totalQuestion ? true : false} onClick={() => setQuestion(2)}><b>
                                    Next
                              `      <i class="fa-solid fa-forward mr"></i>`
                                </b></button>
                            </div>

                        </div>
                    </form>

                </div>
            } />
    )
}

export default Test
