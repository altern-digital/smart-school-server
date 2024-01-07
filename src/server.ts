import { log } from "console";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 443;

app.listen(PORT, () => {
    log(`Server established on ${PORT}`);
});
