import { Flex, VStack } from '@chakra-ui/react';
import { PageContentLayout } from '../../common/layouts';
import WebcamCapture from '../../common/components/webcam-capture.component';

function ScreenPage(): JSX.Element {
  const width = ['365px', '400px', '450px', null, '512px'];

  return (
    <PageContentLayout
      mainContent={
        <Flex flexDirection="column" alignItems="center">
          <VStack id="registrationEl" w={width} display="flex">
            <WebcamCapture />
          </VStack>
        </Flex>
      }
    />
  );
}

export default ScreenPage;
