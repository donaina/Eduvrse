import React from 'react'
import AssessmentModal from './AssessmentModal.tsx'

const AssessmentQuestions = () => {
    const [open, setOpen] = React.useState(false);
  return (
    <>
            <div>
                <h1 className='font-semibold text-md'>Calculus  Midterm Exams </h1>
                <h3>Advance Mathematics</h3>
                <h1>Instructions:  Answer All 30 Questions before time runs out, You are allowed to use your calculator  </h1>

                <div className=' bg-[#F2F0F5] p-3 my-3'>
                    <h1>Question 1</h1>
                    <ol className='list-[lower-alpha] ml-6 space-y-2'>
                        <li>What is the derivative of f(x) = x² + 3x + 5?</li>
                        <li>What is the integral of f(x) = 2x + 1?</li>
                        <li>What is the limit of f(x) = (x² - 4)/(x - 2) as x approaches 2?</li>
                        <li>What is the value of the definite integral from 0 to 1 of f(x) = x³?</li>
                    </ol>
                    <div className='w-full mt-4'>
                        <input type="text" pattern="[A-Za-z ]*" className='py-2 px-8 text-black w-full' placeholder='Answers' />
                    </div>
                </div>
                <div className=' bg-[#F2F0F5] p-3'>
                    <h1>Question 2</h1>
                    <p>Find the first derivative of the function f(x) = 3x^3 - 5x^2 + 2x - 7.</p>
                    <div>
                        <input type="radio" name='question'/> <span>Find the first derivative f'(x)= 3x^3-5x^2+2x-7f(x)=3x3</span><br />
                        <input type="radio" name='question' /> <span>Find the first derivative f'(x)= 3x^3-5x^2+2x-7f(x)=3x3</span><br />
                        <input type="radio" name='question' /> <span>Find the first derivative f'(x)= 3x^3-5x^2+2x-7f(x)=3x3</span><br />
                        <input type="radio" name='question'/> <span>Find the first derivative f'(x)= 3x^3-5x^2+2x-7f(x)=3x3</span><br />

                    </div>
                </div>
                <div className='flex justify-end my-6'>
                    <button className='bg-blue-600 text-white px-6 py-2 rounded' onClick={()=>setOpen(true)}>Submit</button>
                </div>  
            </div>

            <AssessmentModal open={open} onClose={() => setOpen(false)} />
            
        </>
  )
}

export default AssessmentQuestions