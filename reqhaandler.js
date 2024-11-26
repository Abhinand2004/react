
import person from './Models/persondata.js'



export async function addData(req, res) {
    console.log(req.body);
    const { ...data } = req.body
    await person.create({ ...data }).then(() => {
        res.status(201).send({ msg: "Successfull" })
    }).catch((error) => {
        res.status(404).send({ error: error })
    })

}




export async function display(req, res) {
    const data = await person.find();
    console.log(data);
    res.status(200).send({data}); 
}



export async function del(req, res) {
    console.log(req.params); 
    const { id } = req.params;  
    const data = await person.deleteOne({ _id: id })
        .then(() => {
            res.status(201).send({ msg: "Deleted" });
        })
        .catch((error) => {
            res.status(500).send({ error });
        });
}




export async function update(req,res) {
    console.log(req.params);
    console.log(req.body);
    const {...data}=req.body
    await person.updateOne({_id:req.params.id},{$set:{...data}}).then(()=>{
        res.status(201).send({msg:"updated"})
    }).catch((error)=>{
        res.status(500).send({error:error})
        
    })
    
    
    
}