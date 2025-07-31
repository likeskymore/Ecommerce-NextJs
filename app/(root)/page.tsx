import {
  getLatestProducts,
  getFeaturedProducts,
} from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/products/product-list";
import ProductCarousel from "@/components/shared/products/product-carousel";
import ViewAllProductButton from "@/components/view-all-products-button";
import IconBoxes from "@/components/icon-boxes";
import DealCountdown from "@/components/deal-countdown";
const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();
  return (
    <>
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
      <ViewAllProductButton/>
      <DealCountdown/>
      <IconBoxes/>
    </>
  );
};

export default Homepage;