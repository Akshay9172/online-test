import React from 'react'
import Appbody from './Appbody'
import { useNavigate } from 'react-router-dom'

function TestInstruction() {
    const onClickStart = (() => {
        navigate('/test')
    })
    const navigate = useNavigate();
    return (
        <Appbody
            content={
                <div className='container'>
                    <div className='card w1'>
                        <div className='card-body'>
                            <h1 className='z1'><b>Test Instructions </b></h1>
                            <div className='mt-4 p-5 bg-light rounded'>
                                <p>This  examination
                                    will  be  graded
                                    by  a  computer
                                    .  It  is  therefore  important  to  read  and  follow
                                    these  instructions  to  ensure  that  the  Multiple  Choice  Quiz  (MCQ)  answer  sheet  is  marked
                                    properly  by the computer. </p><br></br>
                                <p><b>Read the following  instructions  refer   example below  as a guide:</b></p>

                                <div>
                                    <ul>
                                        <li className='q'>All  your  answers  to
                                            the  multiple  choice  questions  must  be  marked
                                            <b>  on  the  answer
                                                sheet  provided</b>
                                            .  After  the  examination,  your  answer  sheet  will  be  scanned  and  then
                                            graded  by  the  computer.  Anything  written  on  the  question booklet will not be taken into
                                            consideration  for assessme
                                            nt  purposes.</li>
                                        <li className='q'>Before
                                            you  start  the  examination,  check  that  your  answer  sheet  is  free  from  printing
                                            defects,  i.e.
                                            misaligned  contents,  faded  print,  missing  print,  repetitive  defects,  smeared
                                            or smudged.  Ask  the invigilator  to replace your answer  sheet if it
                                            has printing  defects.</li>
                                        <li className='q'>In  the  upper  section,  clearly
                                            fill  the  requested  information,  including  your
                                            <b> Name </b>
                                            and
                                            <b> ID</b>
                                            <b> Number</b>
                                            .</li>
                                        <li className='q'>Read  each  question  carefully
                                            .  Using  a
                                            PENCIL
                                            (ideally  HB  or  2B),  fill  in  the  circle
                                            corresponding  to the letter of the correct answer
                                            .

                                        </li>
                                        <li>Avoid
                                            unneces
                                            sary  marks  on  the
                                            a
                                            nswer
                                            s
                                            heet
                                            .
                                            Stray  marks  on  or  near  the  circles  may
                                            affect your score.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className='d'>
                        <button type="button" class="btn btn-primary d3" data-bs-toggle="modal" data-bs-target="#myModal">
                           <b> Start Test</b>
                        </button>
                        
                    </div>
                    <div class="modal" id="myModal">
                        <div class="modal-dialog n1">
                            <div class="modal-content">


                                <div class="modal-header">
                                    <h4 class="modal-title z1"> <b>Test </b></h4>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                                </div>


                                <div class="modal-body rt">
                                   <b>Are you sure want to start test?</b>
                                </div>


                                <div class="modal-footer">
                                    <button type="button" class="btn btn-primary d3" data-bs-dismiss="modal"
                                    onClick={() => onClickStart()}>
                                        <b>Start Test</b>
                                        </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            } />
    )
}

export default TestInstruction;
