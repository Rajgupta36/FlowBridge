import express from 'express';
import { Request, Response } from 'express';
import db from './prismaSingleton';

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
//https://hooks.zapier.com/hooks/catch/123456/abcdef
//password logic so that certain user can only hit this endpoint
//@ts-ignore
app.post('/hooks/catch/:userId/:zapId', async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const zapId = req.params.zapId;
  const body = req.body;
  //if(pass= Headerspassword){
  //  then continue otherwise failed
  //}
  await db.$transaction(async (tx) => {
    const run = await db.zapRun.create({
      data: {
        zapId: zapId,
        Metadata: body,
      },
    });
    await db.zapRunOutbox.create({
      data: {
        zapRunId: run.id,
      },
    });
  });
  return res.status(200).send('ok');
  //push into queue on redis or kafka
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
