import { Links } from '../../../links';
import { Icon } from '../../../ui/Icon';
import { Circle, List, Link } from './styled';

const links = [
  { name: 'x', size: 16, path: Links.X },
  { name: 'youtube', size: 22, path: Links.Youtube },
  {
    name: 'instagram',
    size: 18,
    path: Links.Instagram,
  },
  { name: 'pinterest', size: 18, path: Links.Pinterest },
];

type TSocialsProps = {
  isMenuOpen?: boolean;
};

export const Socials: React.FC<TSocialsProps> = ({ isMenuOpen }) => {
  return (
    <List $open={isMenuOpen}>
      {links.map(({ name, path, size }, idx) => (
        <Circle key={idx}>
          <Link href={path} target="_blank">
            <Icon $name={name} $size={size} />
          </Link>
        </Circle>
      ))}
    </List>
  );
};
