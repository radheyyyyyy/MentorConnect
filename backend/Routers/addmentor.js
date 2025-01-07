const express = require('express');
const { authMiddleware } = require("../Middlewares/authMiddleware");
const z = require('zod');
const prisma = require("../database/postgres"); // Assuming this exports the Prisma client instance

const addMentorRouter = express.Router();

const addMentorSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email(),
    experience: z.number().max(99),
    skills: z.string().min(2),
    contact: z.number(),
    currentJob: z.string().optional(),
    companyName: z.string().optional(),
    Bio: z.string().max(250),
});

addMentorRouter.post("/", authMiddleware, async (req, res) => {
    const response = req.body;

    // Validate input
    const parseResult = addMentorSchema.safeParse(response);
    if (!parseResult.success) {
        return res.json({ msg: "invalid_inputs" });
    }

    try {

        await prisma.prisma.mentors.create({
            data: {
                name: response.name,
                emailId: response.email,
                experience: response.experience,
                skills: response.skills,
                contact: parseInt(response.contact),
                currentJob: response.currentJob,
                companyName: response.companyName,
                Bio: response.Bio,
            },
        });
        res.json({ msg: "success" });
    } catch (e) {
        console.error(e);
        res.json({ msg: "Internal server error", error: e.message });
    }
});

module.exports = {
    addMentorRouter,
};
