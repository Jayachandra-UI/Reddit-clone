
const express =  require("express");
const cors =  require("cors")
const dotenv = require("dotenv")
const loginRoutes = require("./routes/loginRoutes")
const database = require("./config/database")

dotenv.config()
const app = express();

//database connection status

database.connect();

// app.use(cors());
// app.use(cors({
//   origin: "https://v6x011vn-3000.inc1.devtunnels.ms/",  // or your React frontend URL
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

app.use(cors({
  origin: "*", // for testing; change later to your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));


app.use(express.json())

app.use("/api/v1/auth",loginRoutes);
// app.use("/api/v1/dashboard",dashboardRoutes);


app.get('/',(req,res)=>res.send("HRMS API is running"));

const PORT =  process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`server is running at ${PORT}`))