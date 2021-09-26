import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout home={false}>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.body }} />
        <div className={utilStyles.idText}>
          <small>ID { postData.id }</small>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = await getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}