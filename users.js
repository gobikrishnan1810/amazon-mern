import bcrypt from "bcryptjs"

export const users =[
    {
        name: "krish",
        email: "krish@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: true,
    },
    {
        name: "gobi",
        email: "gobi67@gmail.com",
        password: bcrypt.hashSync('1234',8),
        isAdmin: false,
    },
]