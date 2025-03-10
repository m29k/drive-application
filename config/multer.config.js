const multer = require('multer');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Initialize Supabase Client
const supabase = createClient(
    process.env.SUPABASE_URL, 
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

// Configure Multer to Store File in Memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Function to Upload File to Supabase
async function uploadToSupabase(file) {
    const fileName = `${Date.now()}-${file.originalname}`;

    const { data, error } = await supabase.storage
        .from('drive-29') // Replace with your Supabase Storage bucket name
        .upload(fileName, file.buffer, {
            contentType: file.mimetype
        });

    if (error) throw error;
    return data.path; // Return the file path
}

// Export Upload Middleware and Function
module.exports = { upload, uploadToSupabase };