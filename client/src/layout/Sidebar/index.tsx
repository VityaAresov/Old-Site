import { useEffect, useState } from 'react';
import { Links } from '../../links';
import { Icon } from '../../ui/Icon';
import { Aside, List, Mouse, VerticalText } from './styled';

const links = [
  { name: 'instagram', size: 18, path: Links.Instagram },
  { name: 'youtube', size: 20, path: Links.Youtube },
  { name: 'pinterest', size: 20, path: Links.Pinterest },
  { name: 'x', size: 16, path: Links.X },
];

export const Sidebar = () => {
  const [isPageBottom, setIsPageBottom] = useState(false);

  useEffect(() => {
    const footerOffsetHeight = 100;
    const checkScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - footerOffsetHeight) {
        setIsPageBottom(true);
      } else {
        setIsPageBottom(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <Aside>
      <List>
        {links.map(({ name, size, path }, idx) => (
          <a href={path} key={idx} target="_blank" rel="noreferrer">
            <Icon $name={name} $size={size} />
          </a>
        ))}
      </List>
      <VerticalText>scroll</VerticalText>
      <Mouse $rotate={isPageBottom}>
        <Icon $name="scroll" $size={53} />
      </Mouse>
    </Aside>
  );
};
