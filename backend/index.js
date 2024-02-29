const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");
const port = 3000;
const app = express();

app.use(cors());
app.use(express.json()); //adding body-parser

app.use("api/v1", rootRouter);
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
})


