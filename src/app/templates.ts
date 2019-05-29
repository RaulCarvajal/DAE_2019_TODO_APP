export interface res{
    "code":number,
    "detail":any
}
export interface resArray{
    "code":number,
    "detail":any[]
}
export interface tarea{
    "_id" : String
    "name" :  String,
    "description" : String, 
    "done" : Boolean,
    "date" : String  
}