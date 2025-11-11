import React from 'react'

const LearningGoals = () => {
    return (
        <>
            <div>
                <label htmlFor="studentId">Learning Goals:</label>
                <textarea type="text" placeholder="Learning Goals" name="studentId" className="w-full mt-1 lg:mt-4 p-2 border border-gray-300 rounded-md" />
            </div>
        </>
    )
}

export default LearningGoals