import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  editProductID: any;
  addFlag: boolean = false;
  currentProducts: any = [];
  trashProducts : any =[];
  productSelected: any;
  productList: any = [
    {
      id: '101',
      title: 'Mask',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
   
      url: 'assets/images/prd1.png',
      price: 50,
      rating: 3,
      status: 'In-stock',
      like: 0
    },
    {
      id: '102',
      title: 'Himalaya Shampoo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      
      url: 'assets/images/rcprd1.png',
      price: 200,
      rating: 5,
      status: 'In-stock',
      like: 0
    },
    {
      id: '103',
      title: 'Dabur',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      
      url: 'assets/images/rcprd2.png',
      price: 300,
      rating: 4,
      status: 'In-stock',
      like: 0
    },
    {
      id: '104',
      title: 'Hands Sanitizer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      
      url: 'assets/images/rcprd3.png',
      price: 150,
      rating: 3,
      status: 'In-stock',
      like: 0
    },
    {
      id: '105',
      title: 'Glow',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      
      url: 'assets/images/prd3.png',
      price: 100,
      rating: 3,
      status: 'In-stock',
      like: 0
    },
    {
      id: '106',
      title: 'Tresemme Shampoo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      
      url: 'assets/images/shampoo1.jfif',
      price: 100,
      rating: 3,
      status: 'In-stock',
      like: 0
    },
    {
      id: '107',
      title: 'Shoe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      
      url: 'assets/images/shoe1.jfif',
      price: 100,
      rating: 3,
      status: 'In-stock',
      like: 0
    },
    {
      id: '108',
      title: 'White shoes',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
     
      url: 'assets/images/shoe2.jfif',
      price: 100,
      rating: 3,
      status: 'Out-stock',
      like: 0
    },
  ]
  constructor() { 
    this.currentProducts = this.productList;
    
  }
}
