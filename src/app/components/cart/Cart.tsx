import CartProductCard from "./CartProductCard";


const Cart = () => {
  return (
    <div className="relative bg-lightGray h-[1466px] mx-auto w-full md:h-[1050px] lg:pl-[3rem] md:px-[2rem] lg:px-0 md:py-[2rem] py-4 px-6 user-cart">
        <h3 className="font-clash font-normal leading-[33.6px] text-[#2A254B]mb-4 my-4 text-2xl md:text-4xl ">Your shopping cart</h3>

        <div className="hidden lg:block md:m-[4rem]">
           <div className="flex relative md:top-[4.2rem] ">
           <p className="pl-[1rem] text-lg font-clash font-normal leading-[19.6px] text-[#2A254B]">Product</p>
            <p className="pl-[33rem] font-clash font-normal text-lg leading-[19.6px] text-[#2A254B] quantity-heading">Quantity</p>
            <p className="pl-[18rem] font-clash font-normal text-lg leading-[19.6px] text-[#2A254B]">Total</p>
           </div>
            <hr className="bg-[#F9F9F9] mt-[5rem]"/>
        </div>
     <div className="mt-12 user-item-cart">
     <CartProductCard image="Vase" heading="Graystone vase" para="A timeless ceramic vase with 
a tri color grey glaze." />
     </div>
  <div className="mt-20 ">
  <CartProductCard image="plant-pot" heading="Basic white vase" para="Beautiful and simple this is
one for the classics." />
  </div>



  <hr className="bg-white mt-16 w-full md:m-[4rem]"/>
  <div className="text-right h-[62px] mt-8 lg:pr-36 md:pr-[14rem] ">
    <p className="h-[34px] font-clash font-normal left-7 text text-[#4E4D93] text-right text-xl ">Subtotal <span className="text-">&#163; 425</span></p>
    <p className="font-satoshi font-normal leading-[21px] text-[#4E4D93] text-right  ">Taxes and shipping are calculated at checkout</p>
  </div>

  <button className="relative w-[342px] h-[56px] px-[32px] py-[16px] bg-[#2A254B] font-satoshi font-normal leading-[24px] text-white hover:bg-navbarColor mt-12 lg:w-[200px] lg:bottom-10 checkout-btn">
  Go to checkout
  </button>
    </div>
  );
};

export default Cart;