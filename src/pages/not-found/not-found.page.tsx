import { Flex, Heading, VStack } from '@chakra-ui/react';
import { PageContentLayout } from '../../common/layouts';

function NotFoundPage(): JSX.Element {
  const width = ['365px', '400px', '450px', null, '512px'];

  return (
    <PageContentLayout
      mainContent={
        <Flex flexDirection="column" alignItems="center">
          <VStack id="registrationEl" w={width} display="flex">
            <Heading color="white">Ooops! 404 Not Found</Heading>
          </VStack>
        </Flex>
      }
    />
  );
}

export default NotFoundPage;
