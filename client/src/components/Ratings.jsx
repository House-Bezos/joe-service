import React from 'react';
import RatingBar from './RatingBar.jsx';
import styled from 'styled-components';
import Stars from './Stars.jsx';

const Headline = styled.h1`
  font-family: 'PT Sans';
  font-weight: 700;
  width: 300px;
  font-size: 1.7em;
  margin: 0;
`;

const NoReviews = styled.h2`
  font-family: 'PT Sans';
  font-weight: 700;
  font-size: 1.2em;
  margin: 5px 0;
`;

const GrayText = styled.p`
  font-family: 'PT Sans';
  font-size: .9em;
  color: #565959;
  margin: 8px 0;
`;

const Ratings = ({ratings, handleRatingBarClick}) => {
  const len = ratings.length;
  const totals = {};
  let sumTotal = 0;

  for (let rating of ratings) {
    sumTotal += rating;
    totals[rating] = ++totals[rating] || 1;
  }

  const globalAverage = (sumTotal / len).toFixed(1);

  let percentages = [0, 0, 0, 0, 0, 0];

  for (let rating in totals) {
    percentages[rating] = Math.round((totals[rating] / len) * 100);
  }

  percentages.reverse().pop();

  return (
    <div style={{marginRight: '100px', marginLeft: '10px'}}>
      <Headline>Customer reviews</Headline>
      {ratings.length ?
        <div>
          <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <Stars rating={globalAverage} height={'20px'}/>
            <div style={{fontFamily: 'PT Sans', fontSize: '1.2em', marginLeft: '10px'}}>{globalAverage} out of 5</div>
          </div>
          <GrayText>{len} global rating{len > 1 && 's'}</GrayText>
        </div>
        :
        <NoReviews>There are no customer reviews yet.</NoReviews>}
      {percentages.map((percentage, index) => <RatingBar key={index} percentage={percentage} stars={5 - index} handleRatingBarClick={handleRatingBarClick}/>)}
    </div>
  );
};

export default Ratings;