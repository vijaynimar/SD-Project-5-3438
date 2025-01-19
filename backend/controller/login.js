import { user } from "../model/user.js";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import "dotenv/config";

export const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {  
        const User = await user.findOne({email });
        if (!User) {
            return res.status(404).json({ message: "User needs to sign up first" });
        }
        console.log(User.password);
        const verifies = await argon2.verify(User.password, password);
        if (verifies) {
            const token = jwt.sign(
                { email: email, id: User._id },
                process.env.jwt_key,
                { expiresIn: '1day' }
            );
            
            return res.status(200).json({ message: "Logged in successfully", token: token });
        }
        
        return res.status(401).json({ message: "Password does not match" });
        
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ message: "Internal server error", error: err.message });
    }
};
