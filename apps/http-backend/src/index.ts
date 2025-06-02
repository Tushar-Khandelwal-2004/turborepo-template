import express from "express";
import { JWT_SECRET } from "@repo/backend-common/config"
import {CreateUserSchema} from "@repo/common/types"
const app=express();

app.post("/signup",(req,res)=>{
    const data=CreateUserSchema.safeParse(req.body);
    if(!data.success){
        res.json({
            message:"Incorrect Inputs"
        });
        return;
    }
    res.json({
        message:"successful"
    })
    return;
})

app.listen(3001);