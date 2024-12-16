import userSchema from "./models/atlascheck.js"

export async function adddata(req,res) {
  console.log(req.body);
  
 const  {username,email}=req.body

if (!(username && email)) {
  return res.status(500).send({msg:"data didint find"})
 }
  userSchema.create({username,email})
  console.log("success");
  
  res.status(200).send({msg:"successfull"})
 
}

export async function getdata(req,res) {

  const data=await userSchema.find()
  if (!data) {
    return res.status(500).send({mas:"data dont find"})
  }
  return res.status(200).send({data})
  
}


export async function deletedata(req,res) {
  const {id}=req.params
  

  const del=await userSchema.deleteOne({_id:id})
  if (!del) {
    res.status(500).send({msg:"not deleted"})
  }
  res.status(200).send({msg:"success"})
  
}