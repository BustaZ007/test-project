import {
  Popover,
  PopoverTrigger,
  Flex,
  Text,
  PopoverContent,
  Box,
  Icon,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import { CaretDown, Translate } from 'phosphor-react';
import { Fragment, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { getLanguageTitle, getLanguageCode, Languages } from '../helpers';
import CustomDivider from './divider.component';

function SelectLanguage(): JSX.Element {
  const { t, i18n } = useTranslation();
  const { isOpen, onClose, onToggle } = useDisclosure();
  const currentLanguage = localStorage.getItem('DemoProject') ?? i18n.language;

  const [language, setLanguage] = useState(getLanguageTitle(currentLanguage));

  const selectLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(getLanguageCode(lang));
    localStorage.setItem('DemoProject', getLanguageCode(lang));

    onClose();
  };

  return (
    <Popover closeOnBlur isOpen={isOpen}>
      <PopoverTrigger>
        <Flex
          onClick={onToggle}
          color="white"
          align="center"
          w="200px"
          borderRadius="md"
          h="40px"
          bg="bgSecondary.100"
          px={2}
          gap={2}
          _hover={{
            bg: 'hoverGray.100',
            cursor: 'pointer',
          }}
        >
          <Icon as={Translate} boxSize={6} />

          <Text fontSize="md" id="select-language" flexGrow={1}>
            {language}
          </Text>

          <Icon as={CaretDown} boxSize={6} />
        </Flex>
      </PopoverTrigger>
      <PopoverContent
        w="200px"
        bg="bgSecondary.100"
        color="white"
        maxH="50vh"
        overflowY="auto"
        pb={1.5}
      >
        <Button
          colorScheme="blue"
          size="sm"
          onClick={onClose}
          mb={1.5}
          borderBottomRadius="none"
        >
          {t('common:Close')}
        </Button>

        {Languages.filter((lang) => lang.title !== language).map(
          (lang, index, arr) => (
            <Fragment key={lang.code}>
              <Box
                _hover={{
                  bg: 'hoverGray.100',
                  cursor: 'pointer',
                }}
                borderRadius="md"
                onClick={() => selectLanguage(lang.title)}
                px={2}
                py={1}
              >
                <Text fontSize="md" fontWeight="normal" color="white">
                  {lang.title}
                </Text>
              </Box>
              {index !== arr.length - 1 && <CustomDivider />}
            </Fragment>
          )
        )}
      </PopoverContent>
    </Popover>
  );
}

export default SelectLanguage;
