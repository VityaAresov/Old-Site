import { GetInTouch } from '../../components/GetInTouch';
import { Intro } from '../../components/Intro';
import { OurServices } from '../../components/OurServices';
import { Page } from '../../ui/Page';

const OurServicesPage: React.FC = () => {
  return (
    <Page>
      <Intro title="Our services" height={'148px'} />
      <OurServices onPage={true} />
      <GetInTouch hide={true} />
    </Page>
  );
};

export default OurServicesPage;
