import imageMobile from "../../assets/image-product-mobile.jpg";
import ImageDesktop from "../../assets/image-product-desktop.jpg";
import cartIcon from "../../assets/icon-cart.svg";

export const ProductCard = () => {
  const validateScreenWidth = () => {
    const { innerWidth: width } = window;
    console.log(width)

    return width >= 1024 ? (
      <img
        src={ImageDesktop}
        alt="Imagem de um perfume"
        className="w-1/2 h-full rounded-l-lg"
      />
    ) : (
      <img
        src={imageMobile}
        alt="Imagem de um perfume"
        className="w-full md:h-2/5 rounded-t-lg"
      />
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-11/12 sm:w-2/3 md:w-1/2 h-5/6 bg-white rounded-lg">
      {validateScreenWidth()}
      <div className="flex flex-col p-5 lg:p-7 md:p-4 lg:w-1/2 lg:h-full">
        <span className="font-montserrat text-dark-grayish-blue text-sm sm:text-base md:text-[14px] mb-2">P E R F U M E</span>
        <h1 className="text-very-dark-blue font-fraunces font-semibold text-3xl sm:text-4xl mb-4">Gabrielle Essence Eau De Parfum</h1>
        <p className="font-montserrat text-dark-grayish-blue text-base md:text-[14px] mb-8 md:mb-4">A floral, solar anf voluptuous interpretation composed by Ilivier Polge, Perfumer-Creator for the House of CHANEL.</p>
        <div className="flex items-center gap-6 mb-4 sm:mb-6 md:mb-4">
          <h2 className="text-4xl sm:text-4xl font-bold font-fraunces text-dark-cyan">$149.99</h2>
          <span className="text-xs sm:text-sm line-through font-montserrat text-dark-grayish-blue">$169.99</span>
        </div>
        <button className="h-12 sm:h-14 md:h-12 flex items-center justify-center gap-2 cursor-pointer rounded-md bg-dark-cyan">
          <img src={cartIcon} alt="Icone de um carrinho de super mercado" />
          <p className='text-sm sm:text-base font-semibold text-white font-montserrat'>Add to cart</p>
        </button>
      </div>
    </div>
  );
}