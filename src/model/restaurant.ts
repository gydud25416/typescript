// let data = {
//     name:'한식 식당',
//     category:'western',
//     address:{
//       city:'incheon',
//       detail:'somewhere',
//       zipCode:234234
//     },
//     menu:[{name:"rose pasta", price:2000, category:"PASTA"}, {name:"garlic steak", price:2000, category:"STEAK"}]
//   }

export type Restaurant = {
    name:string;
    category:string;
    address:Address;
    menu:Menu[];
}

export type Address = {
    city:string;
    detail:string;
    zipCode:Number;
}

export type Menu={
    name:string;
    price:number;
    category:string;
}