// import express from "express";
// import { Client } from "pg";

// const app = express();
// app.use(express.json()); // for request body parsing

// // PostgreSQL Client Configuration
// const pgClient = new Client({
//   connectionString: 'postgresql://neondb_owner:npg_gFOCcID2uY8e@ep-twilight-cloud-adk7gb80-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require',
// });

// // Connect to PostgreSQL
// async function connectDB() {
//   try {
//     await pgClient.connect();
//     console.log(" Connected to PostgreSQL database");
//   } catch (err) {
//     console.error(" Database connection error:", err);
//   }
// }

// connectDB();


// // Sign up endpoint
// app.post("/signup", async (req, res) => {
//   const { username, email, password } = req.body;

//   // Input validation
//   if (!username || !email || !password) {
//     return res.status(400).json({
//       error: "Missing required fields",
//       message: "Username, email, and password are required"
//     });
//   }

//   try {
//     // Insert new user
//     const insertQuery = `
//       INSERT INTO users (email, password, username) VALUES ($1, $2, $3) RETURNING id, email, username, created_at;`;

//     const response = await pgClient.query(insertQuery, [email, password, username]);
//     const newUser = response.rows[0];

//     res.status(201).json({
//       success: true,
//       message: "Sign up successful!",
//       user: {
//         id: newUser.id,
//         email: newUser.email,
//         username: newUser.username,
//         created_at: newUser.created_at
//       }
//     });
//   } catch (err: any) {
//     console.error("Error during sign up:", err);
//   }
// });


// // Start server
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });