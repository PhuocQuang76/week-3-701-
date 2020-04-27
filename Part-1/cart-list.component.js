angular.module("myCart")
    .component('cartList',{
        templateUrl:'cart-list/cart-list.template.html',
        controller:function CartControler(){
            this.books = [];
            let cart = JSON.parse(window.localStorage.getItem("lastName_cart"));
            if (cart != null) {
                for(let item of cart){
                    let getItem = {
                        "title":item.title,
                        "qty":item.qty,
                        "price": item.price
                    };

                    this.books.push(getItem);
                }
            }

            else{
                this.books = [
                    {
                        title: 'Absolute Java',
                        qty: 1,
                        price: 114.95,
                    },
                    {
                        title: 'Pro HTML5',
                        qty: 1,
                        price: 27.95,
                    },
                    {
                        title: 'Head First HTML5',
                        qty: 1,
                        price: 27.89,
                    }
                ];
            }

            this.removeBook = function(index){
                this.books.splice(index,1);
            };

            this.addBook = function(){
                let newBook = {
                    title : 'New Book',
                    qty: 1,
                    price: 10.99,
                };
                this.books.push(newBook)
            };

            this.save = function() {
                window.localStorage.setItem("lastName_cart", JSON.stringify(this.books));
            };

            this.getTotal = function(){
               this.total = 0;
               for(let book in this.books){
                   if (this.books.hasOwnProperty(book)) {
                       this.total += this.books[book].price * this.books[book].qty;
                   }
               }
               return this.total;
            };

        }

    });
