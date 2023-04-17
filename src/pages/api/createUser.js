import prisma from '../../../lib/prisma';


export default async function handle(req, res) {
    // const queryParam = Object.keys(req.query); 
    const checkForUnique = await prisma.user.findUnique({
        where: {
          email: '2d2dsfd34@prisma.io'
        },
      })

    console.log('check for unique', checkForUnique)
      try {
        if (checkForUnique === null) {
            const user = await prisma.user.create({
                data: {
                  email: '2d2dsfd34@prisma.io',
                  userName: 'asdfasdf',
                },
              })
            res.json(user)
            } 
      } catch (e) {

          // The .code property can be accessed in a type-safe manner
          if (e.code === 'P2002') {
            console.log(
              'There is a unique constraint violation, a new user cannot be created with this email'
            )
          }
        
        throw e
      }
      res.send('nada')
  }

