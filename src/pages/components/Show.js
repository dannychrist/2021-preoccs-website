import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import moment from 'moment';

import './Show.css';

const Show = ({ item }) => {
  return (
      <Grid
        item
        component={Card}
        xs={9}
        sm={6}
        md={4}
        lg={3}
        xl={3}
        style={{
          margin: '2%',
          background: 'var(--clr-light)',
          boxShadow: 'var(--bs)',
          border: '4px solid var(--clr-dark)',
          textAlign: 'center',
        }}
      >
        <CardContent
          style={{
            padding: '0',
            margin: '0',
            width: '100%',
          }}
        >
          <Typography
            variant='h2'
            color='textPrimary'
            gutterBottom
            style={{
              fontWeight: 'bold',
              fontSize: '16px',
              color: 'var(--clr-accent)',
              border: '1px solid transparent',
              padding: '10px',
              justifyContent: 'center',
              display: 'flex',
              background: 'var(--clr-dark)',
              letterSpacing: '3px',
              margin: '0',
            }}
          >
            {moment(item.start.date).format('YYYY MMM Do')}
          </Typography>
          <Typography
            variant='h1'
            style={{
              color: 'var(--clr-dark)',
              padding: '1rem',
              fontSize: '20px',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              background: 'var(--clr-medium)',
              letterSpacing: '1px',
            }}
          >
            {item.location.city}
          </Typography>
          <div className='show-content-div'>
            {item.displayName && (
              <Typography
                variant='body1'
                style={{
                  fontSize: '16px',
                  color: 'var(--clr-dark)',
                  display: 'flex',
                  justifyContent: 'center',
                  textAlign: 'center',
                  border: '1px solid transparent',
                  background: 'var(--clr-light)',
                  padding: '10px',
                  marginTop: '0',
                  fontWeight: '800',
                  height: '100px',
                }}
              >
                {item.displayName.toUpperCase()}
              </Typography>
            )}

            <Typography
              variant='body1'
              style={{
                fontSize: '16px',
                color: 'var(--clr-dark)',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                alignContent: 'center',
                border: '1px solid transparent',
                background: 'var(--clr-light)',
                paddingTop: '.5rem',
                marginTop: '0',
                fontStyle: 'italic',
                height: '50px'
              }}
            >
              {`@${item.venue.displayName}`}
            </Typography>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                letterSpacing: '1px',
                background: 'var(--clr-light)',
                height: '50px'
              }}
            >
              <a href={item.uri}>
                <button
                  className='btn'
                  style={{
                    fontSize: '15px',
                    letterSpacing: '1px',
                  }}
                >
                  BUY/RSVP
                </button>
              </a>
            </div>
          </div>
        </CardContent>
      </Grid>
  );
};

export default Show;
