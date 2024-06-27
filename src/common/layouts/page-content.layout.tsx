import { Box, Center, Flex, Hide, Show, HStack } from '@chakra-ui/react';
import SelectLanguage from '../components/select-language.component';
import BurgerMenu from '../components/menu/burger-menu.component';

type TPageContentLayout = {
  mainContent: JSX.Element;
};

function PageContentLayout({ mainContent }: TPageContentLayout): JSX.Element {
  return (
    <Flex
      w="full"
      h="full"
      direction="column"
      overflowY="scroll"
      p={4}
      flexGrow={1}
    >
      <Show below="lg">
        <Box h="max-content">
          <BurgerMenu />
        </Box>
      </Show>
      <Hide below="lg">
        <HStack justifyContent="space-between" alignItems="start">
          <SelectLanguage />
        </HStack>
      </Hide>

      <Center w="full" p={4} position="relative" flexGrow={1}>
        {mainContent}
      </Center>
    </Flex>
  );
}

export default PageContentLayout;
