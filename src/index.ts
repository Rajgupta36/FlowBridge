import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
//https://hooks.zapier.com/hooks/catch/123456/abcdef
//password logic so that certain user can only hit this endpoint
app.post('/hooks/catch/:userId/:zapId', (req, res) => {
    const userId = req.params.userId;
    const zapId = req.params.zapId;

    //if(pass= Headerspassword){
    //  then continue otherwise failed
    //}

    //store in db a new trigger

    //push into queue on redis or kafka

});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});