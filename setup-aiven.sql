-- Run this script on your Aiven MySQL database
CREATE DATABASE IF NOT EXISTS riffmate;
USE riffmate;

-- Chords table
CREATE TABLE chords (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    diagram TEXT NOT NULL,
    difficulty ENUM('Beginner', 'Intermediate', 'Advanced') DEFAULT 'Beginner',
    description TEXT
);

-- Tabs table
CREATE TABLE tabs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    song_name VARCHAR(100) NOT NULL,
    artist VARCHAR(100) NOT NULL,
    tab_content TEXT NOT NULL,
    difficulty ENUM('Beginner', 'Intermediate', 'Advanced') DEFAULT 'Beginner'
);

-- Scales table
CREATE TABLE scales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    pattern VARCHAR(100) NOT NULL,
    description TEXT,
    example TEXT
);

-- Theory articles table
CREATE TABLE theory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(50) DEFAULT 'General'
);

-- Insert sample data
INSERT INTO chords (name, diagram, difficulty, description) VALUES
('C Major', '0-1-0-2-3-0', 'Beginner', 'Basic open C major chord'),
('G Major', '3-2-0-0-3-3', 'Beginner', 'Basic open G major chord'),
('Am', '0-0-2-2-1-0', 'Beginner', 'A minor chord'),
('F Major', '1-1-3-3-2-1', 'Intermediate', 'F major barre chord'),
('D Major', 'x-x-0-2-3-2', 'Beginner', 'Open D major chord'),
('E Major', '0-2-2-1-0-0', 'Beginner', 'Open E major chord'),
('Dm', 'x-x-0-2-3-1', 'Beginner', 'Open D minor chord'),
('E Minor', '0-2-2-0-0-0', 'Beginner', 'Open E minor chord'),
('B7', 'x-2-1-2-0-2', 'Intermediate', 'Basic B7 open chord'),
('A Major', 'x-0-2-2-2-0', 'Beginner', 'Open A major chord');

INSERT INTO tabs (song_name, artist, tab_content, difficulty) VALUES
('Wonderwall', 'Oasis', 'Em7-G-D-C progression', 'Beginner'),
('Smoke on the Water', 'Deep Purple', '0-3-5-0-3-6-5-0-3-5-3-0', 'Beginner'),
('Stairway to Heaven', 'Led Zeppelin', 'Am-C-D-F-G progression', 'Intermediate'),
('Back in Black', 'AC/DC', 'E5 power chord riff with palm muting', 'Intermediate'),
('Highway to Hell', 'AC/DC', 'Open power chord progression with steady rhythm', 'Beginner');

INSERT INTO scales (name, pattern, description, example) VALUES
('C Major', 'C-D-E-F-G-A-B', 'Natural major scale with no sharps or flats', 'Do-Re-Mi-Fa-Sol-La-Ti'),
('A Minor', 'A-B-C-D-E-F-G', 'Natural minor scale, relative to C major', 'La-Ti-Do-Re-Mi-Fa-Sol'),
('G Major', 'G-A-B-C-D-E-F#', 'Major scale with one sharp (F#)', 'Sol-La-Ti-Do-Re-Mi-Fa#'),
('D Major', 'D-E-F#-G-A-B-C#', 'Major scale with two sharps (F#, C#)', 'Re-Mi-Fi-Sol-La-Ti-Do#');

INSERT INTO theory (title, content, category) VALUES
('Circle of Fifths', 'The circle of fifths is a visual representation of key signatures and their relationships...', 'Theory'),
('Basic Chord Construction', 'Chords are built using intervals from scales...', 'Harmony'),
('Understanding Time Signatures', 'Time signatures tell us how to count time in music...', 'Rhythm'),
('What is the Circle of Fifths?', 'The Circle of Fifths is a visual representation of the 12 musical keys arranged in a circular layout.', 'Theory');