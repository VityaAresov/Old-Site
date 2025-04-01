import { GetInTouch } from '../../components/GetInTouch';
import { Intro } from '../../components/Intro';
import { Page } from '../../ui/Page';

const GetInTouchPage = () => {
  return (
    <Page>
      <Intro title="Get in touch" height={'102px'} />
      <GetInTouch />
    </Page>
  );
};

export default GetInTouchPage;
