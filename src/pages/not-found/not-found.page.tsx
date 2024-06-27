import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { PageContentLayout } from '../../common/layouts';

function NotFoundPage(): JSX.Element {
  const width = ['365px', '400px', '450px', null, '512px'];
  const { t } = useTranslation('common');

  return (
    <PageContentLayout
      mainContent={
        <Flex flexDirection="column" alignItems="center">
          <VStack id="registrationEl" w={width} display="flex">
            <Heading color="white">Ooops! 404 Not Found</Heading>
            <Button as={Link} to="/" mt={4}>
              {t('GoHome')}
            </Button>
          </VStack>
        </Flex>
      }
    />
  );
}

export default NotFoundPage;
