var app = new Vue({
    el:'#app',
    data:{
        brand:'Vue Mastery',
        product:'Socks',
        //image:'vmSocks-green.jpg',
        selectedVariant:0,
        inventory:5,
        // inStock:0,
        details:[
          {
            detail:"80% cotton" 
         },
         {
            detail:"20% polyester" 
         },
         {
            detail:"Gender-neutral" 
         }
     ],
     variants:[
          {
              variantId:2234,
            variantColor:"green",
            variantImage:"vmSocks-green.jpg",
            variantQuantity:5
         },
         {
            variantId:2235,
            variantColor:"blue", 
            variantImage:'vmSocks-blue.jpg',
             variantQuantity:0
         }
     ],
     cart:0
    },
    methods:{
        addToCart: function(){
            if (this.inventory>0){
                this.cart +=1;
                this.inventory-=1;
            }

        },
        removeFromCart:function(){
            if (this.cart > 0){
                this.cart-=1;
                this.inventory+=1;
            }
        },
        // ES6 shorthand for anonymous function
        updateProduct(index){
            this.selectedVariant = index
            //console.log(index)
        },
    },
    /*
    dfd
    * Computed properties are used just like a value
    * computed values are cached to avoid repetitively calculating a value
     when values are not changed, we don;t need to re run everytime to access it
    */
    computed:{
        title(){
            // `this` points to the vm instance
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
          //  console.log(this.variants[this.selectedVariant].variantQuantity)
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})
