/* 
    NAMPSPACES are spaces of code, these work like objects,
    but has differents uses and they are used for modular 
    programming.
    
    ARE MODULES OR SETS of Classes,Funtions,vars, etc
    ITS COMMON TO USE THEM IN MAKING FRAMEWORKS AND LIBRARIES
*/
namespace validations {
     export const validateText=(text:string){
        return (text.length > 3) ? true:false;
    }

     export const validateFecha =(fecha:Date) {
        return (isNaN(fecha.valueOf()) ? true:false;
    }
}
console.log(validations.validateText('SER'));
