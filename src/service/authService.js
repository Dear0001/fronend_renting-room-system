"use server"

export const registerService = async (req) => {
    const res = await fetch(`http://35.240.247.119:8080/api/v1/auths/local-register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(req)
    });

    const register = await res.json();
    console.log("Server response:", register);
    return register;
};

export const loginService = async (userInfo) => {
    try {
        const response = await fetch('http://35.240.247.119:8080/api/v1/auths/local-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in loginService:', error);
        throw error;
    }
};


// send otp service
export const sendOTP = async (email) => {
    try {
        const response = await fetch(`http://35.240.247.119:8080/api/v1/auths/send-email?email=${email}`, {
            method: 'POST',
        });

        if (!response.ok) {
            throw new Error('This email is not found. Please try again.');
        }

        const data = await response.json();
        return { success: true, message: 'OTP sent successfully. Please check your email.', data };
    } catch (err) {
        return { success: false, message: err.message };
    }
};

// verify otp service
export const verifyOTP = async (otp) => {
    try {
        const response = await fetch(`http://35.240.247.119:8080/api/v1/auths/verify?otp=${otp}`, {
            method: 'PUT',
        });

        if (!response.ok) {
            throw new Error('Invalid OTP code. Please try again.');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        return { success: false, message: err.message };
    }
};

// forget password service
export const forgetPassword = async (email, otpCode, newPassword, confirmPassword) => {
    try {
        const response = await fetch(`http://35.240.247.119:8080/api/v1/auths/change-password?email=${email}&otpCode=${otpCode}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: newPassword,
                confirmPassword: confirmPassword
            })
        });
        console.log(response)
        if (!response.ok) {
            console.log(response)
            throw new Error('Invalid OTP code. Please try again.');
        }

        const data = await response.json();
        return data;
    } catch (err) {
        return { success: false, message: err.message };
    }
};


// Login with Google service
export const loginWithGoogle = async (userInfo) => {
    console.log("data from service", userInfo);
    try {
        console.log(userInfo, "data");
        const response = await fetch(
            `http://35.240.247.119:8080/api/v1/auths/google-auth`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
            }
        );

        if (!response.ok) {
            console.log(response, "response");
            throw new Error("Invalid");
        }
        return await response.json();
    } catch (error) {
        console.error(
            "Error during sign up:",
            error.message
        );
        return { success: false, message: error.message };
    }
};


