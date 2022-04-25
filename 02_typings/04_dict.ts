// typescript has a 'dictionary' type
{
   interface Celaphopod {
       hasink:boolean
       arms:number
       tentacles:number
   } 

   interface CelaphopodDict {
       [species:string]:Celaphopod
   }

   enum en {vulgaris='Vulgaris', loligo='Loligo'} // here we use strings for the enum members
   let t:string = 'octocreature'

   // populate our dictionary
   const dict:CelaphopodDict = {} // an empty object
   dict[en.vulgaris] = {hasink:true, arms:8, tentacles:0}
   dict[en['loligo']] = {hasink:true, arms:8, tentacles:2}
   dict[t] = {hasink:false, arms:9, tentacles:9999}

   console.log(dict)




}