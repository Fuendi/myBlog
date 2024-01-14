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
    Hi，我是Fuendi，全栈开发一名，Base杭州，主要技术栈是React和Nest.js，也写过Vue和微信小程序，同时我也是一名魂类游戏爱好者，这里是我的博客，也是我的树洞，我会将一些学习的过程和生活的分享在这里
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