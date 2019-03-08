import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as styleGuides from "../../shared/style-variables";

const StyledInfoBlocks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDiv = styled.div`
  color: ${styleGuides.darkgray};
  font-weight: ${styleGuides.light};
`;

const InfoBlock = ({ num, title }) => {
  return (
    <StyledInfoBlock>
      <StyledDiv>{num}</StyledDiv>
      <StyledDiv>{title}</StyledDiv>
    </StyledInfoBlock>
  );
};

const InfoBlocks = props => {
  const titles = ["Pins", "Posts", "Followers"];
  const num = [0, 0, 0];
  return (
    <StyledInfoBlocks>
      {titles.map((title, i) => (
        <InfoBlock key={i} title={title} num={num[i]} />
      ))}
    </StyledInfoBlocks>
  );
};

InfoBlock.propTypes = {};

export default InfoBlocks;
