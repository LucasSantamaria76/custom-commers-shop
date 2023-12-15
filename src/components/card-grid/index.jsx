import { Stack } from "rsuite";
import Card from "../card";

function CardGrid({ data = [] }) {
  return (
		<Stack wrap spacing={40} justifyContent='center'>
			{data ? data.map((item) => <Card key={item.id} {...item} />) : null}
		</Stack>
	);
}
export default CardGrid;
