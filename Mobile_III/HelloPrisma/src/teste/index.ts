// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient()

// async function main() {
//    const user = await prisma.user.create({
//       data: {
//         name: 'Germano',
//         email: 'germanotischler@gmail.com',
//       },
//     })
//     console.log(user)

//    const getAll = await prisma.user.findMany()
//    console.log(getAll);
      
//    const createUserPost = await prisma.user.create({
//       data: {
//          name: 'Pablo',
//          email: 'Pablito@hotmail.com',
//          posts: {
//             create: {
//                title: 'Post do pablo',
//                content: 'Assunto do pablo,'
//             },
//          },
//       },
//    });
// }

// main()
//    .then(async () => {
//       await prisma.$disconnect()
//    })
//   .catch(async (e) => {
//       console.error(e)
//       await prisma.$disconnect()
//       process.exit(1)
//   })