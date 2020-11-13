import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 30px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
`;

const Headline = styled.h1`
  font-family: 'Amazon Ember';
  font-size: .9em;
`;

const GrayText = styled.p`
  font-family: 'Arial';
  font-size: .9em;
  color: #565959;
`;

const ThinLine = styled.p`
  border-left: 1px solid #d1d1d1;
  margin-left: 15px;
  padding: 0 10px;
  line-height: 100%;
`;

const Verified = styled.p`
  font-family: 'Amazon Ember';
  font-size: .75em;
  color: #c45500;
`;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ReviewItem = ({review}) => {
  const {avatar, country, full_text, headline, overall_rating, review_date, user_name, verified_purchase, helpful} = review;

  let [year, month, day] = review_date.split('T')[0].split('-');

  return (
  <Container>
    <Box>
      <img src={avatar} style={{borderRadius: '100%', width: '30px', height: 'auto'}}/>
      <div style={{marginLeft: '10px'}}>{user_name}</div>
    </Box>
    <div>
      Stars Component... <Headline>{headline}</Headline>
    </div>
    <GrayText>
      Reviewed in {country} on {`${months[month - 1]} ${day}, ${year}`}
    </GrayText>
    {verified_purchase === 1 && <Verified>Verified Purchase</Verified>}
    <div>
      {full_text}
    </div>
    <GrayText>
      {`${helpful} people found this helpful`}
    </GrayText>
    <div style={{display: 'inline-flex', alignItems: 'center', width: '300px'}}>
      <button style={{height: '29px', width: '98px', padding: '1px 6px', cursor: 'pointer', opacity: '.90'}}>Helpful</button><ThinLine><GrayText>Comment</GrayText></ThinLine><ThinLine><GrayText>Report abuse</GrayText></ThinLine>
    </div>
  </Container>
  );
};

export default ReviewItem;
