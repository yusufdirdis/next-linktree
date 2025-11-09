"use client"
import React, { Suspense } from 'react';
import { Container } from './styles';
import Button from '../Button';
import { variables } from '../../variables';
import Header from '../Header';
import Background from '../Three/Background';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function LinkTree() {
  function Loading() {
    return <div>🌀 Loading...</div>;
  }

  return (
    <>
      <Container>
        {/* Header Section */}
        <Header picture="gradtrack-logo.JPG" title='GradTrack' subtitle={''} />

        {/* LinkedIn Links */}
        <Button link='https://www.linkedin.com/in/yusufdirdis/' icon={<LinkedInIcon />} name='Yusuf Dirdis' backgroundcolor={variables.linkedinColor} />
        <Button link='https://www.linkedin.com/in/jongan69/' icon={<LinkedInIcon />} name='Jonathan Gan' backgroundcolor={variables.linkedinColor} />
        <Button link='https://www.linkedin.com/in/paul-pio/' icon={<LinkedInIcon />} name='Paul Pio' backgroundcolor={variables.linkedinColor} />
        <Button link='https://www.linkedin.com/in/raphaeltalonfiu/' icon={<LinkedInIcon />} name='Raphael Talon' backgroundcolor={variables.linkedinColor} />
      </Container>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Suspense fallback={<Loading />}>
          <Background />
        </Suspense>
      </div>
    </>
  )
}
