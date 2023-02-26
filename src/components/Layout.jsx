import useWindowWidth from "../hooks/useWindowWidth";

export default function Layout() {
  const width = useWindowWidth();
  const responsive = width < 770;
  console.log(responsive);
  return (
    <div className="container-main flex bg-[var(--white)] rounded-xl min-h-[400px] max-h-[400px] h-[50vh] max-w-[600px] min-w-[600px] ">
      <div className="content-image w-1/2 h-full ">
        {responsive ? (
          <img
            alt="product"
            className="product-image-mobile h-full w-full"
            src={require("../images/image-product-mobile.jpg")}
          ></img>
        ) : (
          <img
            alt="product"
            className="product-image-desktop h-full w-full rounded-l-xl"
            src={require("../images/image-product-desktop.jpg")}
          ></img>
        )}
      </div>
      <div className="content-description w-1/2 h-full flex flex-col gap-y-5 p-4">
        <h4 className="text-[var(--dark-grayish-blue)] text-xs tracking-[5px]">
          PERFUME
        </h4>
        <h3 className="font-family-fraunces text-2xl pr-24 leading-7">
          Gabrielle Essence Eau De Parfum
        </h3>
        <p className="text-sm text-[var(--dark-grayish-blue)]">
          A floral, solar and voluptupus inerpretation composed by Olivier
          Polge, Perfumer-Creator for the house of CHANEL.
        </p>
        <div className="content-description-price flex flex-row items-center gap-x-5">
          <h1 className="text-2xl font-family-fraunces text-[var(--dark-cyan)]">
            $149.99
          </h1>
          <span className="text-sm line-through text-[var(--dark-grayish-blue)]">
            $169.99
          </span>
        </div>
        <button className="cart-button bg-[var(--dark-cyan)] transition-all mt-5 duration-300 hover:bg-[var(--very-dark-blue)] text-[var(--white)] p-3 rounded-lg flex flex-row items-center justify-center gap-x-5">
          <img
            alt="icon cart"
            src={require("../images/icon-cart.svg").default}
          ></img>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
