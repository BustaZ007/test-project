import { Button } from '@chakra-ui/react';
import { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Webcam from 'react-webcam';

function WebcamCapture(): JSX.Element {
  const webcamRef = useRef<Webcam>(null);
  const [imgSrc, setImgSrc] = useState<string>();
  const { t } = useTranslation('common');

  const capture = useCallback(() => {
    if (imgSrc) {
      setImgSrc(undefined);
    } else {
      const imageSrc = webcamRef?.current?.getScreenshot();
      setImgSrc(imageSrc ?? '');
    }
  }, [webcamRef, setImgSrc]);

  return (
    <>
      {imgSrc ? (
        <img alt="Screenshot" src={imgSrc} />
      ) : (
        <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      )}
      <Button onClick={capture}>
        {t(`${imgSrc ? 'RecaptureButton' : 'CaptureButton'}`)}
      </Button>
    </>
  );
}

export default WebcamCapture;
