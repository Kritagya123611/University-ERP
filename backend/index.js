const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const zod = require('zod');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const { createClient } = require('@supabase/supabase-js');

const PORT = process.env.PORT || 3000;

const supabaseUrl = 'https://qnpvgfnqictrbloppgoo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFucHZnZm5xaWN0cmJsb3BwZ29vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwODc1MzgsImV4cCI6MjA2MDY2MzUzOH0.o8Wdhc0a4QYxVHv97yFcVtIL7VIsq1uzWXG1HwIBXaU';
const supabase = createClient(supabaseUrl, supabaseKey);

const validationSchema=zod.object({
    name: zod.string().min(1).max(255),
    email: zod.string().email(),
    password: zod.string().min(8).max(255),
    phone: zod.string().min(10).max(15),
    role: zod.enum(['student', 'faculty', 'admin']),

})
app.post("/", async (req, res) => {
    const { name, email, password, phone, role } = req.body;
    const validate = validationSchema.safeParse(req.body);
    if (validate.success === false) {
        console.log('Validation Error:', validate.error.format());
        return res.status(400).json({ error: validate.error.format() });
    }
    const { data: existingUser, error: fetchError } = await supabase
        .from("users")
        .select("*")
        .eq("email", email)
        .single();
    if (existingUser) {
        console.log('User already exists');
        return res.status(400).json({ error: "User already exists" });
    }
    const { data, error } = await supabase
        .from("users")
        .insert([{
            name, email, password, phone, role
        }]);

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    res.status(200).json({ message: "User created successfully" });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
