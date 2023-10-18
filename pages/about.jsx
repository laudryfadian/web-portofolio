const AboutPage = () => {

  return (
    <>
      <p>I am an experienced Backend Engineer with 2 years of expertise in Node.js, Golang, and Python, as well as various frameworks like Fastify, Express, Gin, and Flask. During my tenure, I have been actively involved in a data migration project of substantial scale, transitioning data from MongoDB to MySQL, showcasing my proficiency in handling complex technical challenges.</p>
      <br />
      <p>I am experienced in code refactoring from Node.js to Golang, ensuring improved system efficiency and dependability. Additionally, I have practical experience in integrating Third-Party APIs with vendors and effectively managing a range of APIs, including mobile, dashboard, and transaction APIs.</p>
      <br />
      <p>My commitment to ensuring seamless and efficient system operations is unwavering, and I am enthusiastic about leveraging my experience and skills to contribute meaningfully to your next project.</p>

      <br />
      <p>
      I was also a mobile app developer using Flutter for 2 years while studying. The projects I have worked on while using Flutter are: Persidekab Fanbase App, Ecommerce Shoes, Gizi App, Absent App.
      </p>
      <br />
      <p>
      I'm interested in AI, I made Face Recognition AI for absent apps with deepface. I have implemented this project and have made it my final thesis assignment
      </p>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
