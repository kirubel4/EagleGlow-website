CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20) UNIQUE NOT NULL,
    age INT CHECK (age > 0),
    currentLevel VARCHAR(50),
    sex VARCHAR(10),
    emergency_phone VARCHAR(20),
    family_name VARCHAR(255)
);
