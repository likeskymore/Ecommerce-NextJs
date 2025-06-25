import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";
const Homepage = () => {
  return (<>
  <ProductList data={sampleData.products} title="Newest Arrivals"/></>);
}

export default Homepage;