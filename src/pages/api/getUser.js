import prisma from '../../../lib/prisma';


export default async function handle(req, res) {
    const queryParam = Object.keys(req.query); 
    // console.log('query', req)
    // console.log('queryParam', queryParam)
    const user = await prisma.user.findUnique({
      where: {
        userName: `${queryParam}`,
      },
    })
    res.json(user)
  }