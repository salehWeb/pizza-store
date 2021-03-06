import prisma from '../../../libs/prisma/prisma';
import jwt from 'jsonwebtoken';
import { genSaltSync, hashSync } from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from 'cookies-next';

interface ISingUp {
    firstName: string
    lastName: string
    email: string
    password: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const { email, firstName, lastName, password } = req.body as ISingUp;
    const user = await prisma.user.findUnique({ where: { email: email } })
    try {

        if (!user) {
            if (password && firstName && lastName && email) {
                const salt = genSaltSync(10);
                const hashPassword = hashSync(password, salt)
                const newUser = await prisma.user.create({
                    data: {
                        name: `${firstName} ${lastName}`,
                        email,
                        password: hashPassword
                    }
                })

                const token = jwt.sign({ id: newUser.id, }, process.env.JWT_SECRET as string, { expiresIn: '2h' })

                setCookie("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: "strict",
                    maxAge: 1000 * 60 * 60 * 2,
                    expires: new Date(Date.now() + 1000 * 60 * 60 * 2),
                    path: "/",
                    req,
                    res
                })

                return res.status(200).json({ newUser, massage: "sing up success" })
            }
            else return res.status(400).json({ error: 'you must fill all fields' })
        }
        else return res.status(400).json({ error: "user already exist try login" })
    } catch (error) {
        console.log(error)
    }
}


export default handler;