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
('F Major', '1-1-3-3-2-1', 'Intermediate', 'F major barre chord');

INSERT INTO tabs (song_name, artist, tab_content, difficulty) VALUES
('Wonderwall', 'Oasis', 'Em7-G-D-C progression', 'Beginner'),
('Smoke on the Water', 'Deep Purple', '0-3-5-0-3-6-5-0-3-5-3-0', 'Beginner'),
('Stairway to Heaven', 'Led Zeppelin', 'Am-C-D-F-G progression', 'Intermediate');

INSERT INTO scales (name, pattern, description, example) VALUES
('C Major', 'C-D-E-F-G-A-B', 'Natural major scale with no sharps or flats', 'Do-Re-Mi-Fa-Sol-La-Ti'),
('A Minor', 'A-B-C-D-E-F-G', 'Natural minor scale, relative to C major', 'La-Ti-Do-Re-Mi-Fa-Sol'),
('G Major', 'G-A-B-C-D-E-F#', 'Major scale with one sharp (F#)', 'Sol-La-Ti-Do-Re-Mi-Fa#');

INSERT INTO theory (title, content, category) VALUES
('Circle of Fifths', 'The circle of fifths is a visual representation of key signatures and their relationships...', 'Theory'),
('Basic Chord Construction', 'Chords are built using intervals from scales...', 'Harmony'),
('Understanding Time Signatures', 'Time signatures tell us how to count time in music...', 'Rhythm');

INSERT INTO scales (name, pattern, description, example) VALUES
('D Major', 'D-E-F#-G-A-B-C#', 'Major scale with two sharps (F#, C#)', 'Re-Mi-Fi-Sol-La-Ti-Do#'),
('E Minor', 'E-F#-G-A-B-C-D', 'Natural minor scale, relative to G major', 'Mi-Fi-Sol-La-Ti-Do-Re'),
('B Minor', 'B-C#-D-E-F#-G-A', 'Natural minor scale, relative to D major', 'Ti-Do#-Re-Mi-Fi-Sol-La'),
('F Major', 'F-G-A-Bb-C-D-E', 'Major scale with one flat (Bb)', 'Fa-Sol-La-Te-Do-Re-Mi'),
('D Minor', 'D-E-F-G-A-Bb-C', 'Natural minor scale, relative to F major', 'Re-Mi-Fa-Sol-La-Te-Do'),
('E Major', 'E-F#-G#-A-B-C#-D#', 'Major scale with four sharps (F#, G#, C#, D#)', 'Mi-Fi-Sol#-La-Ti-Do#-Re#'),
('A Major', 'A-B-C#-D-E-F#-G#', 'Major scale with three sharps (F#, C#, G#)', 'La-Ti-Do#-Re-Mi-Fi#-Sol#'),
('F# Minor', 'F#-G#-A-B-C#-D-E', 'Natural minor scale, relative to A major', 'Fi#-Sol#-La-Si-Do#-Re-Mi');

INSERT INTO tabs (song_name, artist, tab_content, difficulty) VALUES
('Back in Black', 'AC/DC', 'E5 power chord riff with palm muting', 'Intermediate'),
('Sweet Child O\' Mine', 'Guns N\' Roses', 'Intro arpeggio riff with string skipping', 'Intermediate'),
('Highway to Hell', 'AC/DC', 'Open power chord progression with steady rhythm', 'Beginner'),
('Enter Sandman', 'Metallica', 'Main riff with sliding power chords and open strings', 'Intermediate'),
('Blackbird', 'The Beatles', 'Fingerpicking pattern combining fretted and open strings', 'Advanced'),
('Nothing Else Matters', 'Metallica', 'Fingerpicked intro with arpeggiated chords', 'Intermediate'),
('Sunshine of Your Love', 'Cream', 'Iconic riff based on a blues scale', 'Beginner'),
('Seven Nation Army', 'The White Stripes', 'Simple riff using octave power chords', 'Beginner');

INSERT INTO chords (name, diagram, difficulty, description) VALUES
('D Major', 'x-x-0-2-3-2', 'Beginner', 'Open D major chord'),
('E Major', '0-2-2-1-0-0', 'Beginner', 'Open E major chord'),
('Dm', 'x-x-0-2-3-1', 'Beginner', 'Open D minor chord'),
('E Minor', '0-2-2-0-0-0', 'Beginner', 'Open E minor chord'),
('B7', 'x-2-1-2-0-2', 'Intermediate', 'Basic B7 open chord'),
('A Major', 'x-0-2-2-2-0', 'Beginner', 'Open A major chord'),
('Bm', 'x-2-4-4-3-2', 'Intermediate', 'Barre B minor chord'),
('C7', 'x-3-2-3-1-0', 'Intermediate', 'C dominant 7 chord for blues'),
('Cadd9', 'x-3-2-0-3-3', 'Intermediate', 'C major chord with added 9th for a richer sound'),
('G7', '3-2-0-0-0-1', 'Intermediate', 'G dominant 7 chord used in blues and jazz'),
('D7', 'x-x-0-2-1-2', 'Intermediate', 'D dominant 7 chord, adds tension for resolution'),
('Am7', 'x-0-2-0-1-0', 'Beginner', 'A minor 7 chord, softer sound for accompaniment'),
('Em7', '0-2-0-0-0-0', 'Beginner', 'E minor 7 chord, used for smooth chord progressions'),
('Fmaj7', '1-3-3-2-1-0', 'Intermediate', 'F major 7 chord for a jazzy sound');

INSERT INTO theory (title, content, category) VALUES
('What is the Circle of Fifths?', 'The Circle of Fifths is a visual representation of the 12 musical keys arranged in a circular layout.', 'Theory'),
('Fifths Explained', 'Each step clockwise on the circle represents a perfect fifth interval between notes or keys.', 'Theory'),
('Sharps and Flats', 'As you move clockwise around the circle, each key adds one sharp to its key signature.', 'Theory'),
('Flats on the Circle', 'Moving counterclockwise adds one flat to each key signature per step.', 'Theory'),
('Key Relationships', 'The Circle of Fifths helps musicians understand relationships between major and minor keys.', 'Theory'),
('Chord Progressions', 'It is useful for composing chord progressions by showing closely related keys and chords.', 'Theory'),
('Modulation Use', 'Musicians use the Circle of Fifths to modulate smoothly between keys in compositions.', 'Theory'),
('Practical Tip', 'The circle is often drawn as a clock face where C is at the top, G to the right, and F to the left.', 'Theory'),
('Common Chord Progression', 'One of the most common chord progressions is I-IV-V-I, which uses the first, fourth, and fifth degrees of a scale.', 'Theory'),
('Whole-Half Rule', 'The Whole-Half Rule describes the pattern of whole steps and half steps in major and minor scales. A whole step equals two semitones, and a half step equals one semitone.', 'Theory');
