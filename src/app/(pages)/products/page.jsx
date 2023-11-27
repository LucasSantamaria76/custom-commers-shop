import { getDbTable } from "@/actions";
import CardGrid from "@/components/card-grid";
import { PRODUCTS } from "@/constants";
import { Container } from "rsuite";

async function pageProducts() {
  const { data: products, error } = await getDbTable(PRODUCTS);
  return (
    <Container className='w-4/5 py-10 mx-auto overflow-hidden'>
      <CardGrid data={products} />
    </Container>
  );
}
export default pageProducts;