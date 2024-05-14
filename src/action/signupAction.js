"use server";

import {registerService} from "@/service/register.service";

export default async function signupAction(currentState) {
    const newUser = {
        firstname: currentState.firstname,
        lastname: currentState.lastname,
        gender: currentState.gender,
        email: currentState.email,
        password: currentState.password
    };
    await registerService(newUser);
}