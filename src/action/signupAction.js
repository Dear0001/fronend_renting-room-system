"use server";

import { registerService } from "@/service/authService";

export default async function signupAction(currentState) {
    const newUser = {
        firstName: currentState.firstname,
        lastName: currentState.lastname,
        email: currentState.email,
        password: currentState.password
    };

    try {
        const response = await registerService(newUser);

        if (response.code === 201) {
            console.log("Registration successful");
            console.log("Data registered:", newUser);
            return true;
        } else {
            console.log("Registration failed:", response.message || "Unknown error");
            return false;
        }
    } catch (error) {
        return false;
    }
}