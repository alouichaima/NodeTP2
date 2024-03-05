const mongoose = require ('mongoose')
const bycrypt = require ('bcrypt.js')
const userSchema = new mongoose.Schema({
username:{type:String,unique:true},
 password:String})
userSchema.pre('save',async function(next){
const user = this;
if(user.isModified('password')){
user.password = await bcrypt.hash(user.password,10)}
next();
})
User=mongoose.model('User',userSchema)
module.exports=User;

