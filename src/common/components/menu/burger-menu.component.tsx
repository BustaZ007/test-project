import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { List } from 'phosphor-react';
import SelectLanguage from '../select-language.component';

function BurgerMenu(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w="full"
      height="60px"
      boxSizing="border-box"
      bg="bgPrimary.100"
      borderBottomWidth="1px"
      borderColor="border.100"
      align="center"
      justifyContent="space-between"
      p={4}
    >
      <IconButton
        onClick={onOpen}
        aria-label="burger-menu"
        icon={<Icon as={List} boxSize={8} />}
        bg="bgPrimary.100"
        color="textPrimary.100"
        _hover={{
          cursor: 'point',
        }}
      />

      <Drawer placement="right" isOpen={isOpen} onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent bg="bgPrimary.100">
          <DrawerCloseButton size="lg" color="white" />
          <DrawerHeader>
            <SelectLanguage />
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default BurgerMenu;
