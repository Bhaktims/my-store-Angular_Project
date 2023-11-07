// here we hv to give default value to each key and if we used ?: symbol then all fields get optional
// using class 
// export class Product{
//     id : number = 0;
//     image : string = " ";
//     name : string = " ";
//     price : number = 0;
//     cat : string = " ";
//     desc ?: string = " ";
// }


// using interface - in interface no need to give default value

export interface Product{
    id : number;
    image : string ;
    name : string ;
    price : number
    cat : string ;
    desc ?: string ;
    publishedDate : string;
    code : string,
    discount:number
}
