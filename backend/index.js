const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const zod = require('zod');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const { createClient } = require('@supabase/supabase-js');

const port = process.env.PORT || 3000;


const supabaseUrl = 'https://qnpvgfnqictrbloppgoo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFucHZnZm5xaWN0cmJsb3BwZ29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwODc1MzgsImV4cCI6MjA2MDY2MzUzOH0.o8Wdhc0a4QYxVHv97yFcVtIL7VIsq1uzWXG1HwIBXaU';
const supabase = createClient(supabaseUrl, supabaseKey);


// Route to handle user signup
app.post("/signup", async (req, res) => {
    const { name, email, password, phone, role } = req.body;
    console.log('Request body:', req.body);

    // Validate input data
    if (!name || !email || !password || !phone || !role) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the email already exists
    const { data: existingUser, error: fetchError } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .maybeSingle();

    if (existingUser) {
        console.log('User already exists');
        return res.status(400).json({ error: "User already exists" });
    }

    // Insert the new user into the database
    const { data, error } = await supabase
        .from("users")
        .insert([{ name, email, password, phone, role }])
        .select();  // Add `.select()` to get the inserted user details

    // Check if insert was successful
    if (error) {
        console.log('Error inserting user:', error.message);
        return res.status(500).json({ error: error.message });
    }

    // Check if data is valid
    if (!data || data.length === 0) {
        console.log('Error: User data not returned');
        return res.status(500).json({ error: 'Error: User data not returned' });
    }

    // Return the created user data in the response
    res.status(200).json({ message: "User created successfully", user: data[0] });
});

 
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      // Your backend logic here
      const { data: existingUser, error: fetchError } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();
  
      if (existingUser) {
        console.log("Login successful");
        res.status(200).json({ message: "Login successful" });
      } else {
        console.log("Login failed: User not found");
        res.status(400).json({ error: "Login failed: User not found" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  });
  

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
