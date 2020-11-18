import React from 'react';

import { Styled } from './SingleElement.style';

interface Props {
  isImageElement: boolean;
  imgUrl?: string;
  imgAlt?: string;

  isFullWidthElement?: boolean;
  
  isDivElement:boolean;
  children?: JSX.Element[] | JSX.Element;
  
  gap?: number; //space between items
};

const SingleElement: React.FC<Props> = (props) => {

  if(props.isImageElement) {
    if(props.isFullWidthElement) {
      // console.log(props.children);
      return (
        <Styled.Container isFullWidthElement={props.isFullWidthElement} gap={props.gap}>
          <Styled.Image src={props.imgUrl} alt={props.imgAlt}/>
        </Styled.Container>
      );
    } else {
      return (
        <Styled.Image src={props.imgUrl} alt={props.imgAlt} gap={props.gap}/>
      );
    }
  } else if(props.isDivElement && props.children) {
      return (
        <Styled.Container isFullWidthElement={props.isFullWidthElement} gap={props.gap}>
          {props.children}
        </Styled.Container>
      )
  } else {
    return (
      <>
        {/* return empty when the pattern is not matched */}
      </>
    );
  }

};

export default SingleElement;