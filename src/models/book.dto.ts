export interface BookDto{
    
    title:string,
    category:string,
    logoImage:string,
    price:number,
    author:string,
    author_id:string,
    publisher:string,
    publishedDate:string,
    active:boolean,
    content:string,
    subscription:boolean,
    id?:number
}