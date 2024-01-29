import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import bcrypt from 'bcrypt'

export async function POST(req: Request) {
    const { name, email, password } = await req.json();
    console.log(name, email, password)
    if (!name || !email || !password) {
        return NextResponse.json({ message: "Invalid Credentials" })
    }
    try {
        await prisma.$connect()
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })

        if (user) {
            return NextResponse.json({ message: "User already exists." })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const response = await prisma.user.create({
            data: {
                name: name,
                email: email,
                hashedPassword: hashedPassword
            }
        })
        return NextResponse.json(response, {status: 201})
    } catch (error) {

    } finally {
        await prisma.$disconnect()
    }
}