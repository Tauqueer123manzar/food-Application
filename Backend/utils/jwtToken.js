const GenerateToken = async (user, message, statusCode, res) => {
    const token = await user.generateToken();
    let cookieName = user.role === "User" ? "CustomerToken" : "AdminToken";

    res.status(statusCode)
        .cookie(cookieName, token, { httpOnly: true })
        .json({ success: true, message, token, role: user.role });
};

module.exports = GenerateToken;
