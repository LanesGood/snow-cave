import { Link } from 'gatsby';
import * as React from 'react';
import GlobalLayout from '../layouts/global';

const AboutPage = () => {
  return (
    <GlobalLayout pageTitle="About Me">
      <main>
        <title>About me</title>
        <Link to='/'>Back to home</Link>
        <p>Hi there! I'm the creator of this site which I built with Gatsby</p>
      </main>
    </GlobalLayout>
  )
}

export default AboutPage;