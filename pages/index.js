import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts';
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Родился, живу и работаю в сибирском городе, столице Кузбасса, не создаю волшебных программ, но
                    результаты проведенного за компьютером времени, можно увидеть .
                </p>
                <p>
                    (Это пример веб-сайта - вы будете создавать подобный сайт на {' '}
                    <a href="https://nextjs.org/learn">Next.js /учебное пособие/</a>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>БЛОГ</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br/>
                            <small className={utilStyles.lightText}>
                                <Date dateString={date}/>
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
