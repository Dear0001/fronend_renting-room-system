export const otpService = {
    generateOtp,
    verifyOtp
};

async function generateOtp(email) {
    const response = await fetch('/api/otp/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    });
    return await response.json();
}

async function verifyOtp(otp, email) {
    const response = await fetch('/api/otp/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, email })
    });
    return await response.json();
}