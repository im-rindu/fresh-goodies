import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

interface CardProps {
  price: number;
  name: string;
  weight: number;
  imageUrl: string;
}

const CardComponent = ({ price, name, weight, imageUrl }: CardProps) => (
  <Card maxW="sm" borderRadius="lg" bg={"#F9F8F6"}>
    <CardBody>
      <Image
        src={imageUrl}
        alt="Green double couch with wooden legs"
        borderRadius="lg"
        className="mix-blend-multiply	"
      />
      <Stack spacing={0}>
        <Heading size="lg">{price}$</Heading>
        <Text>{name}</Text>
      </Stack>
    </CardBody>
    <CardFooter pt={0} className="flex justify-between items-center">
      <Text>1 kg</Text>
      <Button
        borderRadius={"full"}
        border={"1px"}
        opacity={0.5}
        p={0}
        bg={"transparent"}
      >
        +
      </Button>
    </CardFooter>
  </Card>
);

export default CardComponent;
