import React from 'react';
// import clsx from 'clsx';
// import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
// import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Globe } from '../components/Globe'

import styles from './index.module.css';

function HomepageHeader() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <div className={styles.container}>
    笔记还在迁移中,请过一段时间再来看吧...
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}'s website`}
      description="Description will go into a meta tag in <head />">
      <main className={styles.mainContainer}>
        <HomepageHeader />
        <Globe/>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}