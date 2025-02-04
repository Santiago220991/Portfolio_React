import styled from "styled-components";
import ActionButton from "./Button";
import Icon from "./Icon";

const AnchorTag = styled.a`
  text-decoration: none;
`;

const ModalActionButton = ({
  text,
  image,
  href,
}: {
  text: string;
  href: string;
  image: string;
}) => {
  return (
    <AnchorTag href={href}>
      <ActionButton text={text}>
        <Icon src={image} width={30} height={30} />
      </ActionButton>
    </AnchorTag>
  );
};

export default ModalActionButton;
