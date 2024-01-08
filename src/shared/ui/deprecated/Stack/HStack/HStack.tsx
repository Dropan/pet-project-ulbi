import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
* Устарел, используем новые из папки redesigned
* @deprecated
*/
export const HStack = (props: HStackProps) => (
  <Flex direction="row" {...props} />
);
