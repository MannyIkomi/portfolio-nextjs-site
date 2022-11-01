import ParagraphText from '../../components/ParagraphText';
import { getProjects } from '../../lib/notion';

export default function Project({ projectData }) {
  console.log('project id', projectData?.id);
  return <ParagraphText>Some project text</ParagraphText>;
}

export async function getStaticProps({ params }) {
  const postData = getProjects(params.id);
  return {
    props: {
      projectData,
    },
  };
}
