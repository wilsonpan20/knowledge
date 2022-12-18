module.exports = middleware =>{
    return (req,res,next)=>{
        if(req.user.admin){
            middleware(req,res,next)
        }else{
            req.status(401).send('Usuario não é administrador.')
        }
    }
}