
CREATE TABLE students(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  date_of_birth DATE,
  phone VARCHAR(20) UNIQUE NOT NULL,
  sex VARCHAR(10),
  emergency_phone VARCHAR(20),
  family_name VARCHAR(255),
  current_level VARCHAR(50)
  
);