-- 7. Admins (unchanged, correct)
CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE,
    password_hash TEXT,
    full_name VARCHAR(100),
    role VARCHAR(50)
);
-- 6. Events (unchanged, correct)
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    event_date DATE,
    created_by INT REFERENCES admins(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 1. Students (updated)
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    date_of_birth DATE NOT NULL,
    gender VARCHAR(10),
    belt_level VARCHAR(50) NOT NULL DEFAULT 'white',
    certificate TEXT,  -- Renamed from certificate_url
    photo TEXT,  -- Added back
    emergency_phone VARCHAR(20),
    family_name VARCHAR(100),  -- Kept from your original
    grade VARCHAR(20),  -- Kept
    school_name VARCHAR(100),  -- Kept
    address TEXT,  -- Kept
    medical_issues TEXT,
    is_active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Payments (unchanged, already correct)
CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    amount NUMERIC(10, 2),
    payment_method VARCHAR(50),
    transaction_id VARCHAR(100),  -- Added previously
    status VARCHAR(20) DEFAULT 'pending',  -- Added previously
    valid_until DATE,  -- Added previously
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Reviews (unchanged, correct)
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. E-Learning Materials (unchanged, correct)
CREATE TABLE e_learning_materials (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    youtube_url TEXT,
    belt_level VARCHAR(50),
    description TEXT
);

-- 5. Video Progress (unchanged, correct)
CREATE TABLE video_progress (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    video_id INT REFERENCES e_learning_materials(id) ON DELETE CASCADE,
    completed BOOLEAN DEFAULT FALSE,
    completed_at TIMESTAMP
);




-- 8. Authorizations (unchanged, correct)
CREATE TABLE authorizations (
    id SERIAL PRIMARY KEY,
    admin_id INT REFERENCES admins(id) ON DELETE CASCADE,
    can_manage_students BOOLEAN DEFAULT FALSE,
    can_manage_events BOOLEAN DEFAULT FALSE,
    can_manage_payments BOOLEAN DEFAULT FALSE,
    can_manage_videos BOOLEAN DEFAULT FALSE
);