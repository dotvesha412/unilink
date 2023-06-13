import * as React from 'react';
import Layout from "./../../components/Layout/Layout.js";
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Headeri from './Headeri';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import post1 from './blog-post.1.md';
import post2 from './blog-post.2.md';
import post3 from './blog-post.3.md';

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'How We Fundraised Rs 20,000 by selling donated goodies?',
  description:
    "Feeding the Future: Uday Foundation's Initiative for a Hunger-Free World" ,
    image:"https://i0.wp.com/ketto.blog/wp-content/uploads/2023/02/How-to-raise-funds-for-NGO-in-India_-Important-tips.png?fit=1920%2C1080&ssl=1",
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Gifts that Give Back: Uday Foundation',
    date: 'May 5',
    description:
      'Online Shop for a Cause for Deaf Children',
    image: 'https://images.indianexpress.com/2023/05/cover-19.jpg?w=640',
    imageLabel: 'Image Text',
  },
  {
    title: 'Get to know: Fundraising Website',
    date: 'Apr 26',
    description:
      'Campaign to Empower Deaf Children through Purchases',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Keep Your Updated with Recent events at NGO',
  archives: [
    { title: 'March 2022', url: '#' },
    { title: 'March 2023', url: '#' },
    { title: 'February 2023', url: '#' },
    { title: 'January 2023', url: '#' },
    { title: 'November 2022', url: '#' },
    { title: 'October 2022', url: '#' },
    { title: 'September 2022', url: '#' },
    { title: 'August 2022', url: '#' },
    { title: 'July 2022', url: '#' },
    { title: 'June 2022', url: '#' },
    { title: 'May 2022', url: '#' },
    { title: 'April 2022', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <Layout>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Headeri title="Recent Events" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />

            ))
            }
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main title="From the Foundation Support team" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
             </Grid>

        </main>
      </Container>
    
    </ThemeProvider>
    </Layout>
  );
}