const API_BASE_URL = "http://localhost:3000";


// Register a new student
export async function registerStudent(studentData) {
    try {
        const response = await fetch(`${API_BASE_URL}/students/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        });

        const result = await response.json();

        if (response.status === 201) {
            alert('Registration successful');
        } else {
            alert(`Error: ${result.message}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again later.');
    }
}

// Fetch all students
export async function getStudents() {
    try {
        
        const res = await fetch(`${API_BASE_URL}/students`);
        // const data = await res.json();
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return await res.json();
        
    } catch (error) {
        console.error("Error fetching students:", error);
    }
}


